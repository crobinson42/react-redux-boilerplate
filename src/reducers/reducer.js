import { click } from '../actions/actions';

const initialState = {
  clickCount: 0
};

function clickApp(state = initialState, action) {
  switch(action.type) {
    case "CLICK":
      return Object.assign({}, state, {
        clickCount: state.clickCount + 1
      });
    default:
      return state;
  }
}

export default clickApp;
