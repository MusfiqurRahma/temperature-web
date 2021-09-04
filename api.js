const showDetails = document.getElementById('show-details')
const errorDiv =document.getElementById('error')
const API_KEY = `50bd898e6b98c2760e5aaba39d2a2abd`;
const searchTemperature = () => {
    const city = document.getElementById('city-name');
    showDetails.textContent = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${API_KEY}&units=metric`;
    if (city.value === '') {
        errorDiv.innerHTML = `
        <h3 class='error'>Pls give a valid Name</h3>
        `
    } else {
        fetch(url)
        .then(res => res.json())
        .then(data=>displayTemperature(data)) 
    }
    city.value = '';
}
// const setInnerText = (id, text) => {
//     document.getElementById(id).innerText = text;
// }
// const displayTemperature = temperature => {
//     console.log(temperature);
//     setInnerText('city', temperature.name);
//     setInnerText('temp', temperature.main.temp);
//     setInnerText('condition',temperature.weather[0].main)
//     const url = (` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`)
//     const imgIcon = document.getElementById('icon');
//     imgIcon.setAttribute('src', url);
// }
const displayTemperature = temperature => {
    errorDiv.textContent = '';
    if (temperature.cod === '404') {
        errorDiv.innerHTML = `
        <h3 class='err'>No Matching found</h3>
        `
    } else {
        const div = document.createElement('div')
        div.innerHTML = `
        <img id="icon" src="https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png" alt="">
        <h1 id="city">${temperature.name}</h1>
        <h3><span id="temp">${temperature.main.temp}</span>&deg;C</h3>
        <h1 id="condition" class="lead">${temperature.weather[0].main}</h1>
        `
        showDetails.appendChild(div)  
    }
}