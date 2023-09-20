/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 function createEmployeeRecord (array) {
    //const [firstName,familyName,title,payPerHour,timeInEvents,timeOutEvents] = array
    return {firstName:array[0],
            familyName:array[1],
            title:array[2],
            payPerHour:array[3],
            timeInEvents:[],
            timeOutEvents:[]
    }
    
    }

function createEmployeeRecords (arrays) {
    const employeesArray=[]
    arrays.map((array)=>{
       const employee= createEmployeeRecord(array)
       employeesArray.push(employee)
    })
        return employeesArray
    }


function createTimeInEvent(dateStamp){
   //console.log(dateStamp)
    const dateParts =dateStamp.split(" ");  
    const timeInObj={type:"TimeIn",
                     hour:parseInt(dateParts[1]),
                     date:dateParts[0] 
}
//console.log(timeInObj)
this.timeInEvents.push(timeInObj)
  return this
}
function createTimeOutEvent(dateStamp){
   //console.log(dateStamp)
   //const TimeOutEvents=[]
    const dateParts = dateStamp.split(" ");  
    this.timeOutEvents.push({type:"TimeOut",
                     hour:parseInt(dateParts[1]),
                     date:dateParts[0] 
})
//console.log(TimeOutEvents)
//console.log(this)
  return this
}


function hoursWorkedOnDate (date) {
const TimeIn = this.timeInEvents.find((e)=>e.date==date).hour
const TimeOut = this.timeOutEvents.find((e)=>e.date==date).hour

 return (TimeOut - TimeIn)/100
}


function wagesEarnedOnDate(date){
const  hours = hoursWorkedOnDate.call(this,date)

//const payRate = this.payPerHour.find((e)=>e.date==date)
return parseInt(this.payPerHour * hours)

}


const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


const findEmployeeByFirstName = function (collection, firstNameString) {
    //console.log(srcArray)
    //console.log(FirstName)
    collection.find((employee)=> {
       if (employee.firstName == firstNameString ){
        return employee.familyName
       } else {
        return undefined
       }
    
    })
}


const calculatePayroll = function(Array){
    console.log(Array)
    let sum = 0
    Array.map((arr)=>{
     const money= allWagesFor.call(this,arr)
        return  money
    }
    )
    return money
}