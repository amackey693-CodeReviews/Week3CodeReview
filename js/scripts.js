//Business Logic : 
var counts = [];
var roboConversion = function (userInput) {
  if (userInput === 0) {
    return alert('Enter Number');
  }  
  for (var i = 0; i <= userInput; i += 1) {
    var counting = [counts.push(i)];
    console.log("counting", counting)
  }
}

//User Interface Logic: 
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#userInput").val())
    var newOutput = [roboConversion(userInput)];
    console.log(userInput);
    console.log(newOutput);

    newOutput.forEach(num => {
      if (num === 1) {
        newOutput.remove(1).push("Beep"); 
      }
    });
    $("#output").append(newOutput)
  });
});
