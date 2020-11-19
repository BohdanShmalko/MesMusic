const Session = require('./session')

const DbWrapper = (req, connection) => {
    req.db = {
        query : (sql) => {
            connection.connect()
            return connection.query(sql).then(data => {
                connection.end()
                return data.rows}
            ).catch(e => {throw e})
        }
    }
}

const SessionWrapper = (req, res, callback) => {
    const  session = new Session(req, res)
    session.get( data => {
    data = JSON.parse(data)
    req.session = {
        token : session.token,
        data,
        set(obj) {
            session.set(obj)
        }
    }
    session.end()                           
    callback(req, res)
    })
}

module.exports = {DbWrapper, SessionWrapper}