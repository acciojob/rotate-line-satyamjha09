const line = document.getElementById("line");
let angle = 0;

setInterval(() => {
    angle += 2; // Increment the angle by 2 degrees
    line.style.transform = `rotate(${angle}deg)`;
}, 20);

