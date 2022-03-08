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

  const changeWeatherInterval = (interval) => () => {
    setIsWeatherInterval({
      week: false,
      decade: false,
      month: false,
      [interval]: true
    })
  }

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
                'button--active': isWeatherInterval.decade
              }
            )
          }
          buttonText="На 10 дней"
          buttonLocation="tabs"
          onClick={changeWeatherInterval('decade')}
        />
        <Button
          className={
            cx(
              {
                'button--active': isWeatherInterval.month
              }
            )
          }
          buttonText="На месяц"
          buttonLocation="tabs"
          onClick={changeWeatherInterval('month')}
        />
      </div>
      <div className="cards__groups">
        <CardsGroup 
          period="week"
          forecastData={forecastData}
          className={
            cx(
              {
                'cards-group--active': isWeatherInterval.week
              }
            )
          }
        />
      </div>
    </div>
  )
}

export default Cards;