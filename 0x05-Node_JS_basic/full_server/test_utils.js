const countStudents = require('./utils');

countStudents("nope.csv")
    .then(() => {
        console.log("Done!");
    })
        .catch((error) => {
        console.log(error);
    });

countStudents("database.csv")
    .then((data) => {
        console.log(data);
    })
        .catch((error) => {
        console.log(error);
    });
console.log("After!");
