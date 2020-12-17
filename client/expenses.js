import React from 'react';
import Sidebar from "./sidebar";
import Topnav from "./topnav";
import Footer from "./footer";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Field2 from "./field2";

export default function Plan() {
    return(
        <div className="sb-nav-fixed">
            <Topnav />
            <div id="layoutSidenav">
                <Sidebar />
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid">
                            <h1 className="mt-4">Plan Expenses</h1>
                                <ol className="breadcrumb mb-4">
                                    <li className="breadcrumb-item">
                                        <Link to="/home">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active">Trends</li>
                                </ol>
                            <Field2 />
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
      )
}