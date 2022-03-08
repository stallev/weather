import React from 'react';
import cx from 'classnames';
import { periods } from '../../constants';
import DayCard from '../DayCard/DayCard';

import './styles/cards-group.scss';

const CardsGroup = ({
  className,
  period,
  forecastData
}) => {
  return (
    <div className={cx(
      'cards-group',
      className
    )}>
      {forecastData.slice(0,periods[period]).map((day) => (
        <DayCard
          key={day.date}
          dayData={day}
        />
      ))}
    </div>
  );
};

export default CardsGroup;