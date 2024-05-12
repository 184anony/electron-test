const NOTIFICATION_TITLE = "Push通知のテストです！";
const NOTIFICATION_BODY = "このように、Push通知を送信することができます！";
const CLICK_MESSAGE = "Push通知がクリックされました！";

new window.Notification(NOTIFICATION_TITLE, {
    body: NOTIFICATION_BODY,
}).onclick = () => console.log(CLICK_MESSAGE);
