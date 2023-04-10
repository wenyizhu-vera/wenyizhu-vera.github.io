function greetUser() {
    var userName = prompt("Please enter your name:");

    if (userName) {
        var greeting = "Hello, " + userName + "!";
        document.getElementById("greetingMessage").innerHTML = greeting;
    }
}

function evalNumber(){
    var inputValue = prompt("Enter any five-digit number without commas");

    if (isNaN(inputValue)) {
        alert(inputValue + " is not a number.");
    } else if (inputValue.length !== 5) {
        alert(inputValue + " is not a five-digit number.");
    } else {
        var numberValue = Number(inputValue);
        if (numberValue % 2 == 0) {
            alert(inputValue + " is an even number.");
        } else {
            alert(inputValue + " is an odd number.");
        }
    }
}

function changeTitle(){
    let seletedElement = document.getElementById("sandbox");
    console.log(seletedElement);
    seletedElement.innerText = "It's Changed!";
}

function hideElement() {
    var element = document.getElementById("my-element");
    element.style.display = "none";
}

function displaytMinute() {
    var currentMinute = new Date().getMinutes();

    var divElement = document.getElementById("time");
    divElement.innerText = "The current minute is " + currentMinute;
}