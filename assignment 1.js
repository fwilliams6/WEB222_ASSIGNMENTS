/*********************************************************************************
* WEB222 – Assignment 1 
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. * No part of this assignment has been copied manually or electronically from any other
source 
* (including web sites) or distributed to other students. 
* Name: Fernando H. Williams Student ID: 109099184 Date: Sept 21st 2019
 ********************************************************************************/
//Assignment 1.js
//Task 1
//student Name

var stdName="Fernando Williams";
//Number of Courses
var NoOfCourses = 5;
// current Program
var currProgram = "CPA";
// Part time job?
var validParttime=true;
var haveAjob =function hasJob(hasJob){
  var myjob;
  if (hasJob=true){
    myJob = "have"
  }else myJob ="don't have"
  return myJob;
};
console.log("My name is "+stdName+"I'm in "+currProgram+" program. I'm taking "+NoOfCourses+" courses in this semester.")
console.log("My name is "+stdName+"I'm in "+currProgram+" program. I'm taking "+NoOfCourses+" courses in this semester and I "+haveAjob(validParttime)+" a part-time job.")
//Task 2
//CURRent Year
var CurrY = 2019;
var age = prompt("Please enter your age:")
var YearBorn=CurrY - age 

console.log("You were born in the year of "+YearBorn+".")
var YearofStudy= prompt("Enter the number of years you expect to study in the college:" )
var gradYear = CurrY+(YearofStudy*1)
console.log("You will graduate from Seneca college in the year of "+gradYear+".")

//Task 3

var c = 23;
var f = 76;
//C to F
var conToF = (c*9/5)+32
console.log(c+"°C is "+conToF.toFixed(2)+"°F")
//F to C
var conToC =(f-32)*5/9
console.log(f+"°F is "+conToC.toFixed(2)+"°C")

//Task 4
for (i = 0; i <= 10; i++) {
    var EvenOrOdd = i%2
    if (EvenOrOdd ==0){
        console.log(i+" is even.")
    } else console.log(i+" is odd.")
    
}

//Task 7

var markGrader = function(Mark) {
  var Grade;
if (Mark>79){ 
    Grade = " A ";
} else if (Mark>69&&Mark<80){
  Grade = " B "
} else if (Mark>59&&Mark<70){
Grade = " C "
} else if (Mark>49&&Mark<60){
  Grade = " D "
} else if(Mark<50){
  Grade = " F "
  }  
  return Grade
}
console.log("You got a(n)"+markGrader(90)+"from your score of 90")
console.log("You got a(n)"+markGrader(75)+"from your score of 75")
console.log("You got a(n)"+markGrader(45)+"from your score of 45")