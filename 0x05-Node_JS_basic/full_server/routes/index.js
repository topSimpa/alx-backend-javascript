/**
* @file Links routes to Controllers
* @author Simpa
*/

import express from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const routes = express.Router();

routes.get('/', AppController.getHomepage);
routes.get('/students', StudentsController.getAllStudents);
routes.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = routes;
