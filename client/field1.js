import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { updateUserData } from "./redux/actions";
import Draggable, {DraggableCore} from 'react-draggable';

export default function Field() {
    const dispatch = useDispatch();
    const updateData = (pass) => dispatch(updateUserData(pass));

    const stateData = useSelector( state => state.generalReducer.userData); 
    
    const displayData = () => {
      let x = stateData.map( (obj) => {
        return (
          <div>
          <Draggable>
              <button type="button" classNameName="btn btn-warning" style={{border: "2px solid black", borderRadius: "10px", padding:"10px 0", width:"100px"}}>
                {obj.category}
                <br></br>
                ${obj.amount}
              </button>
          </Draggable>
          <br></br>
          </div>
        )
      })
      return x
    }
    
    return(
    <div className="container">
      <div className="row">
        <div className="col-sm" style={{border: "2px solid black", height:"500px"}}>
          <h2>Current Budget</h2>
          {displayData()}
        </div>
        <div className="col-sm" style={{border: "2px solid black", height:"500px"}}>
          <h2>Delete Budget</h2>
        </div>
      </div>
        <button>
          Save New Budget
        </button>
        <br></br>
        <button onClick={ () => {window.location.reload(false)} }>
          Reset Current Plan
        </button>
    </div>
    )
}