import { takeLatest, call } from "redux-saga/effects";

import actions from "../../constants/actions";
import * as worker from "./worker";

export function* watchFlightSearch() {
  yield takeLatest(actions.GET_FLIGHT_LIST, function* (action) {
    yield call(worker.fetFlightList, action.payload);
  });
}
