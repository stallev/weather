import React from 'react';
import Text from '../Text/Text';
import Icon from '../Icon/Icon';

import './styles/short-weather.scss';

const ShortWeather = () => {
  return (
    <div className="short-weather">
      <div className="short-weather__value">
        <div className="short-weather__temperature">
          <Text className="short-weather__temperature-value" color="blue">20&#8451;</Text>
          <Text className="short-weather__date">Сегодня</Text>
        </div>
        <Icon
          iconName="sun"
          className="short-weather__icon"
        />
      </div>
      <div className="short-weather__other">
        <Text className="short-weather__time" color="gray">Время:&nbsp;<span>21.54</span></Text>
        <Text className="short-weather__location" color="gray">Город:&nbsp;<span>Могилев</span></Text>
      </div>
    </div>
  )
}

export default ShortWeather;