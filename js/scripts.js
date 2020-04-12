//Business Logic : 
function roboConversion (userInput) {
  // var counts = []; // creates a counting array from userInput 
  var finalResult = []; //final array to push to 
  
  if (userInput === 0) {
    alert('Enter Number');
  }

  // // creates new array for counting numbers
  // for (var i = 0; i <= userInput; i += 1) {  
  //   counts.push(i);
  // }

  for (var i = 0; i <= userInput; i += 1) {
    // var num = counts[i]; // creates variable from counts "at" index 
    var num = i.toString();

    if (num.indexOf("3") > -1 ) {
      num = "Won't you be my neighbor?";
    }
    // else if (num.indexOf("2")) {
    //   num = "Boop"
    // }
    // else if (num.indexOf("1")) {
    //   num = "Beep"
    // }
    
    finalResult.push(num);
  } 
  console.log("i", i)
  console.log("num", num);
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
    
    // console.log("newOutput", newOutput);

    $("#output").html("<li>" + newOutput + "</li>")
  });
});