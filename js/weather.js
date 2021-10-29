const API_KEY = "86ad3bd5b9dcc3c242e2af7a5dbea847";

function onGeoOk(position) {
  const lat = position.coords.latitude; //위도
  const lon = position.coords.longitude; //경도
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; //백틱으로 감싸기

  //fetch() 함수는 첫번째 인자로 URL, 두번째 인자로 옵션 객체를 받고, Promise 타입의 객체를 반환합니다.
  //반환된 객체는, API 호출이 성공했을 경우에는 응답(response) 객체를 resolve하고,
  //실패했을 경우에는 예외(error) 객체를 reject합니다.
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:nth-child(2)");
      const temperature = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
      temperature.innerText = `${data.main.temp}도씨`;
    }); // 원격 API 호출
}
function onGeoError() {
  alert("어딘지 모르겠어...ㅜㅜ");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
