import produce from "immer";

const createReducer = (initialState, handlers) => (
  state = initialState,
  action
) => {
  if (handlers.hasOwnProperty(action.type)) {
    return produce(state, draftState =>
      handlers[action.type](draftState, action.payload)
    );
  } else {
    return state;
  }
};

export default createReducer;
