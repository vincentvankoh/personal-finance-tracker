// import action types
import * as Types from "./actionType";

// init state

const appState = {
    userId: 0,
    userData: []
}


const reducer = (currentState = appState, action) =>{
  switch (action.type){
    case Types.updateData:
      console.log("in reducer", action.payload);
      return {...currentState, userData: action.payload}
    default:
      return currentState
  }
}


export default reducer