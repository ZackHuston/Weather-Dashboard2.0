var apiKey = "836f663cb0a3ac5683bdc3e1fb6eb7ca"
var requestUrl = `https://api.openweathermap.org/data/2.5/weather?`;
var cityInputUrl = `q=London&appid=${apiKey}`
var input = document.getElementById('input')
var first = document.getElementById('div')
var second = document.getElementById('second')
var third = document.getElementById('third')
var forth = document.getElementById('forth')
var fifth = document.getElementById('fifth')


function getApi() {
    
}
  var myBtn = document.getElementById('myBtn')



  myBtn.addEventListener('click', displayData)

  
function displayData(){

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=imperial`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            var currentWindSpeed = data.wind.speed
            var currentIconId = data.weather[0].icon
            var curentTemp = data.main.temp
            var currentHumidity = data.main.humidity
            first.innerHTML = `<img src = '${weatherIconUrl}' />`;
                second.textContent = "Temp: " + temp + " degrees"
                third.textContent = "Wind: " + windSpeed + ' mph'
                forth.textContent = "Humidity: " + humidity + "%"
            getFiveDay(data.name)
            return data
        })
  }
  
function getFiveDay (city){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data.list)
            for (let i = 3; i < data.list.length; i = i+8) {
                const element = data.list[i];
                console.log(element)
                var windSpeed =  element.wind.speed
                var iconID = element.weather[0].icon
                var temp = element.main.temp
                var humidity = element.main.humidity
                var weatherIconUrl = `http://openweathermap.org/img/w/${iconID}.png`
                var forcastDate = moment(element.dt_txt*1000).format('L')
                first.innerHTML = `<img src = '${weatherIconUrl}' />`;
                second.textContent = "Temp: " + temp + " degrees"
                third.textContent = "Wind: " + windSpeed + ' mph'
                forth.textContent = "Humidity: " + humidity + "%"
                
                
            }
            return data
        })
  }