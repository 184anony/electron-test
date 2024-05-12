const NOTIFICATION_TITLE = "Time's up!";
const NOTIFICATION_BODY = "10秒経過しました";
const CLICK_MESSAGE = "Time's up!";

Notification.requestPermission();

function sendNotification() {
    new Notification(NOTIFICATION_TITLE, {
        body: NOTIFICATION_BODY,
    }).onclick = () => console.log(CLICK_MESSAGE);
}

const countdown = document.getElementById("countdown");
let seconds = 10;

function updateCountdown() {
    const minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;

    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
    }

    countdown.innerHTML = `${minutes}:${remainingSeconds}`;
    if (seconds > 0) {
        seconds--;
    } else {
        clearInterval(countdownInterval);
        countdown.innerHTML = "Time's up!";
        sendNotification();
    }
}

updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);
