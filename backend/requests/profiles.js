const profiles =  [
    {
        method : 'get',
        url : '/testProfile1',
        callback(req,res) {
            res.send('testProfile1')
        }
    },
    {
        method : 'get',
        url : '/testProfile2',
        callback(req,res) {
            res.send('testProfile2')
        }
    }
]

module.exports = profiles