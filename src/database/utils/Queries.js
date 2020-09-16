// const queryFunctions = {
//     insert: (tableName, params, ) => {

//     }
// }

const ConnectionHandler = require('./Connection');
const connectionHandler = new ConnectionHandler();
class QueryHandler {
    constructor(){
        this.connectionHandler = connectionHandler
    }

    /**
     *
     * @param {String} tableName
     * @param {Object} params -paramethers with the data to be inserted
     * @param  params.tags - array of tags
     * @param  params.values - array of values
     */
    getInsertQueryString(tableName, params){
        const tagsString = params.tags.join(',')
        let valuesString = undefined
        if (params.values.length > 0) {
            const insertMultValuesArray = []
            params.values.map(

                (eachValues) => {
                    eachValues.forEach((v,i) => {
                        if (typeof v === 'string'){
                            eachValues[i] =  "'"+v+"'"
                        }
                    });
                    insertMultValuesArray.push("("+eachValues.join(',')+")")
                }
            )
            valuesString = insertMultValuesArray.join(',')
            // console.log(valuesString)
        }else{
            valuesString = "("+params.values.join(',')+")"
        }
        return `INSERT INTO ${tableName} (${tagsString}) VALUES `+valuesString+";"
        }
    /**
     * @param {String} tableName - table name
     *
     * @param insertList - is an Array of objects,
     * each object contains an attributeLabel and an attributeValue
     *
     * [{tag:nameField, value:valueField}]

    */
    insert(tableName, params){
        const connection = this.connectionHandler.getConnection("givingUp");

        if (!connection) {throw "database is not connected"}

        const query = this.getInsertQueryString(tableName,params)

        connection.query(query, function (err, result, fields) {
            if (err) throw err;
            if (result) {
                console.log("Ok !"+tableName+" charged ... ")
                return true
            }
        });
        connection.end()


    }

    custom(query){
        const connection = this.connectionHandler.getConnection("givingUp");
        try {
            let result = undefined
            connection.query(query, function (err, res, fields) {
                if (err) throw "cutom query database error -> " +err;
                if (res) {
                    // console.log(Object.values(JSON.parse(JSON.stringify(res))))
                    result =  Object.values(JSON.parse(JSON.stringify(res)))
                    console.log(result)
                }
            });
            connection.end()

            return result
            // const result =  await this.connection.query(query, );
            // //   Object.values(JSON.parse(JSON.stringify(res)))

        } catch (error) {
            console.log("cutom queryr error -> "+error)
            connection.end()
            return undefined
        }
        


    }
}

module.exports = QueryHandler


