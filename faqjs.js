document.querySelectorAll(".faq h3").forEach(function(question) {
    question.addEventListener("click", function() {
        const answer = this.nextElementSibling;
        answer.style.display = answer.style.display === "none" ? "block" : "none";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("popup-subscription");
    const closeButton = document.querySelector(".close-button");
    
    setTimeout(function() {
        popup.style.display = "block";
    }, 5000);

    closeButton.addEventListener("click", function() {
        popup.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });

    const form = document.getElementById("subscription-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you for subscribing!");
        popup.style.display = "none";
    });
});
