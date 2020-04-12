//Business Logic : 
function roboConversion (userInput) {
  var finalResult = []; 
  
  if (isNaN(userInput) || userInput === 0) {
    finalResult.push("Enter Number!");
    return finalResult;
  }

  for (var i = 0; i <= userInput; i += 1) {
    var num = i.toString(); // creates string from index of "userInput"

    if (num.indexOf("3") > -1 ) {
      num = "Won't you be my neighbor?";
    }
    else if (num.indexOf("2") > -1) {
      num = "Boop"
    }
    else if (num.indexOf("1") > -1) {
      num = "Beep"
    }
    
    finalResult.push(num);
  } 

  // console.log (num.indexOf())
  // console.log("i", i)
  // console.log("num", num);
  // console.log("counts", counts);
  // console.log("final result", finalResult);
  return finalResult;  
}

  //User Interface Logic: 
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("#userInput").val().split();
    var newOutput = roboConversion(parseInt(userInput));
    
    $("#output").html("<li>" + newOutput + "</li>")
  });
});