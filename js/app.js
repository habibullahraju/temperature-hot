const loadWeatherData = (city)=>{
    API_KEY = `b2ccb547aa983619022963b7c9fde78e`;
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

fetch(URL)
.then(res => res.json()).then(data => displayWeather(data))

}
const displayWeather= (weather)=>{
   
    document.getElementById('temperature').innerText = weather.main.temp;
    setInnerTextId('condition',weather.weather[0].main)
}
const setInnerTextId= (id,text)=>{
    document.getElementById(id).innerText = text;
}
document.getElementById('search-btn').addEventListener('click',function(){
    const inputField = document.getElementById('input-field');
    const city = inputField.value;
    loadWeatherData(city);
    document.getElementById('city-name').innerText = city;
    document.getElementById('input-field').value = '';
   
})

loadWeatherData('Dhaka');