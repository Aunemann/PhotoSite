document.addEventListener('contextmenu', event => event.preventDefault());

document.onkeydown = disableSelectCopy;

document.onmousedown = dMDown;

document.onclick = dOClick;

function dMDown(e) { return false; }

function dOClick() { return true; }

function disableSelectCopy(e) {
    var pressedKey = String.fromCharCode(e.keyCode).toLowerCase();
    if ((e.ctrlKey && (pressedKey == "c" || pressedKey == "x" || pressedKey == "v" || pressedKey == "a" || pressedKey == "u")) ||  e.keyCode == 123) {
        return false;
    }
}