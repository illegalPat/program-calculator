function add() {
  let a = parseInt(document.getElementById("first-number").value);
  let b = parseInt(document.getElementById("second-number").value);
  let answer = a + b;
  document.getElementById("answer").value = answer;
}
function subtract() {
    let a = parseInt(document.getElementById("first-number").value);
    let b = parseInt(document.getElementById("second-number").value);
    let answer = a - b;
    document.getElementById("answer").value = answer;
}

function divide() {
    let a = parseInt(document.getElementById("first-number").value);
    let b = parseInt(document.getElementById("second-number").value);
    let answer = a/b;
    document.getElementById("answer").value = answer;
}

function multiply() {
    let a = parseInt(document.getElementById("first-number").value);
    let b = parseInt(document.getElementById("second-number").value);
    let answer = a * b;
    document.getElementById("answer").value = answer;
}














// Console logging designs

// console.log("%cThis is my first Style", "color: green;");

// console.log("%cThis is my second style", "color: blue;", JSON.stringify({fname : "Program", lname : "Breaker"}, null, "\t"));

// console.log("%cThis is my third style", "color:green; background-color: black; font-style:italic;");

// console.log("%c Program Breaker!", "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113); margin-bottom: 12px; padding: 5%");

// console.log("%c ", "font-size:1px; padding: 125px 125px; background-size: 250px 250px; background:no-repeat url(https://i2.wp.com/i.giphy.com/media/12BYUePgtn7sis/giphy-downsized.gif?w=770&amp;ssl=1)");
