//Business Logic : 
var counts = [""];
var roboConversion = function (userInput) {
  if (userInput === 0) {
    return alert('Enter Number');
  }  
  for (var i = 0; i <= userInput; i ++) {
    var counting = counts.push(i);
    console.log("counting", counting)
    if (i===1){
      counts.push("Beep!");
      
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

    
    

    $("#output").show(newOutput)
  });
});