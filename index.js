// Write your solution in this file!
const employee = {
    name: 'Vic',
    streetAddress: '1009 Cumbermeade Rd.',
};
employee;
function updateEmployeeWithKeyAndValue(employee, key, value) { 
    const updatedEmployee = {...employee}
    updatedEmployee.name = 'Sam'
    updatedEmployee.streetAddress = '11 Broadway'
    return updatedEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.name = 'Sam'
    employee.streetAddress = '12 Broadway';
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const employeeDeleted = {...employee}
    delete employeeDeleted.name;
    return employeeDeleted;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name
    return employee;
}



