let myStr = 0;
function clickOnEq() {
   document.getElementById('calculate-area').value = myStr;
}

myStr = 0;

function clickOn7() {
   myStr += 7;
   document.getElementById('calculate-area').value = 7;
}

document.getElementById('calculate-area').value = myStr;

function clickOn8() {
   myStr += 8;
}

function clickOnReset() {
   document.getElementById('calculate-area').value = 0;
   myStr = 0;
}