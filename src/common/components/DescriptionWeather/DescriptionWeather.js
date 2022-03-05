import React from 'react';
import WeatherParameter from '../WeatherParameter/WeatherParameter';

import './styles/description-weather.scss';

const DescriptionWeather = () => {
  return (
    <div className="description-weather">
      <div className="description-weather__list">
        <WeatherParameter
          iconName="temperature"
          parameterName="Температура"
          parameterValue="20° - ощущается как 17°"
        />
        <WeatherParameter
          iconName="pressure"
          parameterName="Давление"
          parameterValue="765 мм ртутного столба - нормальное"
        />
        <WeatherParameter
          iconName="precipitation"
          parameterName="Осадки"
          parameterValue="Без осадков"
        />
        <WeatherParameter
          iconName="wind"
          parameterName="Ветер"
          parameterValue="3 м/с юго-запад - легкий ветер"
        />
      </div>
    </div>
  )
}

export default DescriptionWeather;