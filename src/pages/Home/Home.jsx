import React from "react";
import { Bounce } from "react-awesome-reveal";
// import Ratio from 'react-bootstrap/Ratio';
import HomeImage from "../../assets/Reckon_Home.png"
import './Home.css';

const Home = () => {
  // #0dcaf0  
  return (
    <div className='home-content mt-3 ' style={{ border: "3px double black", borderRadius: '5px', background: 'white' }}>
      <div className="home-heading">                          
        <div className="container justify-content-around align-items-center w-75 mt-3">
          <div className="container justify-content-between align-items-center">
            <div className=" ratio ratio-16x9">
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
            </div>
          </div>
        </div>
        <hr />
        <div className="home-page container">
          <p className="p-lg-5 justify-content-end ms-5 me-5 fs-5">
            <div className="container-image">
              <Bounce duration={3000} className="text-decoration-underline fw-bold">
                Why To Use Reckon Only ?
              </Bounce>
              <p>
                <b>Reckon</b>
                &nbsp; is your ultimate solution for effortless and efficient accounting. Designed for businesses of all sizes, our software ensures you have everything you need to manage your finances seamlessly.
              </p>
              <div className="text-contain">
                <div className="">
                  <ul>
                    <li>
                      <b>User-Friendly Interface</b>: Navigate through your accounting tasks with ease, thanks to our intuitive design.
                    </li>
                    <li><b>Comprehensive Features</b>: From invoicing to expense tracking, payroll management to financial reporting, Reckon covers all your accounting needs.</li>
                    <li><b>Cloud-Based Access</b>: Access your financial data anytime, anywhere, with our secure cloud-based platform.</li>
                    <li><b>Real-Time Updates</b>: Keep your financial information up-to-date with real-time data synchronization.</li>
                    <li><b>Secure and Reliable</b>: Your data's security is our top priority. We ensure your information is protected with the highest level of encryption.</li>
                    <li> Economical & Easy To Implement.</li>
                    <li> Easy & Fast Billing With 100% Accuracy.</li>
                    <li> Windows Base User Friendly Software.</li>
                    <li> Multi User / Multi Firm Combined Billing.</li>
                    <li> 100% Accuracy & SQL Base Data Security / Auto Backup.  </li>
                    <li> 50000+ Satisfied Customers, 100+ Partners And 400+ Service Professionals. </li>
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
            <br />
            We are <b>Reckon Sales Pvt. Ltd.</b> and we make ERP software to make your business more efficient and adaptable. Based out of Lucknow, India we have industry experience of more than 20 years, with a team of dedicated veterans of the industry we want to empower your business and make it as seamless as possible.
            <br />
            Our services include ERP solutions for
            <i>
              Retail, Distribution & Multi-Location businesses in various sectors like Pharmaceutical, Super Market, FMCG, Auto Parts, Textile, Footwear, Restaurants.
            </i>
            Dynamism is one of the key visions of our company and that is why we have ventured into providing mobile and cloud-based services for our clients. Our customers, from all over India including International locations, have stayed with us for 15 years; a clear indication of our commitment towards them.
            <br />
            Through our own software development center, we have developed software for different trades that are marketed under
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
            <hr />
            <Bounce duration={2300}><b className="fw-bold align-items-lg-start">Get Started with Reckon</b></Bounce>
            <ul>
              Join the thousands of businesses that trust Reckon for their accounting needs. Sign up today and take the first step towards streamlined financial management.
            </ul>
          </p>
          <div>
          </div>
        </div>
        <hr />
        <div className="main-company-images text-center">
          <div className="image-contain mb-3 m-auto">
            <div style={{ minHeight: '250px' }} className="m-auto">
              <img src={HomeImage} alt="home" className="img-fluid w-75 h-75" style={{ border: "3px double #8266e7", borderRadius: '5px' }} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
