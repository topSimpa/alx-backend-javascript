const express = require('express');

const router = express.Router();
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

router.get('/', (req, res) => {
  AppController.getHomepage(req, res);
});
router.get('/students', (req, res) => {
  StudentsController.getAllStudents(req, res);
});
router.get('/students/:major', (req, res) => {
  StudentsController.getAllStudntsByMajor(req, res);
});

module.exports = router;
