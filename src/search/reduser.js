import { combineReducers } from "redux";

import actions from "../../constants/actions";

const defaultState = {
  loading: true,
  result: null,
  error: null
};

const searchList = (state = defaultState, action) => {
  switch (action.type) {
    case actions.GET_FLIGHT_LIST_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        result: action.result,
        error: null
      });
    case actions.GET_FLIGHT_LIST_ERROR:
      return Object.assign({}, state, {
        loading: false,
        result: null,
        error: action.error
      });
    case actions.RESET_FLIGHT_LIST:
      return Object.assign({}, state, {
        loading: true,
        result: null,
        error: null
      });
    default:
      return state;
  }
};

const bookingDetails = (state = defaultState, action) => {
  switch (action.type) {
    case actions.SET_BOOKING_DETAILS:
      console.log(action.payload);
      return Object.assign({}, state, {
        loading: false,
        result: action.payload,
        error: null
      });
    default:
      return state;
  }
};

const flightSearch = combineReducers({
  searchList,
  bookingDetails
});

export default flightSearch;
