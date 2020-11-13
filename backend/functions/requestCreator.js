const requestCreator = (method, url, callback, hasSession = false) => ({
    method, url, callback, hasSession
})

module.exports = requestCreator