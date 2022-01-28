let hideIntroText = document.getElementById("intro_text"); // select intro_text H1
// let keyPressResults = document.getElementById("keypress_results").style.display = "none"; // intially hide keypress results

 let hideShowMain = document.getElementById("hide_show") // select main and all child elements
let myBigNum = document.getElementById("big_num"); // select key h1 tag [Used to display key code in large font ]
let myEventKey = document.getElementById("event_key"); // select element with the id event_code
let myEventWhich = document.getElementById("event_which"); // select element with the id event_which
let myEventCode = document.getElementById("event_code"); // select element with the id event_key

//console.log(keyPressResults);
// console.log(myEventCode);
// console.log(myEventKey);
// console.log(myEventWhich);

hideShowMain.style.display = "none"

document.addEventListener("keydown", (e) => {
  console.log(e)

myBigNum.textContent = e.which;
myEventKey.textContent = e.key; // display the keydown event {key} within the empty paragraph
myEventWhich.textContent = e.which; // display the keydown {eventWhich} within the empty paragraph
myEventCode.textContent = e.code; // display the keydown event {keyCode} within the empty paragraph
hideIntroText.style.display = "none"; // Hide intro text on keydown
// keyPressResults.style.display =""; // Show all elements within the section with the id #keypress_results on key down
hideShowMain.style.display = "block"; // Show main and all child elements


});



// const revealKeyPressResults = () => {
//   if (keyPressResults == "none") {
//     revealKeyPressResult.display = "block";
//   }
//   else {}
// }
// console.log(revealKeyPressResults());



// let keyResults = document.getElementById("keypress_results")
// const revealKeypressResults  = () => {
//   if (keyResults.style.display === "none") {
//     keyResults.style.display = "block";
//   } else {
//     keyResults.style.display = "none";
//   }
// }






