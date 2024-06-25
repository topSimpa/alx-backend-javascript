const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((data) => {
        const studentsData = Object.entries(data);
        let lineOne = 'This is the list of our students';
        for (const fields of studentsData) {
          const totalNum = fields[1].length;
          const field = fields[0];
          const students = fields[1].join(', ');
          lineOne += `\nNumber of students in ${field}: ${totalNum}. List: ${students}`;
        }
        response.status(200).send(lineOne);
      })
      .catch((error) => {
	response.status(500).send(error.message);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const major = request.params.major;

    if ((major !== 'CS') && (major !== 'SWE')) {
      response.status(500).send('Major parameter must be CS or SWE');
    }

    readDatabase(process.argv[2])
      .then((data) => {
        const studentsData = data[major];
        const students = studentsData.join(', ');
        response.status(200).send(`List: ${students}`);
      })
      .catch((error) => {
        response.status(500).send(error.message);
      });
  }
}

module.exports = StudentsController;
