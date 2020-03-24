const express = require('express');

const Routes = express.Router();

const OngController = require('./controllers/OngController');

const IncidentController = require('./controllers/IncidentController');

const ProfileController = require('./controllers/ProfileController');

const SessionsController = require('./controllers/SessionsController');

Routes.post('/sessions', SessionsController.create);

Routes.post('/ongs', OngController.create);
Routes.get('/ongs', OngController.read);

Routes.post('/incidents', IncidentController.create);
Routes.get('/incidents', IncidentController.read);
Routes.delete('/incidents/:id', IncidentController.delete);

Routes.get('/profile', ProfileController.read);


module.exports = Routes;
