// initial nodes
const container = document.createElement('div');
const countries = document.createElement('div');
const h1 = document.createElement('h1');

// container
container.setAttribute('class', 'container');
container.setAttribute('id', 'container');

// heading
h1.setAttribute('id', 'title');
h1.setAttribute('class', 'text-center');
h1.textContent = 'Weather of countries';

// country row
countries.setAttribute('class', 'row');

// fetching restcountries
async function weatherOfCountries() {
  countries.innerHTML = '<h3>Loading...</h3>';
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    countries.innerHTML = '';

    for (let i = 0; i < data.length; i++) {
      countries.innerHTML += `
      <div class="card-back col-sm-6 col-md-4 col-lg-4 col-xl-4 bg-light g-5">
      <div class="card h-100 w-auto" style="width: 18rem;" id="card">
        <div class="card-header text-center" id="country">${data[i].name.common}</div>
          <img src="${data[i].flags.svg}" class="card-img-top" alt='country-cards'>
          <div class="card-body">
          <div class="card-text"><b>Region : </b>${data[i].region}</div>
          <div class="card-text"><b>Country-code : </b>${data[i].altSpellings[0]}</div>
          <div class="card-text"><b>Capital : </b>${data[i].capital}</div>
          <div class="card-text"><b>Population : </b>${data[i].population}</div>
          <div id="${data[i].name.common}"></div>
        </div>
            <div class="card-footer d-flex justify-content-center">
              <button class="btn btn-primary" onClick="fetchWeather(${data[i].latlng[0]},${data[i].latlng[1]},'${data[i].name.common}')">Current Weather</button>
            </div>
        </div>
      </div>
      </div>`;
    }
  } catch (error) {
    console.log(error);
  }
}

// fetching openweather
async function fetchWeather(lat, lon, id) {
  const weatherData = document.getElementById(id);
  weatherData.innerHTML = `<h3>Loading...</h3>`;

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ff7e49eb4fd19463836219b0feb2529f&units=metric`
    );
    const wData = await res.json();

    weatherData.innerHTML = `
    <div class="card-text"><b>Weather : </b>${wData.weather[0].main}</div>
    <div class="card-text"><b>Temperature : </b>${wData.main.temp} &#8451;</div>
    <img src=" http://openweathermap.org/img/wn/${wData.weather[0].icon}@2x.png">
  `;
  } catch (error) {
    console.log(error);
  }
}

// final append
document.body.appendChild(container);
container.append(h1, countries);

// display
weatherOfCountries();
