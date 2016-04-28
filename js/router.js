module.exports = (function() {
    'use strict';
    var router = require('express').Router();
    var dataservice = require('./dataservice');
	var bodyParser = require('body-parser');;
	var log4js = require('log4js');
	var logger = log4js.getLogger('dev');
    
    // array destiné à stocker et passer en parametre aux futures modules des données statiques
    var tabStatic = [];
	
	router.use(bodyParser.json());
	router.use(bodyParser.urlencoded({extended : true}));
		
	router.get('/scenario/:scenarioname', function(req, res) {
       // logger.debug("scenario called !");
        res.sendStatus(200);
	});
	
	router.get('/module/:modulename', function(req, res) {
		res.sendStatus(200);
	});
    
    router.get('/plugin/:pluginname/:physicalid/:action', function(req, res) {
		res.sendStatus(200);
	});

	// router.get('/athome', function(req, res) {
		
	// });

	// router.get('/atjob', function(req, res) {
		
	// });

	// router.get('/leavehome', function(req, res) {
		
	// });

	// router.get('/leavejob', function(req, res) {
		
	// });

	// router.get('/click/:device/:idelem/:state', function(req, res) {
	
	// });
	
	router.get('/room/list', function(req, res){
		dataservice.getRoomList(function (dataResponse) {
			res.send(dataResponse);
		});
	});
    
    router.get('/room/get/:id', function(req, res){
        var id = req.params.id;
		dataservice.getRoomById(id, function (dataResponse) {
			res.send(dataResponse);
		});
	});
    
    router.get('/room/update/:id/:name', function(req, res){
        var newRoom={
            id: req.params.id,
            name: req.params.name
        };
		dataservice.updateRoom(newRoom);
	});
    
    router.get('/room/add/:name', function(req, res){
        var name = req.params.name;
		dataservice.addRoom(name);
	});
    
    router.get('/room/delete/:id', function(req, res){
		var id = req.params.id;
		dataservice.addRoom(id);
	});

    return router;
})();