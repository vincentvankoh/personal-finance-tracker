import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { updateUserData } from "./redux/actions";
import Draggable, {DraggableCore} from 'react-draggable';

export default function Field() {
    const dispatch = useDispatch();
    const updateData = (pass) => dispatch(updateUserData(pass));

    useEffect( () => {
        
    }, []);
    
    return(
      <div>
        <Draggable>
            <button type="button" class="btn btn-warning" style={{border: "5px solid black"}}>I can now be moved around!</button>
        </Draggable>
        <Draggable>
            <button type="button" class="btn btn-warning" style={{border: "5px solid black"}}>I can now be moved around!</button>
        </Draggable>
      </div>
    )
}