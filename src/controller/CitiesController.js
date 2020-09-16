
const CitiesService = require('../services/CitiesService')
const citiesService = new CitiesService()

// class CitiesController {
//     constructor (){
//        this.citiesService = new CitiesService()
//     }
const controllerMethods = {
    getAllCitiesByLang(req, res, next){
        const {lang, inpuString} = req.params
        const response = citiesService.getCitiesByInputString(lang, inpuString)
        //res.render('index', response)
        res.json(response)
    }

}



module.exports = controllerMethods

