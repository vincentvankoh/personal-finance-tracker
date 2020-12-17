import React from 'react';
import Sidebar from "./sidebar";
import Sidebarfooter from "./sidebarfooter";
import Topnav from "./topnav";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Field from "./field";

export default function Plan() {
    return(
        <div className="sb-nav-fixed">
            <Topnav />
            <div id="layoutSidenav">
                <Sidebar />
                <Sidebarfooter />
                <div id="layoutSidenav_content">
                    <main>
                        <Field />
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