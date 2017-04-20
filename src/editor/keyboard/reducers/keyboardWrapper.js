import * as constants from '../constants';
import { createReducer } from '../../utils/reducerUtils';

const subscribeKeyboard = (state, action) => {
  return action.keyboardId;
};

export default createReducer('',
  ((actionsHandlersMap = {}) => {
    actionsHandlersMap[constants.SUBSCRIBE_KEYBOARD] = subscribeKeyboard;
    return actionsHandlersMap;
  })()
);
