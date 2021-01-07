class INSERT {
    constructor(){
        this.queryString = ''
        this.into = ''
        this.what = []
    }

    rebuildQueryString = () => {
        this.queryString = `INSERT INTO ${this.into} `
        let columns = '', values = '', isFirst = true
        
        for(let obj of this.what){
            if(isFirst){
                isFirst = false
                columns += obj.column
                values += obj.value
            }
            else {
                columns += ` ,${obj.column}`
                values += ` ,${obj.value}`
            }
        }
        columns = `(${columns})`
        values = `(${values})`
        this.queryString += `${columns} VALUES ${values}`
    }

    INTO = into => {
        this.into = into
        return this
    }

    VALUE = value => {
        this.what.push(value)
        this.rebuildQueryString()
        return this
    }
}

module.exports = INSERT

// let insertString = new INSERT()
// .INTO('sometable')
// .VALUE({column : 'someColumn1', value : 'someValue1'})
// .VALUE({column : 'someColumn2', value : 'someValue2'}).queryString