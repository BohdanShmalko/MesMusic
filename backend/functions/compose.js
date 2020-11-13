const Session = require('./session')

const compose = (app, requests) => {
    requests.forEach(page => {
        page.forEach(reqObj => {
            app[reqObj.method](reqObj.url, (req,res) => {
                res.sendJSON = (obj) => res.send(JSON.stringify(obj))
                if(reqObj.hasSession) {
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
                        reqObj.callback(req, res)
                    })
                }
                else reqObj.callback(req, res)
            })
        })
    })
}

module.exports = compose