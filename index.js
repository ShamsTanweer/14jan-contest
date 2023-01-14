fetch(
  "https://api.ipgeolocation.io/ipgeo?apiKey=bbb627d8419d43f0a83fd96a1670514c"
)
  .then((data) => {
    return data.json();
  })
  .then((objectData) => {
    data = objectData;

    let lat = data.latitude;
    let lon = data.longitude;

    console.log(lat, lon);

    let page1 = document.getElementById("page");

    function fetchData() {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
          lat +
          "&lon=" +
          lon +
          "&appid=56b9cf140bcd6586c24359c7216f3ed5"
      )
        .then((data) => {
          return data.json();
        })
        .then((objectData) => {
          Wdata = objectData;

          console.log(Wdata);

          const url =
            "https://maps.google.com/maps?q=" +
            lat +
            "," +
            lon +
            "&output=embed";

          page1.innerHTML = `<h1>Weather Api</h1>
          <h4>Lat: ${lat} &nbsp &nbsp &nbsp &nbsp &nbsp Long:${lon}</h4>
          <iframe width="600" height="450" frameborder="0" style="border:0"
          src=${url} allowfullscreen></iframe>
          <div>
          <h1>Weather Data</h1>
          <p>Location:${Wdata.name}</p>
          <p>Country:${Wdata.sys.country}</p>

          <p>Lat:${Wdata.coord.lat} &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Long:${Wdata.coord.lon}</p>
          <p>Time Zone:${Wdata.timezone}</p>
          <p>Wind Speed:${Wdata.wind.speed}</p>
          <p>Pressure:${Wdata.main.pressure}</p>
          <p>Humidity:${Wdata.main.humidity}</p>
          <p>Wind direction:${Wdata.wind.deg}</p>
          <p>UV Index:</p>
          <p>Feels Like:${Wdata.main.feels_like}</p>

          </div>
          `;
        });
    }

    let fetchBtn = document.getElementById("fetchBtn");
    fetchBtn.addEventListener("click", fetchData);
  });
