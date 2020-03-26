import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import OngController from './app/controllers/OngController';
import IncidentController from './app/controllers/IncidentController';

const routes = Router();

// SessionController
routes.post('/login', SessionController.login);

// OngController
routes.get('/ongs', OngController.listOngs);
routes.post('/ongs', OngController.createOng);

// IncidentController
routes.get('/incidents', IncidentController.listIncidents);
routes.get('/incidents/profile', IncidentController.listIncident);
routes.post('/incidents', IncidentController.createIncident);
routes.delete('/incidents/:id', IncidentController.deleteIncident);

export default routes;
