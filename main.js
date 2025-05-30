const btn = document.querySelector(".picture-button");
const body = document.querySelector("body");
const image = document.querySelectorAll("img");
const dashboard = document.querySelector(".Dashboard");
const search = document.querySelector(".search-bar");
const firstsection = document.querySelector(".athens");
const athons = document.querySelector(".athons");
const time = document.querySelector(".time");
const day = document.querySelector(".thursday");
const div_container = document.querySelector(".div-container");
const feel_like = document.querySelector(".deg");
const feel = document.querySelector(".feels");
const sunrise = document.querySelector(".sunrise");
const sunny = document.querySelector(".type-of-weather");
const the_image = document.querySelector(".the-sunny-image");

btn.addEventListener("click", onclick);
function onclick(e) {
  if (btn.value === "") {
    body.style.background = "white";
    search.style.background = "white";
    search.style.color = "black";
    search.style.border = "1px,black,solid";
    // console.log(dashboard);
    dashboard.style.margin_left = "-0512px";
    firstsection.style.background = "white";
    athons.style.color = "black";
    time.style.color = "black";
    day.style.color = "black";
    div_container.style.background = "white";
    feel_like.style.color = "black";
    feel.style.color = "black";
    sunrise.style.color = "black";
  }
}
let weather = {
  apikey: "c357478e01d646558ef205232252705 ",
  baseurl: " https://api.weatherapi.com/v1",
  fetchWeather: function (city) {
    // fetch(this.baseurl + "/current.json?key=" + this.key + "&q=" + city);

    // fetch(this.baseurl +"/timezone.json?key="+this.apikey+"&q="+city)
    const response = fetch(
      this.baseurl + "/current.json?key=" + this.apikey + "&q=" + city
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { localtime } = data.location;
    const { name } = data.location;
    const { region } = data.location;
    const { temp_c } = data.current;

    const { condition } = data.current;

    const { humidity } = data.current;
    const { wind_kph } = data.current;
    const { pressure_mb } = data.current;
    const { uv } = data.current;
    const { feelslike_c } = data.current;
    const { sunrise } = data.location;
    const { sunset } = data.location;
    const { icon } = condition;
    const { text } = condition;
    weather.fetchWeather(search.value);
    time.innerText = localtime.slice(10);
    day.innerText = localtime.slice(0, 10);
    athons.innerText = name;
    feel_like.innerText = temp_c + "°C";
    feel.innerText = "Feels like " + feelslike_c + "°C";
    sunny.innerText = text;
    the_image.src = "https:" + icon;
    // sunrise.innerText = "Sunrise: "
    document.querySelector(".hum").innerText = humidity + "%";
    document.querySelector(".win").innerText = wind_kph + " km/h";
    document.querySelector(".pressure").innerText = pressure_mb + " mb";
    document.querySelector(".uvs").innerText = uv + "uv";
    document.querySelector(".image-of-hum").src = src =
      "picture/humidity 1.png";
    document.querySelector(".image-of-wind").src = src = "picture/wind 1.png";
    document.querySelector(".image-of-pre").src = src =
      "picture/pressure-white 1.png";

    document.querySelector(".image-of-uv").src = src = "picture/uv-white 1.png";
    document.querySelector(".josh").src = "picture/Sunrise.svg";
    document.querySelector(".juda").src = "picture/sunset.svg";
    // sunrise.innerText = "Sunrise: " + sunrise.slice(11, 16);

    // .innerText = humidity+"%";
    // console.log(humidity)
  },
};
let weather2 = {
  
  fetchForecast: function (city) {
   const response= fetch("https://api.weatherstack.com/forecast?access_key=64838f54048ede39091cce4a9c32b0fa&query="+city+"&forecast_day=5&hourly=1&interval=1")
    .then((response) =>response.json())
    .then((data) => this.displayForecast(data));

  },
  displayForecast:function(data){
    const {date}=data.forecast;
    const {date_epoch}=data.forecast
    const {max_temp}=data.forecast
    // const {condition}=data.forecastt;
    const {icon}=data.forecast;
  const {wind_kph} = data.forecast
      console.log("Hello", data.forecast);
      console.log(data.forecast)
  }

}

 
search.addEventListener("keypress", function (event) {
  // event.preventDefault();
  // console.log(event.key);
  if (event.key === "Enter") {
    if (search.value === "") {
      alert("please enter a city name");
      return;
    } else {
      weather.fetchWeather(search.value);
      search.value = "";
    }
  }
});

weather.fetchWeather("athens");
