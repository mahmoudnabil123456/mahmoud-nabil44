// هدف: عدّاد تنازلي لبداية شهر رمضان (يمكنك تغييره للتاريخ الذي تريد)
const ramadanStart = new Date("March 10, 2026 00:00:00").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("minutes");
const secsEl = document.getElementById("seconds");

function updateCountdown() {
  const now = new Date().getTime();
  const diff = ramadanStart - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  daysEl.innerHTML = days < 10 ? '0' + days : days;
  hoursEl.innerHTML = hours < 10 ? '0' + hours : hours;
  minsEl.innerHTML = minutes < 10 ? '0' + minutes : minutes;
  secsEl.innerHTML = seconds < 10 ? '0' + seconds : seconds;
}

// تحديث كل ثانية
setInterval(updateCountdown, 1000);