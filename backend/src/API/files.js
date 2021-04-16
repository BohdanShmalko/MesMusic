const { requestCreator } = require('shvidko');

const image = requestCreator('get', '/image/:path/:file', (req, res) => {
    const file = req.fs.get(`${__dirname}/../../fileStorrage/${req.params.path}/${req.params.file}`)
    res.sendFile(file, 200, {'Content-Type' : 'image/png'})
})

module.exports = [image];