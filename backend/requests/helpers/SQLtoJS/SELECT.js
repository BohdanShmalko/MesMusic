class SELECT {
    constructor(){
        this.queryString = 'SELECT' 
        this.isUseWhere = false       
    }

    COLUMN = column => {
        if(typeof column === 'string')
            this.queryString += ` ${column},`
        else if(typeof column === 'object')
            this.queryString += ` ${column.name} AS "${column.as}",`
        else 
            {throw 'type of parameters COLUMN is bad'}
        return this
    }

    FROM = from => {
        this.queryString = this.queryString.slice(0, -1)
        this.queryString += ` FROM ${from} `
        return this
    }

    JOIN = join => {
        if(typeof join === 'object'){
            this.queryString += `INNER JOIN ${join.on} ON ${join.param1} = ${join.param2} `
        }
        else {throw 'type of parameters JOIN is bad'}

        return this
    }

    WHERE = where => {
        if(!this.isUseWhere) {
            this.queryString += `WHERE`
            this.queryString += ` ${where} `
        }
        else this.queryString += `AND ${where} `
        this.isUseWhere = true
        return this
    }

    OTHER = other => {
        this.queryString += other
        return this
    }
}

module.exports = SELECT

// const selectQuery = new SELECT()
//     .COLUMN('days').COLUMN('places').COLUMN({name : 'id', as : 'userId'})
//     .FROM('users')
//     .JOIN({on : 'someOn', param1 : 'param1.id_param2', param2 : 'param2.id'})
//     .JOIN({on : 'someOn', param1 : 'param1.id_param2', param2 : 'param2.id'})
//     .WHERE('some1 = some2').WHERE('some3 LIKE some4')
//     .OTHER('ORDER BY createDate DESC LIMIT 10').queryString