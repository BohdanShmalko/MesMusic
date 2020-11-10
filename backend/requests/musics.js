const musics =  [
    {
        method : 'get',
        url : '/testMusic1',
        callback(req,res) {
            res.send('testMusic1')
        }
    },
    {
        method : 'get',
        url : '/testMusic2',
        callback(req,res) {
            res.send('testMusic2')
        }
    }
]

module.exports = musics