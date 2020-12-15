const easyDB = reqDB => ({
    query : sql => {
        return reqDB.query(sql).then(async data => {
            return data.rows
        }).catch(e => {throw e})
    }
})

module.exports = easyDB