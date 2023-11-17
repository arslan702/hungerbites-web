import { ACTIONS } from "@/utils";

const initialState = {
  loading: false,
  user: undefined,
  error: "",
  response: "",
  message: "",
  isAdmin: false,
};

export default function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.UPDATE_PROFILE.PENDING:
      return { ...state, loading: true };
    case ACTIONS.UPDATE_PROFILE.SUCCESS: {
      return { ...state, message: action.payload, loading: false };
    }
    case ACTIONS.UPDATE_PROFILE.ERROR:
      return { ...state, error: action.payload, loading: false };
    default: {
      return state;
    }
  }
}
