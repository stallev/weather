import React, { useState } from 'react';
import cx from 'classnames';
import Button from '../Button/Button';
import CardsGroup from '../CardsGroup/CardsGroup';

import './styles/cards.scss';

const Cards = ({
  forecastData
}) => {
  const [isWeatherInterval, setIsWeatherInterval] = useState({
    week: true,
    decade: false,
    month: false
  });
  const [activeDay, setActiveDay] = useState(forecastData[0]);
  console.log('activeDay is ', activeDay);

  const changeWeatherInterval = (interval) => () => {
    setIsWeatherInterval({
      week: false,
      decade: false,
      month: false,
      [interval]: true
    });
    console.log('interval is ', interval);
  };
  console.log(forecastData);
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
          buttonText="На 3 дня"
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
          buttonText="На 24 часа"
          buttonLocation="tabs"
          onClick={changeWeatherInterval('hourly')}
        />
      </div>
      <div className="cards__groups">
        <CardsGroup 
          period="week"
          forecastData={forecastData}
          setActiveDay={setActiveDay}
          activeDay={activeDay}
          changeWeatherInterval={changeWeatherInterval}
          className={
            cx(
              {
                'cards-group--active': isWeatherInterval.week
              }
            )
          }
        />
        <CardsGroup 
          period="hourly"
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