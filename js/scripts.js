//Business Logic : 


function roboConversion (userInput) {
  var removeItems = [1]
  var replaceItems = ["Boop"]
  var newString = [" "];
  var counts = []; //array for userInput 

  if (userInput === 0) {
    alert('Enter Number');
  }  
  // creates new array for counting numbers
  for (var i = 0; i <= userInput; i += 1) {  
    counts.push(i);
    // attempts to 
  } if (counts.length === removeItems) {
    for (var i = removeItems; i <= counts; i++) {
      counts + newString.push(i + replaceItems)
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
