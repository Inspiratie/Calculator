let myArr = [];
function clickOnEq() {
  if (myArr.includes("/")) {
     const newArr = myArr.filter(el => {if(!isNaN(el)) return el});
    document.getElementById("calculate-area").value = `${myArr.join(' ')} = ${newArr.reduce((total, el) => total /= el)}`;
  } else if(myArr.includes("*")) {
   const newArr = myArr.filter(el => {if(!isNaN(el)) return el});
   document.getElementById("calculate-area").value = `${myArr.join(' ')} = ${newArr.reduce((total, el) => total *= el)}`;
  } else if(myArr.includes("+")) {
   const newArr = myArr.filter(el => {if(!isNaN(el)) return el});
   document.getElementById("calculate-area").value = `${myArr.join(' ')} = ${newArr.reduce((total, el) => total += el)}`;
  } else if(myArr.includes("-")) {
   const newArr = myArr.filter(el => {if(!isNaN(el)) return el});
   document.getElementById("calculate-area").value = `${myArr.join(' ')} = ${newArr.reduce((total, el) => total -= el)}`;
  }
}

function clickOnDel() {}

function clickOn7() {
  myArr.push(7);
  document.getElementById("calculate-area").value = 7;
}

function clickOn8() {
  myArr.push(8);
  document.getElementById("calculate-area").value = 8;
}

function clickOn9() {
  myArr.push(9);
  document.getElementById("calculate-area").value = 9;
}

function clickOn4() {
  myArr.push(4);
  document.getElementById("calculate-area").value = 4;
}

function clickOn5() {
  myArr.push(5);
  document.getElementById("calculate-area").value = 5;
}

function clickOn6() {
  myArr.push(6);
  document.getElementById("calculate-area").value = 6;
}

function clickOn1() {
  myArr.push(1);
  document.getElementById("calculate-area").value = 1;
}

function clickOn2() {
  myArr.push(2);
  document.getElementById("calculate-area").value = 2;
}

function clickOn3() {
  myArr.push(3);
  document.getElementById("calculate-area").value = 3;
}

function clickOn0() {
  myArr.push(0);
  document.getElementById("calculate-area").value = 0;
}

function clickOnReset() {
  document.getElementById("calculate-area").value = 0;
  myArr = [];
}

function clickOnMin() {
  document.getElementById("calculate-area").value = "-";
  myArr.push("-");
}

function clickOnPlus() {
  document.getElementById("calculate-area").value = "+";
  myArr.push("+");
}

function clickOnPro() {
  document.getElementById("calculate-area").value = "*";
  myArr.push("*");
}

function clickOnDiv() {
  document.getElementById("calculate-area").value = "/";
  myArr.push("/");
}

function clickOnDec() {
  document.getElementById("calculate-area").value = ".";
  myArr.push(".");
}
