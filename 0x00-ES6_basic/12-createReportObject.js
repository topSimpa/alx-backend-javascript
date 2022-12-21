export default function createReportObject(employeesList) {
  const report = {
    allEmployees: employeesList,

    getNumberOfDepartments() {
      return Object.keys(this.allEmployees);
    },
  };

  return report;
}
