"use client";
import { all, put, takeEvery } from "redux-saga/effects";
import { apiPut } from "@/services";
import { ACTIONS, ALERT_TYPES } from "@/utils";
import { updateProfile, notifier } from "../actions";

function* editProfile(action) {
  try {
    const authToken = localStorage.getItem("token");
    const response = yield apiPut(
      `updateAdminProfile`,
      action.payload.data,
      authToken
    );
    if (response?.data?.message) {
      yield put(updateProfile.success(response.data.message));
      yield put(
        notifier.open({
          message: response.data.message,
          variant: ALERT_TYPES.SUCCESS,
        })
      );
      if (action.payload.callback) {
        action.payload.callback();
      }
    } else {
      yield put(updateProfile.error({ message: "No Data Found" }));
    }
  } catch (error) {
    yield put(
      notifier.open({ message: error.message, variant: ALERT_TYPES.ERROR })
    );
    yield put(updateProfile.error(error));
  }
}

export default function* settingsSaga() {
  yield all([takeEvery(ACTIONS.UPDATE_PROFILE.PENDING, editProfile)]);
}
