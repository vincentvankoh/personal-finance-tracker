import React, { useEffect } from 'react';
import Footer from "./footer";
import Sidebar from "./sidebar";
import Topnav from "./topnav";
import Cookies from 'js-cookie'
import Line1 from "./visuals/line1";
import Pie1 from "./visuals/pie1";
import Bar1 from "./visuals/bar1";
import Table1 from "./visuals/table1";
import { useSelector } from 'react-redux';
import { updateUserData } from "./redux/actions";

export default function Dashboard() {
  const totalAmount = useSelector( state => state.generalReducer.userData) // arr of obj
  const totalBudget = totalAmount[0] ? sumAmount(totalAmount) : null;
  const totalExpense = totalAmount[0] ? sumAmount(totalAmount) : null;
  const totalDifference = totalBudget - totalExpense;
  const totalDaysLeft = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate() - new Date().getDate();

  function sumAmount(x){
    let totalAmount=0;
    for(let i=0; i<x.length; i++){
        totalAmount += x[i]["amount"];
    }
    return totalAmount;
  } 

  return(
  <div className="sb-nav-fixed">
  <Topnav />
  <div id="layoutSidenav">
      <div id="layoutSidenav_nav">
          <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
              <Sidebar />
          </nav>
          </div>
      <div id="layoutSidenav_content">
          <main>
              <div className="container-fluid">
                  <h1 className="mt-4">Monthly Summary</h1>
                  <ol className="breadcrumb mb-4">
                      <li className="breadcrumb-item active">Top Metrics</li>
                  </ol>
                  <div className="row">
                      <div className="col-xl-3 col-md-6">
                          <div className="card bg-primary text-white mb-4">
                              <div className="card-body">Total Budget</div>
                              <div className="card-footer d-flex align-items-center justify-content-between">
                                  <div className="medium text-white">
                                    { totalBudget }
                                    </div>
                              </div>
                          </div>
                      </div>
                      
                      <div className="col-xl-3 col-md-6">
                          <div className="card bg-warning text-white mb-4">
                              <div className="card-body">Total Expenses</div>
                              <div className="card-footer d-flex align-items-center justify-content-between">
                                  <div className="medium text-white">
                                  { totalExpense }
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-md-6">
                          <div className="card bg-success text-white mb-4">
                              <div className="card-body">Difference (+/-)</div>
                              <div className="card-footer d-flex align-items-center justify-content-between">
                                  <div className="medium text-white">
                                      { totalDifference }
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-md-6">
                          <div className="card bg-danger text-white mb-4">
                              <div className="card-body">Remaining Days</div>
                              <div className="card-footer d-flex align-items-center justify-content-between">
                                  <div className="medium text-white">
                                      { totalDaysLeft }
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <ol className="breadcrumb mb-4">
                      <li className="breadcrumb-item active">Top Charts</li>
                  </ol>
                  <div className="row">
                      <div className="col-xl-6">
                          <div className="card mb-4">
                              <div className="card-header">
                                  <i className="fas fa-chart-area mr-1"></i>
                                  Expense % of Budget
                              </div>
                              <div className="card-body">
                                <Pie1 />
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-6">
                          <div className="card mb-4">
                              <div className="card-header">
                                  <i className="fas fa-chart-bar mr-1"></i>
                                  Bar Chart Example
                              </div>
                              <div className="card-body">
                                  <Bar1 />
                            </div>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-xl-6">
                          <div className="card mb-4">
                              <div className="card-header">
                                  <i className="fas fa-chart-bar mr-1"></i>
                                  Bar Chart Example
                              </div>
                              <div className="card-body">
                                  <Bar1 />
                            </div>
                          </div>
                      </div>
                      <div className="col-xl-6">
                          <div className="card mb-4">
                              <div className="card-header">
                                  <i className="fas fa-chart-area mr-1"></i>
                                  Expense % of Budget
                              </div>
                              <div className="card-body">
                                <Pie1 />
                              </div>
                          </div>
                      </div>
                  </div>
                  <ol className="breadcrumb mb-4">
                      <li className="breadcrumb-item active">Meaningful Metrics</li>
                  </ol>
                  <div className="card mb-4">
                      <div className="card-header">
                          <i className="fas fa-table mr-1"></i>
                          DataTable Example
                      </div>
                      <div className="card-body">
                          <div className="table-responsive">
                              <Table1 />
                          </div>
                      </div>
                  </div>
              </div>
          </main>
          <Footer />
      </div>
    </div>
    </div>
  )
}