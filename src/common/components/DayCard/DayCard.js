import React from 'react';
import { weekDaysList, monthsList } from '../../constants';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import Text from '../Text/Text';

import './styles/day-card.scss';

const DayCard = ({
  dayData
}) => {
  const dayDate = new Date(dayData.date);
  
  return (
    <article className="day-card">
      <Text className="day-card__week-day" heading4>{weekDaysList[dayDate.getDay()]}</Text>
      <Text className="day-card__date" color="gray">{dayDate.getDate()}&nbsp;{monthsList[dayDate.getMonth()]}</Text>
      <WeatherIcon
        className="short-weather__icon"
        src={dayData.day.condition.icon}
      />
      <Text className="day-card__day-temperature">{dayData.day.maxtemp_c}&#8451;</Text>
      <Text className="day-card__night-temperature" color="gray">{dayData.day.mintemp_c}&#8451;&#8451;</Text>
      <Text className="day-card__sun-quantity" color="gray">{dayData.day.condition.text}</Text>
    </article>
  )
}

export default DayCard;