// Write your solution in this file!
const employee = {
    name: "name",
    streetAddress: "",
}




function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObject = { ...employee};
    newObject[key] = value;
    
    return newObject;

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;
}

function deleteFromEmployeeByKey(employee, key) {

    const deletedObject = {...employee};

    delete deletedObject[key];
    return deletedObject;

}

function destructivelyDeleteFromEmployeeByKey(employee, key) {

    delete employee[key];

    return employee;

    

}