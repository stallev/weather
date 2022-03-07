import React, { useState, useEffect } from 'react';
import Container from './common/components/Container/Container';
import Header from './common/components/Header/Header';
import FullInfo from './common/components/FullInfo/FullInfo';
import Cards from './common/components/Cards/Cards';

import './App.scss';

function App() {
  const [weatherData, setWeatherData] = useState({});
  const getWeather = async () => {
    
  }

  useEffect(() => {
    getWeather();
  }, []);

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
