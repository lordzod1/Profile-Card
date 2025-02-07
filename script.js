function updateTime() {
    let currentTimeUTC = new Date().toUTCString();
    document.getElementById("time").textContent = currentTimeUTC;
}

// Update the time every second
setInterval(updateTime, 1000);

