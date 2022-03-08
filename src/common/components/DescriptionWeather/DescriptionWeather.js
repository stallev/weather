import React from 'react';
import { windDirection } from '../../constants';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';

import './styles/description-weather.scss';

const DescriptionWeather = ({
  currentWeatherData
}) => {
  return (
    <div className="description-weather">
      <div className="description-weather__list">
        <div className="description-weather__parameter">
          <div className="description-weather__parameter-icon-wrap">
            <Icon className="description-weather__parameter-icon" iconName="temperature" />
          </div>
          <Text className="description-weather__parameter-name" color="gray">Температура</Text>
          <Text className="description-weather__parameter-value" color="white">
            {currentWeatherData.temp_c}&#8451; - ощущается как {currentWeatherData.feelslike_c}&#8451;;
          </Text>
        </div>
        <div className="description-weather__parameter">
          <div className="description-weather__parameter-icon-wrap">
            <Icon className="description-weather__parameter-icon" iconName="pressure" />
          </div>
          <Text className="description-weather__parameter-name" color="gray">Давление</Text>
          <Text className="description-weather__parameter-value" color="white">
            {Math.round(currentWeatherData.pressure_mb / 1000, 2)} атмосферы;
          </Text>
        </div>
        <div className="description-weather__parameter">
          <div className="description-weather__parameter-icon-wrap">
            <Icon className="description-weather__parameter-icon" iconName="precipitation" />
          </div>
          <Text className="description-weather__parameter-name" color="gray">Осадки</Text>
          <Text className="description-weather__parameter-value" color="white">
            {currentWeatherData.precip_mm !== 0 ? `${currentWeatherData.precip_mm} мм` : 'Без осадков'}
          </Text>
        </div>
        <div className="description-weather__parameter">
          <div className="description-weather__parameter-icon-wrap">
            <Icon className="description-weather__parameter-icon" iconName="wind" />
          </div>
          <Text className="description-weather__parameter-name" color="gray">Ветер</Text>
          <Text className="description-weather__parameter-value" color="white">
          {Math.round(currentWeatherData.wind_kph*1000/3600)} м/с, {windDirection[currentWeatherData.wind_dir]};
          </Text>
        </div>
      </div>
    </div>
  )
}

export default DescriptionWeather;