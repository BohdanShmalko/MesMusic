module.exports = (db, sessionsClient) => ({
    db,
    standartHeaders : {
        'Access-Control-Allow-Methods' : 'GET, POST, DELETE, OPTIONS, PUT',
        'Access-Control-Allow-Headers': 'Accept, Content-Type',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Credentials': true
    },
    sessions : {
        time : 60*60*3,
        client : sessionsClient()
    },
    fileStorage : { 
        deffaultPath : './fileStorrage'
    }
})