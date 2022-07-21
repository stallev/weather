import React from 'react';
import { windDirectionEng } from '../../constants';
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
          <Text className="description-weather__parameter-name" color="gray">Temperature</Text>
          <Text className="description-weather__parameter-value" color="white">
            {currentWeatherData.temp_c}&#8451; - feels like {currentWeatherData.feelslike_c}&#8451;;
          </Text>
        </div>
        <div className="description-weather__parameter">
          <div className="description-weather__parameter-icon-wrap">
            <Icon className="description-weather__parameter-icon" iconName="pressure" />
          </div>
          <Text className="description-weather__parameter-name" color="gray">Pressure</Text>
          <Text className="description-weather__parameter-value" color="white">
            {Math.round(currentWeatherData.pressure_mb / 1000, 2)} atm;
          </Text>
        </div>
        <div className="description-weather__parameter">
          <div className="description-weather__parameter-icon-wrap">
            <Icon className="description-weather__parameter-icon" iconName="precipitation" />
          </div>
          <Text className="description-weather__parameter-name" color="gray">Precipitation</Text>
          <Text className="description-weather__parameter-value" color="white">
            {currentWeatherData.precip_mm !== 0 ? `${currentWeatherData.precip_mm} мм` : 'No precipitation'}
          </Text>
        </div>
        <div className="description-weather__parameter">
          <div className="description-weather__parameter-icon-wrap">
            <Icon className="description-weather__parameter-icon" iconName="wind" />
          </div>
          <Text className="description-weather__parameter-name" color="gray">Wind</Text>
          <Text className="description-weather__parameter-value" color="white">
          {Math.round(currentWeatherData.wind_kph*1000/3600)} m/s, {windDirectionEng[currentWeatherData.wind_dir]};
          </Text>
        </div>
      </div>
    </div>
  )
}

export default DescriptionWeather;