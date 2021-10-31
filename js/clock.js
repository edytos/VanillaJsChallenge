const clock = document.querySelector(".clock");
const days = clock.querySelector(".days");
const times = clock.querySelector(".times");
const today = clock.querySelector(".today");

const hours = times.querySelector("#hours");
const minutes = times.querySelector("#min");
const seconds = times.querySelector("#sec");
const noon = times.querySelector("#noon");

const day = today.querySelector("#day");
const mon = today.querySelector("#month");
const year = today.querySelector("#year");

const daysOfWeek = ["sun", "mon", "tus", "wed", "thu", "fri", "sat"];
const month = [
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월",
];

function getClock() {
  const now = new Date();
  const nHours = String(now.getHours()).padStart(2, "0");
  const nMinutes = String(now.getMinutes()).padStart(2, "0");
  const nSeconds = String(now.getSeconds()).padStart(2, "0");
  const nDaytoday = now.getDay();
  const nDay = now.getDate();
  const nMon = now.getMonth();
  const nYear = now.getFullYear();
  let nNoon = parseInt(nHours) < 11 ? "오전" : "오후";

  hours.innerHTML = nHours;
  minutes.innerHTML = nMinutes;
  seconds.innerHTML = nSeconds;
  noon.innerHTML = nNoon;
  day.innerHTML = `${nDay}일`;
  mon.innerHTML = month[nMon];
  year.innerHTML = `${nYear}년`;
  days.querySelector(`#${daysOfWeek[nDaytoday]}`).style.color = "#fff";
  days.querySelector(`#${daysOfWeek[nDaytoday]}`).style.fontWeight = "bold";
}

getClock();
setInterval(getClock, 1000);
