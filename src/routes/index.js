const express = require('express');
const router = express.Router();
const CitiesController = require("../controller/CitiesController")
/* GET home page. */ 
router.get('/:lang/:inpuString', CitiesController.getAllCitiesByLang);

module.exports = router;
