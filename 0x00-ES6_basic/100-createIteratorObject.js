export default function createIteratorObject(report) {
  const people = [];

  for (const person of Object.values(report.allEmployees)) {
    people.push(...person);
  }
  return people;
}
