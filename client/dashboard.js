import React, { useEffect } from 'react';
import Footer from "./footer";
import Sidebar from "./sidebar";
import Sidebarfooter from "./sidebarfooter";
import Topnav from "./topnav";
import Cookies from 'js-cookie'

export default function Dashboard() {
    let id
    useEffect(() =>{
        id = Cookies.get('id')
        console.log(id)
    }, [])


  return(
  <div className="sb-nav-fixed">
  <Topnav />
  <div id="layoutSidenav">
      <div id="layoutSidenav_nav">
          <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
              <Sidebar />
              <Sidebarfooter />
          </nav>
      <div id="layoutSidenav_content">
          <main>
              <div className="container-fluid">
                  <h1 className="mt-4">Dashboard</h1>
                  <ol className="breadcrumb mb-4">
                      <li className="breadcrumb-item active">Dashboard</li>
                  </ol>
                  <div className="row">
                      <div className="col-xl-3 col-md-6">
                          <div className="card bg-primary text-white mb-4">
                              <div className="card-body">Primary Card</div>
                              <div className="card-footer d-flex align-items-center justify-content-between">
                                  <a className="small text-white stretched-link" href="#">View Details</a>
                                  <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-md-6">
                          <div className="card bg-warning text-white mb-4">
                              <div className="card-body">Warning Card</div>
                              <div className="card-footer d-flex align-items-center justify-content-between">
                                  <a className="small text-white stretched-link" href="#">View Details</a>
                                  <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-md-6">
                          <div className="card bg-success text-white mb-4">
                              <div className="card-body">Success Card</div>
                              <div className="card-footer d-flex align-items-center justify-content-between">
                                  <a className="small text-white stretched-link" href="#">View Details</a>
                                  <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-md-6">
                          <div className="card bg-danger text-white mb-4">
                              <div className="card-body">Danger Card</div>
                              <div className="card-footer d-flex align-items-center justify-content-between">
                                  <a className="small text-white stretched-link" href="#">View Details</a>
                                  <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-xl-6">
                          <div className="card mb-4">
                              <div className="card-header">
                                  <i className="fas fa-chart-area mr-1"></i>
                                  Area Chart Example
                              </div>
                              <div className="card-body">
                                  <canvas id="myAreaChart" width="100%" height="40">
                                  </canvas>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-6">
                          <div className="card mb-4">
                              <div className="card-header">
                                  <i className="fas fa-chart-bar mr-1"></i>
                                  Bar Chart Example
                              </div>
                              <div className="card-body"><canvas id="myBarChart" width="100%" height="40"></canvas></div>
                          </div>
                      </div>
                  </div>
                  <div className="card mb-4">
                      <div className="card-header">
                          <i className="fas fa-table mr-1"></i>
                          DataTable Example
                      </div>
                      <div className="card-body">
                          <div className="table-responsive">
                              <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                  <thead>
                                      <tr>
                                          <th>Name</th>
                                          <th>Position</th>
                                          <th>Office</th>
                                          <th>Age</th>
                                          <th>Start date</th>
                                          <th>Salary</th>
                                      </tr>
                                  </thead>
                                  <tfoot>
                                      <tr>
                                          <th>Name</th>
                                          <th>Position</th>
                                          <th>Office</th>
                                          <th>Age</th>
                                          <th>Start date</th>
                                          <th>Salary</th>
                                      </tr>
                                  </tfoot>
                                  <tbody>
                                      <tr>
                                          <td>Tiger Nixon</td>
                                          <td>System Architect</td>
                                          <td>Edinburgh</td>
                                          <td>61</td>
                                          <td>2011/04/25</td>
                                          <td>$320,800</td>
                                      </tr>
                                      <tr>
                                          <td>Garrett Winters</td>
                                          <td>Accountant</td>
                                          <td>Tokyo</td>
                                          <td>63</td>
                                          <td>2011/07/25</td>
                                          <td>$170,750</td>
                                      </tr>
                                      <tr>
                                          <td>Ashton Cox</td>
                                          <td>Junior Technical Author</td>
                                          <td>San Francisco</td>
                                          <td>66</td>
                                          <td>2009/01/12</td>
                                          <td>$86,000</td>
                                      </tr>
                                      <tr>
                                          <td>Cedric Kelly</td>
                                          <td>Senior Javascript Developer</td>
                                          <td>Edinburgh</td>
                                          <td>22</td>
                                          <td>2012/03/29</td>
                                          <td>$433,060</td>
                                      </tr>
                                      <tr>
                                          <td>Airi Satou</td>
                                          <td>Accountant</td>
                                          <td>Tokyo</td>
                                          <td>33</td>
                                          <td>2008/11/28</td>
                                          <td>$162,700</td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
              </div>
          </main>
          <Footer />
      </div>
    </div>
    </div>
  </div>
  )
}