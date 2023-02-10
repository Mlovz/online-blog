import { ALERT_TYPES } from "../types/alertTypes";

const alertReducer = (state = {}, action) => {
  switch (action.type) {
    case ALERT_TYPES.ALERT:
      return action.payload;

    default:
      return state;
  }
};

export default alertReducer;
