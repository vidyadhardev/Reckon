import React from 'react'
import { Bounce } from 'react-awesome-reveal'
const PurchaseOrderRegister = () => {
  return (
    <>
      <div className='home-content mt-3 ' style={{ border: "3px double black", borderRadius: '5px', background: 'white' }}>
        <div className="home-heading">
          <div className="container justify-content-around align-items-center w-75 mt-3">
            <div className="container justify-content-between align-items-center">
              <h3> PurchaseOrderRegister </h3>
              {/* <div className=" ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/rGQ79MrZUQw?autoplay="
                title="YouTube video player"
                frameborder="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                class="d-inline xs"
                allowfullscreen
                style={{ border: "3px double rgb(123, 123, 241)", borderRadius: "5px" }}>
              </iframe>
            </div> */}
            </div>
          </div>
          <hr />
          <div className="home-page container">
            <p className="p-lg-5 justify-content-end ms-5 me-5 fs-5">
              <div className="container-image">
                <div className="text-contain">
                  <div className="">
                    <ul>
                      <li>
                        <b>User-Friendly Interface</b>: Navigate through your accounting tasks with ease, thanks to our intuitive design.
                      </li>
                      <li><b>Comprehensive Features</b>: From invoicing to expense tracking, payroll management to financial reporting, Reckon covers all your accounting needs.</li>
                      <li><b>Cloud-Based Access</b>: Access your financial data anytime, anywhere, with our secure cloud-based platform.</li>
                      <li><b>Real-Time Updates</b>: Keep your financial information up-to-date with real-time data synchronization.</li>
                    </ul>
                  </div>
                  <hr />
                  <Bounce duration={3000} className="fw-bold">Key Features -: </Bounce>
                  <li><b>GST Report Online :</b> All GST Report Get you On Your Reckon Software</li>
                  <li><b>Expense Tracking:</b> Keep track of all your business expenses effortlessly.</li>
                  <li><b>Payroll Management:</b> Simplify payroll processing and ensure timely payments.</li>
                  <li><b>Financial Reporting:</b> Generate comprehensive financial reports with a few clicks.</li>
                  <li><b>Multi-User Access:</b> Collaborate with your team by providing multi-user access.</li>
                  <li> etc. </li>
                </div>
              </div>
              <hr />
              <b className="text-uppercase">INTRODUCING RECKON SOFTWARE WITH CLOUD .&#160;</b>
              <b>
                “Reckon Sales Pvt. Ltd. Pan-India.”
              </b>
              We believe in adding value to the businesses by way of providing GST, Desktop, Cloud and Mobile based solutions. We also specialize in providing training to the clients to enable them to access digital solutions for their businesses.
              Our clients are our biggest strength; they have enabled us to carry on our business for the next 25 years.<br />
              <hr />
              <Bounce duration={3000} className="fw-bold">Benefits of Reckon Software </Bounce> <br />
              <ul>
                <li>Effortlessly send invoices & reminders via SMS, WhatsApp, & Email without DLT registration or high annual fees</li>
                <li>Import Purchase through EXCEL</li>
                <li>GSTIN Bulk Verification</li>
                <li>Reckon With Cloud</li>
                <li>Reckon ERP</li>
              </ul>

            </p>
            <div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PurchaseOrderRegister;