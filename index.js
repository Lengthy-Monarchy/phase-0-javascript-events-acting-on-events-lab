// Your code here
function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    let left = dodger.style.left;
    left = parseInt(left);

    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
    }
}

