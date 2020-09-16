const QueriesHandler = require("../database/utils/Queries");
const queriesHandler = new QueriesHandler();
class CitiesRepository {
    constructor (){
        this.queriesHandler = queriesHandler
    }

    getAllCities(){
        const cities = this.queriesHandler.custom("SELECT city_name FROM city_info_lang");
        return cities
    }

    getAllCitiesByLang(lang){
        const cities =  this.queriesHandler.custom("SELECT city_name, city_id FROM city_info_lang WHERE lang="+"'"+lang+"'");

        return cities
    }

    getCityByNameAndLang(lang,name){
        const citiesByLang = this.getAllCitiesByLang(lang);
        
        let cityId = undefined
        if(!citiesByLang) {
            throw "error database is not working well"
        }
        citiesByLang.map((c)=>{
            if(c.city_name==name){
                cityId = c.city_id
            }
        })
        let result = undefined
        if(cityId){
            result = await this.queriesHandler.custom("SELECT city_name, city_id FROM city_info_lang WHERE lang="+"'"+lang+"'");
        }

        return result
    }

    getLatLonFromCityId(cityId){
        const cities = this.queriesHandler.custom("SELECT city.geo_coords_lat, city.geo_coords_lon FROM city WHERE city_id="+"'"+cityId+"'");

        return {cityId, ...cities[0]}
    }

}

module.exports = CitiesRepository

