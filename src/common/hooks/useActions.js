import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../../src/store/actions';

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch);
};