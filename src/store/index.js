import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { weatherReducer } from './weatherReducer';

const rootReducer = combineReducers({
  weatherReducer: weatherReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));