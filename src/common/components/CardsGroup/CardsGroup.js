import React from 'react';
import cx from 'classnames';
import DayCard from '../DayCard/DayCard';

import './styles/cards-group.scss';

const CardsGroup = ({
  className,
  period
}) => {
  return (
    <div className={cx(
      'cards-group',
      className
    )}>
      <DayCard
        weekDay="Сегодня"
        date="28 мар"
        icon="small_rain_sun"
        dayTemperature="15"
        nightTemperature="5"
        sunQuantity="Облачно"
      />
      <DayCard
        weekDay="Сегодня"
        date="28 мар"
        icon="small_rain_sun"
        dayTemperature="15"
        nightTemperature="5"
        sunQuantity="Облачно"
      />
      <DayCard
        weekDay="Сегодня"
        date="28 мар"
        icon="small_rain_sun"
        dayTemperature="15"
        nightTemperature="5"
        sunQuantity="Облачно"
      />
      <DayCard
        weekDay="Сегодня"
        date="28 мар"
        icon="small_rain_sun"
        dayTemperature="15"
        nightTemperature="5"
        sunQuantity="Облачно"
      />
      <DayCard
        weekDay="Сегодня"
        date="28 мар"
        icon="small_rain_sun"
        dayTemperature="15"
        nightTemperature="5"
        sunQuantity="Облачно"
      />
      <DayCard
        weekDay="Сегодня"
        date="28 мар"
        icon="small_rain_sun"
        dayTemperature="15"
        nightTemperature="5"
        sunQuantity="Облачно"
      />
      <DayCard
        weekDay="Сегодня"
        date="28 мар"
        icon="small_rain_sun"
        dayTemperature="15"
        nightTemperature="5"
        sunQuantity="Облачно"
      />
    </div>
  );
};

export default CardsGroup;