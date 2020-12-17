import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Expenses from "./expenses";
import Plan from "./plan";
import Charts from "./charts";
import Login from "./login";
import Tables from "./tables";
import Trends from "./trends";
import Habits from "./habits";
import Dashboard from "./dashboard";
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { updateUserData } from "./redux/actions";
import axios from "axios";

export default function Main() {
    const dispatch = useDispatch();
    const updateData = (pass) => dispatch(updateUserData(pass))

    useEffect( () => {
        axios.get("http://localhost:3000/data/")
        .then(res => {
            console.log(res);
            updateData(res.data);
        })
        .catch(err =>console.log("error", err))
    }, []);
    
    return(
        <BrowserRouter>
            <Switch>
                <Route path={"/home"} >
                    <Dashboard />
                </Route>
                <Route path={"/plan"} >
                    <Plan />
                </Route>
                <Route path={"/expenses"}>
                    <Expenses />
                </Route>
                <Route path={"/charts"}>
                    <Charts />
                </Route>
                <Route path={"/tables"} >
                    <Tables />
                </Route>
                <Route path={"/trends"} >
                    <Trends />
                </Route>
                <Route path={"/habits"} >
                    <Habits />
                </Route>
                <Route path={"/"}>
                    <Login />
                </Route>
            </Switch>

        </BrowserRouter>
    ); // end of return
}


