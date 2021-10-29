/*
const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
*/

const daysofweek = ["sun", "mon", "tus", "wed", "thu", "fri", "sat"];
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

function clock() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let day = h < 11 ? "오전" : "오후";
  const daytoday = today.getDay();
  const date = today.getDate();
  const mon = today.getMonth();
  const year = today.getFullYear();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  document.getElementById("hours").innerHTML = h;
  document.getElementById("min").innerHTML = m;
  document.getElementById("sec").innerHTML = s;
  document.getElementById("time").innerHTML = day;
  document.getElementById("day").innerHTML = `${date}일`;
  document.getElementById("month").innerHTML = month[mon];
  document.getElementById("year").innerHTML = `${year}년`;
  document.getElementById(daysofweek[daytoday]).style.color = "#fff";
  document.getElementById(daysofweek[daytoday]).style.fontWeight = "bold";
}

clock();
setInterval(clock, 1000);
