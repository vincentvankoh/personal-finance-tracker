// import action types
import * as Types from "./actionType";

// init state

const appState = {
    userId:0,
    userData:[],
    userBudget:[],
    userExpense:[]
}


const reducer = (currentState = appState, action) =>{
  switch (action.type){
    case Types.updateData:
      return {...currentState, userData: action.payload}
    default:
      return currentState
  }
}

export default reducer