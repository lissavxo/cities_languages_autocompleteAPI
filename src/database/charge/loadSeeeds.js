
const seeds = require("./seeds");
const QueriesHandler = require("../utils/Queries");
const { values } = require("./seeds");
const queriesHandler = new QueriesHandler();
class ChargeSeeds {
    constructor (){
        this.seeds = seeds
        this.queriesHandler = queriesHandler
    }

    executeCharge(){
        
        this.seeds.map((seed) => {
            this.queriesHandler.insert(seed.tableName,this.getInsertFormated(seed) )
        })
        
    }

    getInsertFormated(seed){
        const tags = Object.keys( seed.values[0] );
        const values = []
        seed.values.map(
            
            (value) => {
                const arrayValues = []
                tags.map((tag) => {
                    arrayValues.push(value[tag])
                })
                values.push(arrayValues)
                
            }
        )
        return {tags, values}
    }

}

module.exports = ChargeSeeds

// const myteste = new ChargeSeeds()

// myteste.insertCountries()
