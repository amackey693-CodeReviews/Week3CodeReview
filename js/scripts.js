//Business Logic : 
function roboConversion (userInput) {
  var counts = []; // creates array for userInput 
  var removeItems = [1, "Boop"]
  var newString = [" "];
  
  if (userInput === 0) {
    alert('Enter Number');
  }  
  // creates new array for counting numbers
  for (var i = 0; i <= userInput; i += 1) {  
    counts.push(i);
  } if (counts.length <= 1) {
    counts.pop("Beep");
  }
    console.log(counts)
    // console.log(removeItems)
    // console.log(newString)
}


  // attempts to 
  //   } if (counts.length === removeItems) {
  // //     for (var i = counts; i <= counts; i++) {
  // //       newString = counts.push(i + replaceItems)
  // //     }
  // //   }
  // //   return newString;
  // // }

  //User Interface Logic: 
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("#userInput").val().split();
    var newOutput = roboConversion(parseInt(userInput));
    
    // console.log(userInput);
    // console.log(newOutput);

    $("#output").append(newOutput)
  });
});
