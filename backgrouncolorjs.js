document.getElementById("changeColorBtn").addEventListener("click", function() {
    const colors = ["rgb(0, 255, 255)", "rgb(70, 130, 180)", "rgb(123, 104, 238)"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector(".page").style.backgroundColor = randomColor;
});
