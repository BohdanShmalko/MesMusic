module.exports = (db) => ({
    loadNews = () => db.query(``, []).then(data => data.rows)
})