import React from 'react';
import ShortWeather from '../ShortWeather/ShortWeather';
import DescriptionWeather from '../DescriptionWeather/DescriptionWeather';

import './styles/fullInfo.scss'

const FullInfo = ({
  currentWeatherData,
  locationData
}) => {
  return (
    <div className='full-info'>
      <ShortWeather
        currentWeather={currentWeatherData}
        locationData={locationData}
      />
      <DescriptionWeather
        currentWeatherData={currentWeatherData}
      />
    </div>
  );
};

export default FullInfo;