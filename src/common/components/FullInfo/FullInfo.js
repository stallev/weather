import React from 'react';
import ShortWeather from '../ShortWeather/ShortWeather';
import DescriptionWeather from '../DescriptionWeather/DescriptionWeather';

import './styles/fullInfo.scss'

const FullInfo = () => {
  return (
    <div className='full-info'>
      <ShortWeather/>
      <DescriptionWeather/>
    </div>
  );
};

export default FullInfo;