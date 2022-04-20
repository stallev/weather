const defaultState = {
  weatherData: {}
};

const action = { type: "", payload: "" };

const CHANGE_WEATHER = 'CHANGE-WEATHER';

export const weatherReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_WEATHER:
      return { ...state, weatherData: action.payload };
    default:
      return state;
  }
};

export const changeWeatherAction = (payload) => ({type: CHANGE_WEATHER, payload});