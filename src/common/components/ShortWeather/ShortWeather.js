import React, { useState } from 'react';
import { getCurrentTime } from '../../utils/currentTime';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import Text from '../Text/Text';
import './styles/short-weather.scss';

const ShortWeather = ({
  currentWeather,
  locationData
}) => {
  const currentTime = getCurrentTime();

  return (
    <div className="short-weather">
      <div className="short-weather__value">
        <div className="short-weather__temperature">
          <Text className="short-weather__temperature-value" color="blue">{currentWeather.temp_c}&#8451;</Text>
          <Text className="short-weather__date">Сейчас</Text>
        </div>
        <WeatherIcon
          className="short-weather__icon"
          src={currentWeather.condition.icon}
        />
      </div>
      <div className="short-weather__other">
        <Text className="short-weather__time" color="gray">Время:&nbsp;<span>{currentTime.hours}:{currentTime.minutes}</span></Text>
        <Text className="short-weather__location" color="gray">Город:&nbsp;<span>{locationData.name}</span></Text>
      </div>
    </div>
  )
}

export default ShortWeather;