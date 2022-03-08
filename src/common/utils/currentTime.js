import { weekDaysList, monthsList } from "../constants";

export const getCurrentTime =() => {
  const today = new Date();
  const currentTime = {
    year: today.getFullYear(),
    month: monthsList[today.getMonth()],
    dayNumber: today.getDate(),
    weekDay: weekDaysList[today.getDay()],
    hours: today.getHours(),
    minutes: today.getMinutes(),
    seconds: today.getSeconds()
  };
  return currentTime;
}