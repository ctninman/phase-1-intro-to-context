// // Your code here

function createEmployeeRecord(employeeArray){
  return {
    firstName: employeeArray[0],
    familyName: employeeArray[1],
    title: employeeArray[2],
    payPerHour: employeeArray[3],
    timeInEvents: [],
    timeOutEvents: []
  }
  console.log(employeeArray)
}


function createEmployeeRecords (arrayOfArrays) {
  let newArray = arrayOfArrays.map(createEmployeeRecord)
  return newArray
}


function createTimeInEvent (empRecObj, dateStamp){
  const timeInObject = {
    type: 'TimeIn',
    hour: parseInt(dateStamp.slice(-4)),
    date: dateStamp.slice(0,10)
  }
  empRecObj.timeInEvents.push(timeInObject)
  return empRecObj
}


function createTimeOutEvent (empRecObj, dateStamp){
  const timeOutObject = {
    type: 'TimeOut',
    hour: parseInt(dateStamp.slice(-4)),
    date: dateStamp.slice(0,10)
  }
  empRecObj.timeOutEvents.push(timeOutObject)
  return empRecObj
}


function hoursWorkedOnDate (empRecObj, dateStamp) {
    const timeOut = empRecObj.timeOutEvents.find(element => element.date === dateStamp)
    const timeIn = empRecObj.timeInEvents.find(element => element.date === dateStamp)
    return (timeOut.hour - timeIn.hour) /100
}


function wagesEarnedOnDate (empRecObj, dateStamp) {
  return hoursWorkedOnDate(empRecObj, dateStamp) * empRecObj.payPerHour
}


function allWagesFor (empRecObj) {
  let sum = 0
  let date = ""
  let wagesPerDate = ""
  for (let i = 0; i < empRecObj.timeInEvents.length; i++) {
    date = empRecObj.timeInEvents[i].date
    wagesPerDate = wagesEarnedOnDate(empRecObj, date);
    sum += wagesPerDate;
  }
  return sum
}


function calculatePayroll (arrayOfEmpRec) {
  let sum = 0
  let totalSum = 0
  for (let i = 0; i < arrayOfEmpRec.length; i++) {
    let employee = arrayOfEmpRec[i]
    let empWages = allWagesFor(employee)
    totalSum+= empWages
  }
    return totalSum
}