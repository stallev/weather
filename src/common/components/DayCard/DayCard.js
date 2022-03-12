import React from 'react';
import cx from 'classnames';
import { weekDaysList, monthsList } from '../../constants';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import Text from '../Text/Text';

import './styles/day-card.scss';

const DayCard = ({
  weatherData,
  activeDay,
  changeActiveDay,
  isHourly,
  onClick
}) => {
  let dayDate;
  let weatherCondition;
  let weatherTime;
  if (!isHourly) {
    dayDate = new Date(weatherData.date);
    weatherCondition = weatherData.day.condition;
  } else {
    weatherCondition = weatherData.condition;
    dayDate = new Date(weatherData.time.slice(0, 10));
    weatherTime = weatherData.time.slice(11);
  }

  return (
    <article
      className={
        cx(
          'day-card',
          {
            'day-card--active': activeDay.date === weatherData.date,
            'day-card--hourly': isHourly
          }
        )
      }
      onClick={onClick}
    >
      {!isHourly ? (
        <>
          <Text className="day-card__week-day" heading4>{weekDaysList[dayDate.getDay()]}</Text>
          <Text className="day-card__date" color="gray">{dayDate.getDate()}&nbsp;{monthsList[dayDate.getMonth()]}</Text>
        </>
      ) : (
        <>
          <Text className="day-card__date">{dayDate.getDate()}&nbsp;{monthsList[dayDate.getMonth()]}</Text>
          <Text className="day-card__week-day">{weatherTime}</Text>
        </>
      )
      }
      <WeatherIcon
        className="short-weather__icon"
        src={weatherCondition.icon}
      />
      <Text className="day-card__day-temperature">{!isHourly ? weatherData.day.maxtemp_c : weatherData.temp_c}&#8451;</Text>
      {!isHourly && <Text className="day-card__night-temperature" color="gray">{weatherData.day.mintemp_c}&#8451;</Text>}
      <Text className="day-card__sun-quantity" color="gray">{weatherCondition.text}</Text>
    </article>
  )
}

export default DayCard;