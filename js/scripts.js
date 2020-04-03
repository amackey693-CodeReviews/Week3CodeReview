//Business Logic : 
var contains = ["1", "2", "3"];

var roboConversion = function (userInput) {
  if (userInput != NaN || userInput === 0) {
    return 'Enter Number';
  }
}
//   var userInput = num.split(" ");
//   var newOutput = userInput.forEach(function(num1) {
//     if (num1.includes("1")) {
//       return num1.replace("Beep");
//     }
//     console.log(userInput)
//     console.log(newOutput)
//     return newOutput
//   });
// } 


//   if (num.indexOf("1")) {
//     userInput.forEach(function(input) {
//       newOutput.push(input + "Beep")
//     });
//   }
// }





//User Interface Logic: 
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#userInput").val())
    var newOutput = roboConversion(userInput);

    console.log(userInput)
    console.log(newOutput)

    $("#output").show(newOutput)
  });
});