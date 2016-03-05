module.exports = (function() {
    'use strict';
    var router = require('express').Router();
	var bodyParser = require('body-parser');;
	var log4js = require('log4js');
	var logger = log4js.getLogger('dev');
    
    // array destiné à stocker et passer en parametre aux futures modules des données statiques
    var tabStatic = [];
	
	router.use(bodyParser.json());
	router.use(bodyParser.urlencoded({extended : true}));
		
	router.get('/scenario/:scenarioname', function(req, res) {
        logger.debug("scenario called !");
        res.sendStatus(200);
	});
	
	router.get('/module/:modulename', function(req, res) {
		res.sendStatus(200);
	});

	router.get('/athome', function(req, res) {
		
	});

	router.get('/atjob', function(req, res) {
		
	});

	router.get('/leavehome', function(req, res) {
		
	});

	router.get('/leavejob', function(req, res) {
		
	});

	router.get('/click/:device/:idelem/:state', function(req, res) {
	
	});
	
	router.get('/pieces/list', function(req, res){
		
	});

	router.get('/device/list', function(req, res){
		
	});
	
	router.post('/device/insert', function(req, res){
		
	});
	
	router.post('/device/update', function(req, res){
		
	});

    return router;
})();