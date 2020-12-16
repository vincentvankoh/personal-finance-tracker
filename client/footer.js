import React from 'react';

export default function Footer() {
  return(
  <footer className="py-4 bg-light mt-auto">
      <div className="container-fluid">
          <div className="d-flex align-items-center justify-content-between small">
              <div className="text-muted">Copyright &copy; JigglyFinance 2020</div>
              <div>
                  <a href="#">Privacy Policy</a>
                  &middot;
                  <a href="#">Terms &amp; Conditions</a>
              </div>
          </div>
      </div>
  </footer>
  )
}