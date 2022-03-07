import React, { useState, useEffect } from 'react';
import Container from './common/components/Container/Container';
import Header from './common/components/Header/Header';
import FullInfo from './common/components/FullInfo/FullInfo';
import Cards from './common/components/Cards/Cards';

import './App.scss';

function App() {
  const [weatherData, setWeatherData] = useState({});
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
  const apiUrl = `https://api.weatherapi.com/v1/${RESULT_KINDS.Forecast}.json?key=${API_KEY}&q=58,33&days=3&lang=ru`;

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setWeatherData(data));
  }, [apiUrl]);

  useEffect(() => {
    console.log(weatherData);
  }, [weatherData]);

  return (
    <div className="App">
      <Container>
        <Header></Header>
        <FullInfo />
        <Cards />
      </Container>
    </div>
  );
}

export default App;
