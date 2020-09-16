const CitiesRepository = require('../repository/CitiesRepository')

class CitiesService {
    constructor (){
        this.citiesRepository = new CitiesRepository()
    }
    /**
     * 
     * @param {String} lang - double char to define the location language
     * @param {String} inputString - the name inouted by user
     */
    getCitiesByInputString(lang, inputString){
        const splitedIputString = inputString.split()
    
        const cities = this.citiesRepository.getCityByNameAndLang(lang);

        if(!cities) {
            throw "eroor in database"
        }
        const matchCities = []
        cities.map((c) => {
            const splitedCityName = c.city_name.split();
            const intersection = splitedIputString.filter(element => splitedCityName.includes(element));
            if(intersection.length >= Math.ceil(splitedIputString.length *0.5)){
                print("entrei")
                matchCities.push(c)
            }
        })
        if(matchCities.length > 0){
            matchCities.forEach(mc, i => {
                const citylatLon = this.citiesRepository.getLatLonFromCityId(mc.city_id)
                matchCities[i] = {city_name,...citylatLon}
            })
        }
        return matchCities
    }
}

module.exports = CitiesService