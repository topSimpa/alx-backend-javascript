/**
* @file Links routes to Controllers
* @author Simpa
*/

import express from 'express';
import AppController from '../controllers/AppController';
import StudentController from '../controllers/StudentController';

const routes = express.Router();
const appController = new AppController();
const studentController = new StudentController();

routes.get('/', appController.getHomepage);
routes.get('/students', studentController.getAllStudents);
routes.get('/students:major', studentController.getAllStudentsByMajor);

module.exports = routes;
