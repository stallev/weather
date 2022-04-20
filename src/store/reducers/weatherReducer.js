import { weatherActionTypes } from "../types/weather";

const defaultState = {
  weatherInfo: {}
};
  
export const weatherReducer = (state = defaultState, action) => {
  switch (action.type) {
    case weatherActionTypes.CHANGE_WEATHER:
      return { ...state, weatherInfo: action.payload };
    default:
      return state;
  }
};