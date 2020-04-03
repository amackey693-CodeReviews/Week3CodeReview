//Business Logic : 







//User Interface Logic: 
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#userInput").val())
    var newOutput = roboConversion(userInput);

    console.log(userInput)
    console.log(newOutput)
  });
});