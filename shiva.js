// hemanth.js

document.addEventListener('DOMContentLoaded', function () {
    const bodyElement = document.body;

    const colors = ['#FF5733', '#07AE98', '#3D85C6', '#F333FF'];

    function changeBackgroundColor() {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        bodyElement.style.backgroundColor = randomColor;
    }

    // Change the background color every 3 seconds (3000 milliseconds)
    setInterval(changeBackgroundColor, 3000);
});
