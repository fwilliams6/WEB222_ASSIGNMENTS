/*
}*/


var markGrader = function(Mark) {
var Grade;
  switch (Mark) {
  case Mark=>80: 
  Grade = " A ";
    continue;
    case Mark<=79&&Mark>=70:
    Grade = " B ";
    continue;
  case Mark<=69&&Mark>=60:
    Grade = " C ";
    continue;
  case Mark<=59&&Mark>=50:
    Grade = " D ";
    continue;
  case Mark<50:
   Grade = " F ";
    continue;
} 
    return Grade;
}
console.log("You got a(n)"+markGrader(90)+"from your score of 90")
console.log("You got a(n)"+markGrader(75)+"from your score of 75")
console.log("You got a(n)"+markGrader(45)+"from your score of 45")
/*
Exception: ReferenceError: grade is not defined
markGrader@Scratchpad/1:24:1
@Scratchpad/1:39:28
*/
/*
Exception: SyntaxError: continue must be inside loop
@Scratchpad/1:23
*/