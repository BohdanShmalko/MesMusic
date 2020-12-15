const {DbWrapper, SessionWrapper} = require('./wrappers')

const compose = (composeOptions, requests) => {
    const {app, DBconnections} = composeOptions
    requests.forEach(page => {
        page.forEach(reqObj => {
            app[reqObj.method](reqObj.url, (req,res) => {
                res.sendJSON = (obj) => res.send(JSON.stringify(obj))
                if(reqObj.config.useDB) {
                    DbWrapper(req, DBconnections)
                }
                if(reqObj.config.useSession) {
                    SessionWrapper(req, res, reqObj.callback)
                }
                else reqObj.callback(req, res)

            })
        })
    })
}

module.exports = compose