//Business Logic : 
function roboConversion (userInput) {
  var counts = []; // creates a counting array from userInput 
  var finalResult = []; //final array to push to 
  
  if (userInput === 0) {
    alert('Enter Number');
  }

  // creates new array for counting numbers
  for (var i = 0; i <= userInput; i += 1) {  
    counts.push(i);
  }

  for (var i = 0; i <= counts.length; i ++) {
    // var num = counts[i]; // creates variable from counts "at" index 
    var num = i.toString();

    if (num === "1") {
      num = "Beep"
    }
    if (num === "2") {
      num = "Boop"
    }
    if (num === "3") {
      num = "Won't you be my neighbor?"
    }
    
    finalResult.push(num);
  } 
  console.log("num", num);
  console.log("counts", counts);
  console.log("final result", finalResult);
  return finalResult;  
}

  //User Interface Logic: 
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("#userInput").val().split();
    var newOutput = roboConversion(parseInt(userInput));
    
    // console.log("newOutput", newOutput);

    $("#output").html("<li>" + newOutput + "</li>")
  });
});