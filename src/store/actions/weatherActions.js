import { weatherActionTypes } from "../types/weather";

export const changeWeatherAction = (payload) => ({type: weatherActionTypes.CHANGE_WEATHER, payload});