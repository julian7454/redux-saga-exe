import { delay } from "redux-saga";
import { put, takeEvery, all } from "redux-saga/effects";

export function* helloSaga() {
  console.log("Hello Sagas!");
}

// 我們工作的 Saga：將執行非同步的 increment task
function* incrementAsync() {
  yield delay(1000);
  yield put({ type: "INCREMENT" });
}

// 我們觀察的 Saga：在每個 INCREMENT_ASYNC 產生一個新的 incrementAsync task
function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

// 注意現在我們只能 export rootSaga
// 單一進入點，一次啟動所有 saga
export function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}
