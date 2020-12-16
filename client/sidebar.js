import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

export default function Sidebar() {
  return(
    <div id="layoutSidenav_nav">
    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div className="sb-sidenav-menu">
            <div className="nav">
                <div className="sb-sidenav-menu-heading">Monthly Summary</div>
                <a className="nav-link" href="index.html">
                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                    Dashboard
                </a>
                <div className="sb-sidenav-menu-heading">Plan Finances </div>
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                    <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                    Expenses and Plan
                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </a>
                <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                    <nav className="sb-sidenav-menu-nested nav">
                        <Link className="nav-link" to="/expenses"> Expenses
                        </Link>
                        <Link className="nav-link" to="/plan"> Plan
                        </Link>
                    </nav>
                </div>
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                    <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                    Spending Analysis
                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </a>
                <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                    <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                            Analysis
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a>
                        <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                            <nav className="sb-sidenav-menu-nested nav">
                                <Link className="nav-link" to="/trends">Trends</Link>
                                <Link className="nav-link" to="/habits">Habits</Link>
                            </nav>
                        </div>
                    </nav>
                </div>
                
                <div className="sb-sidenav-menu-heading"> Visualize Finances </div>
                <Link className="nav-link" to="/charts">
                    <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                    Charts
                </Link>
                <Link className="nav-link" to="/tables">
                    <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                    Tables
                </Link>
                </div>
            </div>
        </nav>
    </div>

  )
}