// countdown.js

document.addEventListener('DOMContentLoaded', function () {
    const countdownElement = document.getElementById('countdown');
    const newYearDate = new Date(new Date().getFullYear() + 1, 0, 1, 0, 0, 0, 0);

    function updateCountdown() {
        const currentDate = new Date();
        const timeDifference = newYearDate - currentDate;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (timeDifference <= 0) {
            countdownElement.innerHTML = 'Happy New Year!';
        }
    }

    setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial update
});
