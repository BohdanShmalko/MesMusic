const Websocket = require("websocket").server,
  dbConnection = require("../database/connection"),
  { ShvidkoRedisClient } = require("shvidko-redis");

const MOBILE_PLATFORM = 'MOBILE_PLATFORM'
const WEB_PLATFORM = 'WEB_PLATFORM'

class ClasicWS {
    constructor(options){
        this.connections = {}
        this.ws = new Websocket(options)
        this.db = dbConnection('127.0.0.1', 5432, 'mesmusic', 'mesuser', '1111')
        this.sessionClient = ShvidkoRedisClient

        this.ws.on('request', this.onRequest)
    }

    getWebToken = req => req.cookies.find(obj => obj.name === 'token')
    getMobileToken = req => req.headers['x-access-token']

    chooseReqToken = req => {
        const cookiesToken = this.getWebToken(req)
        if (cookiesToken) return cookiesToken
        const mobileToken = this.getMobileToken(req)
        if (mobileToken) return mobileToken
    }

    choosePlatformToken = (platform, req) => {
        switch (platform) {
            case MOBILE_PLATFORM : return this.getMobileToken(req)
            case WEB_PLATFORM : return this.getWebToken(req)
        }
    }

    getConnection = req => req.accept('', req.origin)
    getData = msg => JSON.parse(msg[msg.type + 'Data'])

    getSessionInf = token => this.sessionClient.get(token)

    setClient = async (token, connection) => {
        const {userId} = await this.getSessionInf(token)
        if (!this.connections[userId]) this.connections[userId] = {}
        this.connections[userId][token] = connection
    }
    delClient = async token => {
        const {userId} = await this.getSessionInf(token)
        delete this.connections[userId][token]
    }
    getClient = async (token) => {
        const {userId} = await this.getSessionInf(token)
        return this.connections[userId][token]
    }

    onRequest = async req => {
        // const token = this.chooseReqToken(req)
        // const connection = this.getConnection(req)
        // if(!token) return connection.send('You no authorize user')
        // await this.setClient(token, connection)
        console.log('user is connect')
        connection.on('message', async msg => {
            console.log('message is ' + msg)
        //     const {roomId, message} = this.getData(msg)
        //     const {userId} = await this.getSessionInf(token)
        //     const {rows} = await this.db.query(`SELECT user_id
        //                                         FROM RoomMembers
        //                                         WHERE room_id = $1`, [roomId])
        //
        //     const isFindUser = rows.find(arr => arr.user_id === userId)
        //     if (!isFindUser) return connection.send('You do not have access to this chat')
        //
        //     await this.db.query(`INSERT INTO RoomMessages (user_id, room_id, message)
        //                          VALUES ($1, $2, $3)`, [userId, roomId, message])
        //
        //     rows.forEach(arr => {
        //         if (this.connections[arr.user_id])
        //             for (let connectionToken in this.connections[arr.user_id])
        //                 this.connections[arr.user_id][connectionToken].send(data.message)
        //     })
         })
        connection.on('close', (code, description) => {
            console.log('Disconected ' + description);
            //delClient(token)
        })
    }
}

module.exports = ClasicWS