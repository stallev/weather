import { weatherActionTypes } from "../types/weather";

const defaultState = {
  weatherData: {}
};
  
export const weatherReducer = (state = defaultState, action) => {
  switch (action.type) {
    case weatherActionTypes.CHANGE_WEATHER:
    return { ...state, weatherData: action.payload };
    default:
    return state;
  }
};