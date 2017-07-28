import { SHOW_ALL_PLANS, SHOW_MY_PLANS, SHOW_PLAN, SHOW_PLAN_NEW_ENTRY } from '../constants/ActionTypes';


const initialState = {
  planListDisplay: true,
  newEntryDisplay: false
};

export default function todos(state = initialState, action) {
  switch (action.type) {
  case SHOW_ALL_PLANS:
    return {
      planListDisplay: true,
      newEntryDisplay: false
      };

  case SHOW_MY_PLANS:
    return {
      planListDisplay: true,
      newEntryDisplay: false
      };

  case SHOW_PLAN:
    return {
      planListDisplay: false,
      newEntryDisplay: true
      };

  case SHOW_PLAN_NEW_ENTRY:
    return {
      planListDisplay: false,
      newEntryDisplay: true
      };
      
  default:
    return state;
  }
}
