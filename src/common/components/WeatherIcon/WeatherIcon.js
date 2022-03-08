import React from 'react';

import './styles/weather-icon.scss';

const WeatherIcon = ({
  src,
  className
}) => {
  return (
    <div
      className="weather-icon">
      <img className={className} src={src} alt="" />
    </div>
  );
};

export default WeatherIcon;