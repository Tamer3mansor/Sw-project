import { put } from "redux-saga/effects";

import actions from "../../constants/actions";
import { filterBySourceDest } from "../../utils/global-services";
//import { get } from "../../utils/xhr";

import FlightJSON from "../../mocks/flights-one-way-mumbai.json";

export function* fetFlightList(payload) {
  // put API URL here
  const jsonResponse = [...FlightJSON];
  try {
    // uncomment when API is available
    //const response = yield call(get, url);

    const response = filterBySourceDest(payload, jsonResponse);

    yield put({
      type: actions.GET_FLIGHT_LIST_SUCCESS,
      result: response,
      error: null
    });
  } catch (error) {
    const errorObj = JSON.parse(error.message);

    yield put({
      type: actions.GET_FLIGHT_LIST_ERROR,
      result: null,
      error: {
        statusCode: errorObj.statusCode,
        message: errorObj.errorMessage
      }
    });
  }
}
