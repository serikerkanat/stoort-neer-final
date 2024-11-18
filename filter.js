function showCurrentTime() {
    const currentTime = new Date().toLocaleTimeString();
    document.getElementById("time-display").textContent = currentTime;
    
    localStorage.setItem('selectedFilter', 'time');
    localStorage.setItem('savedTime', currentTime);
}

function filterProducts(category) {
    localStorage.setItem('selectedFilter', category);
    
    if (category === 'time') {
        showCurrentTime();
    } else {
        document.getElementById("product-list").textContent = "Showing " + category + " products";
        document.getElementById("time-display").textContent = ""; 
        localStorage.removeItem('savedTime'); 
    }
}

window.addEventListener('load', () => {
    const savedFilter = localStorage.getItem('selectedFilter');
    const savedTime = localStorage.getItem('savedTime');
    
    if (savedFilter) {
        if (savedFilter === 'time' && savedTime) {
            document.getElementById("time-display").textContent = savedTime;
        } else {
            filterProducts(savedFilter);
        }
    }
});
