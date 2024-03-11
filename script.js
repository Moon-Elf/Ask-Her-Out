// List of possible background colors
const colors = ["#610C9F", "#E95793", "#DA0C81", "#940B92", "#8CABFF", "#BF3131"];

// Function to generate a random color from the list
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

// Change background color when the page loads
document.addEventListener("DOMContentLoaded", function () {
    document.body.style.backgroundColor = getRandomColor();
});
