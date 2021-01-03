module.exports = {
    profileSQL : {
        getUserStatus : (id) => 
        ({text : 'SELECT status FROM users WHERE id = $1',
          values : [id]}),

        updateUserStatus : (id, newStatus) => 
        ({ text : 'UPDATE users SET status = $1::varchar(50) WHERE id = $2::int8',
           values : [newStatus, id]})
    },
    musicSQL : {

    },
    authorization : {

    }
}