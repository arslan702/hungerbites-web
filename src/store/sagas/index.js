"use client";
import { spawn, all } from "redux-saga/effects";
import userSaga from "./user.sagas";

export default function* rootSaga() {
  yield all([spawn(userSaga)]);
}
