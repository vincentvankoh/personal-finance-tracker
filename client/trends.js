import React from 'react';
import Sidebar from "./sidebar";
import Sidebarfooter from "./sidebarfooter";
import Topnav from "./topnav";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

export default function Trends() {
  return(
    <div className="sb-nav-fixed">
        <Topnav />
        <div id="layoutSidenav">
            <Sidebar />
            <Sidebarfooter />
            <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid">
                        <h1 className="mt-4">Trends</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item">
                            <Link to="/home">Home</Link>
                                </li>
                            <li className="breadcrumb-item active">Trends</li>
                        </ol>
                        <div className="card mb-4">
                            <div className="card-body">
                                This page is an example of using the light side navigation option. By appending the
                                <code>.sb-sidenav-light</code>
                                className to the
                                <code>.sb-sidenav</code>
                                className, the side navigation will take on a light color scheme. The
                                <code>.sb-sidenav-dark</code>
                                is also available for a darker option.
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="py-4 bg-light mt-auto">
                    <div className="container-fluid">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">Copyright &copy; Your Website 2020</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
      </div>
  )
}