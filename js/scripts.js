//Business Logic : 
function roboConversion (userInput) {
  var counts = []; // creates array for userInput 
  var removeItems = [3, 2, 1];
  var replaceItems = ["WYBMN", "Boop", "Beep"]
  var newArray = [];
  
  if (userInput === 0) {
    alert('Enter Number');
  }  
  // creates new array for counting numbers
  for (var i = 0; i <= userInput; i += 1) {  
    counts.push(i) 
  } if (counts === removeItems) {
    counts.replaceItems; 
  } 
  console.log(counts)
  return counts
  

      // I don't know what I'm doing & it's frustrating me!!!

  // } if (counts.indexOf(1)||counts.indexOf(2)||counts.indexOf(3)) {
  //   counts.pop("Beep");
  // } 
  //  
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
    
    console.log("UserInput", userInput);
    console.log("newOutput", newOutput);
    

    $("#output").html("<li>" + newOutput + "</li>")
  });
});
