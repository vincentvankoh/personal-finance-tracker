import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Sidebar from "./sidebar";
import Sidebarfooter from "./sidebarfooter";

export default function Recommendations() {
  return(
    <div className="sb-nav-fixed">
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <a className="navbar-brand" href="index.html">Financial Planner</a>
            <button className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#"><i className="fas fa-bars"></i></button>
            <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                <div className="input-group">
                    <input className="form-control" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button"><i className="fas fa-search"></i></button>
                    </div>
                </div>
            </form>

            <ul className="navbar-nav ml-auto ml-md-0">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                        <a className="dropdown-item" href="#">Settings</a>
                        <a className="dropdown-item" href="#">Activity Log</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="login.html">Logout</a>
                    </div>
                </li>
            </ul>
        </nav>
        <div id="layoutSidenav">
            <Sidebar />
            <Sidebarfooter />
            <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid">
                        <h1 className="mt-4">Recommendations</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                            <li className="breadcrumb-item active">Recommendations</li>
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