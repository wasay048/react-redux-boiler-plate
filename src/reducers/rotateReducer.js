import {
  START_APP
} from "../actions/startAction";

const initialState = {
  rotate: false
};

const rotate = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case START_APP:
      var newState = JSON.parse(JSON.stringify(state));
      newState.rotate = payload
      return newState;
    default:
      return state;
  }
};

export default rotate;
