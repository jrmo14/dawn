class Weather {
  constructor(location) {
    this.location = location;
  }

  get getWeather() {
    return this.fetchWeather(this.handleWeather);
  }

  handleWeather(res) {
    let temperature = Math.round(res.main.temp),
        weather     = res.weather[0].main,
        icon        = 'wb_sunny',
        color       = 'sunny';

    [
      ['cloud_queue', 'cloudy', 'Clouds', 'Mist', 'Haze'],
      ['opacity', 'cloudy', 'Drizzle', 'Snow', 'Rain'],
      ['wb_sunny', 'sunny', 'Clear']
    ].forEach((key) => {
      key.slice(2).forEach((elem) => {
        if (weather == elem)
          [icon, color] = key;
      });
    });

    $('.weather p[weather]').innerHTML = `<i class="material-icons" ${color}>${icon}</i>`;
    $('.weather p[temperature]').innerHTML = `${temperature}ºF`;
  }

  fetchWeather(callback) {
    var locKey = config.OPENWEATHER_KEY
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.location}&units=imperial&appid=`+locKey)
      .then(res  => res.json())
      .then(json => JSON.stringify(json))
      .then(json => JSON.parse(json))
      .then(data => callback(data))
      .catch(err => console.warn('Weather API returned an error.'));
  }
}
