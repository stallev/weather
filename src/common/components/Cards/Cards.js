import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import Button from '../Button/Button';
import CardsGroup from '../CardsGroup/CardsGroup';

import './styles/cards.scss';

const Cards = ({
  forecastData
}) => {
  const [isWeatherInterval, setIsWeatherInterval] = useState({
    hourly: false,
    week: true,
    decade: false,
    month: false
  });
  const [activeDay, setActiveDay] = useState(forecastData[0]);  

  const changeWeatherInterval = (interval) => () => {
    setIsWeatherInterval({
      hourly: false,
      week: false,
      decade: false,
      month: false,
      [interval]: true
    });
    console.log('interval is ', interval);
  };

  return (
    <div className="cards">
      <div className="cards__tabs">
        <Button
          className={
            cx(
              {
                'button--active': isWeatherInterval.week
              }
            )
          }
          buttonText="Daily"
          buttonLocation="tabs"
          onClick={changeWeatherInterval('week')}
        />
        <Button
          className={
            cx(
              {
                'button--active': isWeatherInterval.hourly
              }
            )
          }
          buttonText="Hourly"
          buttonLocation="tabs"
          onClick={changeWeatherInterval('hourly')}
        />
      </div>
      <div className="cards__groups">
        <CardsGroup 
          forecastData={forecastData}
          setActiveDay={setActiveDay}
          activeDay={activeDay}
          changeWeatherInterval={changeWeatherInterval('hourly')}
          className={
            cx(
              {
                'cards-group--active': isWeatherInterval.week
              }
            )
          }
        />
        <CardsGroup 
          isHourly
          forecastData={activeDay.hour}
          setActiveDay={setActiveDay}
          activeDay={activeDay}
          className={
            cx(
              {
                'cards-group--active': isWeatherInterval.hourly
              }
            )
          }
        />
      </div>
    </div>
  )
}

export default Cards;