import React from 'react';
import Text from '../Text/Text';
import Icon from '../Icon/Icon';

import './styles/weatherParameter.scss'

const WeatherParameter = ({
  iconName,
  parameterName,
  parameterValue
}) => {
  return (
    <div className="weather-parameter">
      <div className="weather-parameter__icon-wrap">
        <Icon className="weather-parameter__icon" iconName={iconName}/>
      </div>
      <Text className="weather-parameter__name" color="gray">{parameterName}</Text>
      <Text className="weather-parameter__value" color="white">{parameterValue}</Text>
    </div>
  );
};

export default WeatherParameter;