const compose = (app, requests) => {
    requests.forEach(page => {
        page.forEach(reqObj => {
            app[reqObj.method](reqObj.url, (req,res) => {
                reqObj.callback(req, res)
            })
        })
    })
}

module.exports = compose