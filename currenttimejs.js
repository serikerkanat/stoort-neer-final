function updateDateTime() {
    const now = new Date();
    const formattedDate = now.toLocaleString('en-US', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', 
        hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true
    });
    document.getElementById("currentDateTime").textContent = formattedDate;
}

setInterval(updateDateTime, 1000);  
updateDateTime();
