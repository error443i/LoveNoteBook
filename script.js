let passcode = [];
const correct_passcode = "2002";

function enterDigit(digit) {
    if (passcode.length < 4) {
        passcode.push(digit);
        updateCircles();
    }
}

function clearInput() {
    passcode = [];
    updateCircles();
}

function updateCircles() {
    const circles = document.querySelectorAll(".circle");
    circles.forEach((circle, index) => {
        if (index < passcode.length) {
            circle.style.backgroundColor = "#117a65"; // Green color for filled circles
        } else {
            circle.style.backgroundColor = "#ccc"; // Gray color for empty circles
        }
    });
}

function submitPasscode() {
    const enteredPasscode = passcode.join("");
    if (enteredPasscode === correct_passcode) {
        window.location.href = "menu.html";
    } else {
        alert("Password incorrect!!,Try Again.");
        clearInput();
    }
}