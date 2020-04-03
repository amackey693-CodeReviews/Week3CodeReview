//Business Logic : 

var counts = [];
function roboConversion (userInput) {
  // var removeItems = [3, 2, 1]
  // var replaceItems = ["Won't you be my neighbor?", "Beep", "Boop"]
  var newString = [" "];

  if (userInput === 0) {
    alert('Enter Number');
  }  
  // creates new array for counting numbers
  for (var i = 0; i <= userInput; i += 1) {  
    counts.push(i);
    if (counts.indexOf(1) {
      newString.push(counts + "Beep")
    }
  }  
  return newString;
}

//User Interface Logic: 
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#userInput").val())
    var newOutput = roboConversion(userInput);
    
    // console.log(userInput);
    // console.log(newOutput);

   
    $("#output").append(newOutput)
  });
});
