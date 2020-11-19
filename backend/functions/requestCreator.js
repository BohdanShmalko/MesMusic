const requestCreator = (method, url, callback, config = {}) => ({
    method, url, callback, config
})

module.exports = requestCreator