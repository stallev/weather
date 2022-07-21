import { weekDaysListEng, monthsListEng } from "../constants";

export const getCurrentTime =() => {
  const today = new Date();
  const currentTime = {
    year: today.getFullYear(),
    month: monthsListEng[today.getMonth()],
    dayNumber: today.getDate(),
    weekDay: weekDaysListEng[today.getDay()],
    hours: today.getHours(),
    minutes: today.getMinutes(),
    seconds: today.getSeconds()
  };
  return currentTime;
}