

let myEventCode = document.getElementById("event_code"); // select element with the id event_code


let myEventKey = document.getElementById("event_key"); // select element with the id event_key

let myEventWhich = document.getElementById("event_which"); // select element with the id event_which

let myBigNum = document.getElementById("big_num");

console.log(myEventCode);
console.log(myEventKey);
console.log(myEventWhich);







let keyResults = document.getElementById("keypress_results")
const revealKeypressResults  = () => {
  if (keyResults.style.display === "none") {
    keyResults.style.display = "block";
  } else {
    keyResults.style.display = "none";
  }
}




document.addEventListener("keydown", (e) => {
  console.log(e)

myEventCode.textContent = e.key; // display the keydown event {key} within the empty paragraph
myEventKey.textContent = e.keyCode; // display the keydown event {keyCode} within the empty paragraph
myEventWhich.textContent = e.which; // display the keydown {eventWhich} within the empty paragraph
myBigNum.textContent = e.keyCode

});





// p.textContent = `KeyboardEvent: key='${event.key}' | code='${event.code}'`;
//https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event#addeventlistener_keydown_example
// const log = document.getElementById('event_code');

// document.addEventListener('keydown', logKey);

// function logKey(e) {
//   log.textContent += ` ${e.code}`;
// }


