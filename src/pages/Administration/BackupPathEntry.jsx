import React from "react";
import { Bounce } from "react-awesome-reveal";
const BackupPathEntry = () => {

  return (
    <>
      <div className='home-content mt-3 ' style={{ border: "3px double black", borderRadius: '5px', background: 'white' }}>
        <div className="home-heading">
          <center> BackupPathEntry</center>
          <hr />
          <div className="home-page container">
            <p className=" p-lg-5 justify-content-end ms-5 me-5 fs-5" >
              <b>Backup Path Entry-:</b><br />
              In Reckon Software "calculation" refers to the automated processes that perform mathematical operations to manage and report financial data. These calculations are essential for various accounting functions, including:-
              <hr />
              <Bounce duration={2000}><b className="fw-bold align-items-lg-start text-uppercase">Load Default Option :- </b> </Bounce>
              <ol>
                <li><b>Bookkeeping :</b>Calculating balances for accounts by recording debits and credits.
                </li>
                <li><b>Invoicing: </b>Computing totals, taxes, and discounts for invoices.
                </li>
                <li><b>Payroll : </b>Calculating employee wages, taxes, deductions, and net pay.
                </li>
                <li><b>Financial Reporting: </b> Summarizing data into financial statements like balance sheets, income statements, and cash flow statements.
                </li>
                <li><b>Reconciliation:</b>Comparing internal records with external statements to ensure accuracy.
                </li>
              </ol>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default BackupPathEntry