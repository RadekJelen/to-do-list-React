import { delay, call, put, select, takeEvery } from "redux-saga/effects"
import { getExampleTasks } from "../tasks/getExampleTasks"
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import {
  fetchExampleTasks,
  fetchExampleTasksFailure,
  fetchExampleTasksSuccess,
  selectTasks
} from "./tasksSlice"

function* fetchExampleTasksHandler() {
  try {
    yield delay(1000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(fetchExampleTasksSuccess(exampleTasks));
  } catch {
    yield put(fetchExampleTasksFailure())
    yield call(alert, "Error, coś poszło nie tak! ⚠️");
  }
};
function* saveTasksInLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
  yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}