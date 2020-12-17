import * as Types from "./actionType";

export const updateUserData = (pass) => ({
  type: Types.updateData,
  payload: pass
})

export const updateUserBudget = (pass) => ({
  type: Types.updateBudget,
  payload: pass
})

export const updateUserExpense = (pass) => ({
  type: Types.updateExpense,
  payload: pass
})
