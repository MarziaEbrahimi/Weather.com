function formatTime(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0 ${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0 ${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuseday",
    "Wednesday",
    "Thuresday",
    "Friday",
    "saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours} : ${minutes}`;
}

function showTemprature(response) {
  console.log(response.data);
  document.querySelector("h5").innerHTML = response.data.name;
  document.querySelector("#font-larg").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector(
    ".humidity"
  ).innerHTML = ` Himidity ${response.data.main.humidity} %`;
  document.querySelector("#skyDescrib").innerHTML =
    response.data.weather[0].description;
  document.querySelector(
    "#windSpeed"
  ).innerHTML = ` ${response.data.wind.speed} mph`;
}
function interCity(event) {
  event.preventDefault();
  let apiKey = "9666cb098baebeb992cfd789750f6f47";
  let city = document.querySelector("#formSearch").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemprature);
}

let currentDate = document.querySelector("#dayTime");
let currentTime = new Date();
let formInput = document.querySelector("#search");

formInput.addEventListener("submit", interCity);
currentDate.innerHTML = formatTime(currentTime);
