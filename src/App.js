import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from './common/components/Container/Container';
import Header from './common/components/Header/Header';
import FullInfo from './common/components/FullInfo/FullInfo';
import Cards from './common/components/Cards/Cards';

import './App.scss';

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [initialLocation, setInitialLocation] = useState('');
  const [initialCoords, setInitialCoords] = useState({});
  const RESULT_KINDS = {
    CurrentWeather: 'current',
    Forecast: 'forecast',
    SearchAutocomplete: 'search',
    History: 'history',
    Future: 'future',
    TimeZone: 'timezone',
    Sports: 'sports',
    Astronomy: 'astronomy',
    IPLookup: 'ip'
  };

  const API_KEY = 'ea83437c43164c27913101917220703';
  const apiUrl = `https://api.weatherapi.com/v1/${RESULT_KINDS.Forecast}.json?key=${API_KEY}&q=${initialCoords.lat},${initialCoords.lon}&days=3&lang=ru`;

  const getLocation = async () => {
    const res = await axios.get('https://geolocation-db.com/json/');
    setInitialLocation(res.data);
    setInitialCoords({
      lat: res.data.latitude,
      lon: res.data.longitude
    });
    console.log(res.data);
  };

  useEffect(() => {
    if(initialCoords.lat) {
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => setWeatherData(data));
    }
      
  }, [apiUrl, initialCoords]);
  
  useEffect( () => {
    getLocation();
  }, []);

  useEffect( () => {
    console.log(weatherData)
  }, [weatherData]);

  return (
    <div className="App">
      <Container>
        <Header
          setInitialCoords={setInitialCoords}
        />
        {
          !!weatherData.current && (
            <>
              <FullInfo
                currentWeatherData={weatherData.current}
                locationData={weatherData.location}
              />
              <Cards forecastData={weatherData.forecast.forecastday} />
            </>
          )
        }
      </Container>
    </div>
  );
}

export default App;
