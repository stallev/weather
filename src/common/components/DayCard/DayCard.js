import React from 'react';
import Text from '../Text/Text';
import Icon from '../Icon/Icon';

import './styles/day-card.scss';

const DayCard = ({
  weekDay,
  date,
  icon,
  dayTemperature,
  nightTemperature,
  sunQuantity
}) => {
  return (
    <article className="day-card">
      <Text className="day-card__week-day" heading4>{weekDay}</Text>
      <Text className="day-card__date" color="gray">{date}</Text>
      <Icon className="day-card__icon" iconName={icon}/>
      <Text className="day-card__day-temperature">{dayTemperature}&#8451;</Text>
      <Text className="day-card__night-temperature"  color="gray">{nightTemperature}&#8451;</Text>
      <Text className="day-card__sun-quantity"  color="gray">{sunQuantity}</Text>
    </article>
  )
}

export default DayCard;