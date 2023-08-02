let numVal = document.querySelector("#numVal");
let checkNum = document.querySelector("#checkNum");
let displayResult = document.querySelector("#displayResult");

function check() {
    if (numVal.value % 2 == 0 && numVal.value != "") {
        displayResult.innerHTML = "Even";
    } else if (numVal.value % 2 == 1 && numVal.value != "") {
        displayResult.innerHTML = "Odd";
    } else if (numVal.value == "") {
        alert("ERROR: inputted value cannot be blank")
    } else {
        alert("Enter a valid number; decimals are also declared invalid");
    }
}
