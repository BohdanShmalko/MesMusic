const Websocket = require('websocket').server

class ClasicWS {
    constructor({db, sessionClient, httpServer, autoAcceptConnections}){
        this.connections = {}
        this.ws = new Websocket({httpServer, autoAcceptConnections})
        this.db = db
        this.sessionClient = sessionClient

        this.ws.on('request', this.onRequest)
    }

    getToken = req => req.cookies.find(obj => obj.name === 'token')
    getConnection = req => req.accept('', req.origin)

    getSessionInf = token => this.sessionClient.get(token)
    setSessionInfo = (token, newData) => this.sessionClient.set(token, newData)

    setClient = async (token, connection) => {
        const {userId} = await this.getSessionInf(token)
        this.connections[userId] = connection
    }
    delClient = async token => {
        const {userId} = await this.getSessionInf(token)
        delete this.connections[userId]
    }
    getClient = token => this.connections[token]

    getData = msg => JSON.parse(msg[msg.type + 'Data'])

    onRequest = async req => {
        const token = this.getToken(req).value
        const connection = this.getConnection(req)
        if(!token) return connection.send('You no authorize user')
        this.setClient(token, connection)
        connection.on('message', async msg => {
            const data = this.getData(msg)
            const sessionData = await this.getSessionInf(token)
            const {rows} = await this.db.query(`SELECT users_id FROM DialogMembers WHERE dialogs_id = ${data.dialogId}`)

            const isFindUser = rows.find(arr => arr.users_id == sessionData.userId)
            if(!isFindUser) return connection.send('You do not have access to this chat')
            ///////!!!!!!!!!!!!!!!!!!TIME!!!!!!!!!!!!!!!!!!!!////////////

            await this.db.query(`INSERT INTO DialogMessages (messageContent, createDate, users_id, dialogs_id)
             VALUES ('${data.message}', '${new Date(Date.now()).toLocaleDateString()}', ${sessionData.userId}, ${data.dialogId})`)

            rows.forEach(arr =>{ 
                if (this.connections[arr.users_id])
                this.connections[arr.users_id].send(data.message)})
        })
        connection.on('close', (code, description) => {
            console.log('Disconected ' + description);
            delClient(token)
        })
    }
}

module.exports = ClasicWS