import * as types from '../constants/ActionTypes';

export function showAllPlans() {
  return { type: types.SHOW_ALL_PLANS };
}

export function showMyPlans() {
  return { type: types.SHOW_MY_PLANS };
}

export function showPlanNewEntry() {
  return { type: types.SHOW_PLAN_NEW_ENTRY };
}

export function showPlan() {
  return { type: types.SHOW_PLAN };
}
