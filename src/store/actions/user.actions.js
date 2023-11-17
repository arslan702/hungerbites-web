import { ACTIONS, FETCH_STATUS } from "@/utils";

export const updateProfile = {
  pending: (value) => ({
    type: ACTIONS.UPDATE_PROFILE.PENDING,
    status: FETCH_STATUS.LOADING,
    payload: value,
  }),
  success: (value) => ({
    type: ACTIONS.UPDATE_PROFILE.SUCCESS,
    status: FETCH_STATUS.SUCCESS,
    payload: value,
  }),
  error: (error) => ({
    type: ACTIONS.UPDATE_PROFILE.ERROR,
    status: FETCH_STATUS.ERROR,
    payload: error,
  }),
};

export const registerUser = {
  pending: (value) => ({
    type: ACTIONS.REGISTER_USER.PENDING,
    status: FETCH_STATUS.LOADING,
    payload: value,
  }),
  success: (value) => ({
    type: ACTIONS.REGISTER_USER.SUCCESS,
    status: FETCH_STATUS.SUCCESS,
    payload: value,
  }),
  error: (error) => ({
    type: ACTIONS.REGISTER_USER.ERROR,
    status: FETCH_STATUS.ERROR,
    payload: error,
  }),
};
