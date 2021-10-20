// // Your code here
// 

//  The payroll system
//     populates a record from an Array
//       1) has a function called createEmployeeRecord

// let employee = { name: 'chris', lastName: 'ninman', timeInEvents: [{
//   type: 'TimeIn',
//   hour: 1900,
//   date: '2021-10-18' 
// }]}

let empemp = {
  firstName: 'Julius',
  familyName: 'Caesar',
  title: 'General',
  payPerHour: 27,
  timeInEvents: [
    { type: 'TimeIn', hour: 900, date: '0044-03-14' },
    { type: 'TimeIn', hour: 900, date: '0044-03-15' }
  ],
  timeOutEvents: [
    { type: 'TimeOut', hour: 2100, date: '0044-03-14' },
    { type: 'TimeOut', hour: 1100, date: '0044-03-15' }
  ]
}


let empl = {
  firstName: 'Julius',
  familyName: 'Caesar',
  title: 'General',
  payPerHour: 1000,
  timeInEvents: [ { type: 'TimeIn', hour: 900, date: '0044-03-15' } ],
  timeOutEvents: [ { type: 'TimeOut', hour: 1100, date: '0044-03-15' } ]
}

// let employees = [['chris', 'ninman', 'se', 22], ['anto', 'calarota', 'prof', 35] ['matteo', 'hokusai', 'dancer', 120]]

function createEmployeeRecord(employeeArray){
  return {
    firstName: employeeArray[0],
    familyName: employeeArray[1],
    title: employeeArray[2],
    payPerHour: employeeArray[3],
    timeInEvents: [],
    timeOutEvents: []
  }
  
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
  debugger
  empRecObj.timeOutEvents.push(timeOutObject)
  return empRecObj
}



function hoursWorkedOnDate (empRecObj, dateStamp) {
  if (empRecObj.timeInEvents[0].date === dateStamp) {
    let timeOut = parseInt(empRecObj.timeOutEvents[0].hour);
    let timeIn = parseInt(empRecObj.timeInEvents[0].hour);
    return (timeOut - timeIn) /100
  }
}


function wagesEarnedOnDate (empRecObj, dateStamp) {
  return hoursWorkedOnDate(empRecObj, dateStamp) * empRecObj.payPerHour
}

function allWagesFor (empRecObj) {
  let sum = 0
  let date = ""
  let wagesPerDate = ""
  console.log (empRecObj.timeInEvents.length)
  for (let i = 0; i < empRecObj.timeInEvents.length; i++) {
    debugger
    date = empRecObj.timeInEvents[i].date
    debugger
    wagesPerDate = wagesEarnedOnDate(empRecObj, date);
    debugger
    sum += wagesPerDate;
    debugger
  }
}




//     Given an employee record with a date-matched timeInEvent and timeOutEvent
//       22) wagesEarnedOnDate multiplies the hours worked by the employee's rate per hour
//       wagesEarnedOnDate
//         23) calculates that the employee earned 54 dollars
//     Given an employee record with MULTIPLE date-matched timeInEvent and timeOutEvent
//       24) allWagesFor aggregates all the dates' wages and adds them together
//       allWagesFor
//         25) calculates that the employee earned 378 dollars
//     Given an array of multiple employees
//       26) calculatePayroll aggregates all the dates' wages and adds them together
//       calculatePayroll
//         27) calculates that the employees earned 770 dollars
//     runs payroll using the mock data provided by Ultron data systems
//       Dependent functions: createEmployeeRecords
//         takes CSV data, returns an array of employee records
//           28) exists
//           29) returns an Array with 2 records for Loki and Natalia
//       Full Payroll Test
//         from several imported CSV structures
//           calculatePayroll
//             30) exists
//             31) correctly sums the payroll burden to $11,880 when passed an array of employee records