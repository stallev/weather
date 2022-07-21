import React, { useEffect } from 'react';
import cx from 'classnames';
import DayCard from '../DayCard/DayCard';

import './styles/cards-group.scss';

const CardsGroup = ({
  className,
  changeWeatherInterval,
  forecastData,
  setActiveDay,
  activeDay,
  isHourly
}) => {
  console.log('forecastData is ', forecastData);

  const changeActiveDay = (day) => () => {
    setActiveDay(day);
    console.log('h1122');
    changeWeatherInterval();
  };
  
  return (
    <div className={cx(
      'cards-group',
      className
    )}>
      {forecastData.map((day, index) => (
        <DayCard
          key={index}
          weatherData={day}
          isHourly={isHourly}
          setActiveDay={setActiveDay}
          activeDay={activeDay}
          changeActiveDay={changeActiveDay}
          onClick={!isHourly ? changeActiveDay(day) : undefined}
        />
      ))}
    </div>
  );
};

export default CardsGroup;