const express = require('express');

const OngController = require('./controllers/ongController');
const IncidentController = require('./controllers/incidentController');
const ProfileController = require('./controllers/profileController');

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);

routes.post('/incidents', IncidentController.store);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents', IncidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;
