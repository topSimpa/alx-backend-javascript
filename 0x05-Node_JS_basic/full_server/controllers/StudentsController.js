/**
* @file Student Controller Module
* @author Simpa
*/

import readDatabase from '../utils';

const database = process.argv[2];

export default class StudentsController {
  /**
  * Controls the /student responses
  */

  // eslint-disable-next-line class-methods-use-this
  static getAllStudents(req, res) {
    /**
    * retrieve all the student details in the database
    * @summary control the /students endpoint
    * @param {HttpResponse} res - the response event
    * @param {HttpRequest} req - the request event
    */
    readDatabase(database).then((courseCount) => {
      const sortedDatabase = Object.keys(courseCount)
        .sort()
        .reduce((newDict, field) => {
          // eslint-disable-next-line no-param-reassign
          newDict[field] = courseCount[field];
          return newDict;
        }, {});
      res.status(200).write('This is the list of our students');
      // eslint-disable-next-line guard-for-in
      for (const field in courseCount) {
        res.write(`\nNumber of students in ${field}: ${sortedDatabase[field].length}. List: ${sortedDatabase[field]}`);
      }
      res.end();
    }).catch((err) => {
      res.status(500)
        .write('This is the list of our students\n')
        .write(err.message)
        .end();
    });
  }

  // eslint-disable-next-line class-methods-use-this
  static getAllStudentsByMajor(req, res) {
    /**
    * retrieve all the student in a paticular major
    * @summary control the /students:major endpoint
    * @param {HttpResponse} res - the response event
    * @param {HttpRequest} req - the request event
    */

    if (['SWE', 'CS'].includes(req.params.major)) {
      readDatabase(database).then((courseCount) => {
        res.status(200).send(`List: ${courseCount[req.params.major]}`);
      }).catch((err) => {
        res.status(500).send(err.message);
      });
    } else {
      res.status(500).send('Major parameter must be CS or SWE');
    }
  }
}
