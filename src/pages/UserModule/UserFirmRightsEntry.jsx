import React  from "react";
import {  Ratio } from "react-bootstrap";
import { Bounce } from "react-awesome-reveal";

const UserFirmRightsEntry = () => {

  return (
    <div className='module-content mt-2 voucher-content ' style={{ border: "3px double black", borderRadius: '5px', }}>
      <div className="container mt-2">
        {/* <Bounce duration={2000} className="fs-3"><center>User Firm Rights </center></Bounce> */}
        <div className="container p-2" >
          <Ratio aspectRatio={('1x1', '4x3', '16x9', '21x9')}>
            <iframe container src="https://www.youtube.com/embed/TwHItJegntI?si=Xrl10ZJ6prcJx1_d" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" className="d-inline xs" allowFullScreen style={{ border: "3px double rgb(123, 123, 241)", borderRadius: '5px', }}></iframe>
          </Ratio>
        </div>
        <hr />
        <div className="global-page container">
          <p className=" p-lg-5 justify-content-end ms-5 me-5 fs-5" >
            <b>User Firm Rights -:</b><br/>
            We are <b>Reckon Sales Pvt. Ltd.</b> and we make ERP software to make your business more efficient and adaptable. Based out of Lucknow, India we have industry experience of more than 20 years, with a team of dedicated veterans of the industry we want to empower your business and make it as seamless as possible.
            Through our own software development center, we have developed software for different trades that are marketed under <b>“Reckon Sales Pvt. Ltd. Pan-India.”</b>  We believe in adding value to the businesses by way of providing GST, Desktop, Cloud and Mobile based solutions. We also specialize in providing training to the clients to enable them to access digital solutions for their businesses.<br />
            <hr />
            <Bounce duration={2000}>
              <b>Benefits of User Firm Entry</b>
            </Bounce>
            <p>
              The User Firm Rights Entry system is designed to optimize the management of user access rights across multiple locations, ensuring consistency, efficiency, security, and flexibility. By centralizing the control of user permissions, organizations can streamline their operations and enhance the overall user experience. Here are some key benefits of implementing a global user entry system:
            </p>
            <ul>
              <li>
                <b>Consistency:</b> Ensures uniform access and permissions across all locations, eliminating discrepancies and maintaining a standardized approach to user management.
              </li>
              <li>
                <b>Efficiency:</b> Streamlines the process of managing users in a multi-location setup, reducing administrative overhead and enabling quicker response times to user access requests.
              </li>
              <li>
                <b>Security:</b> Centralized control over user access reduces the risk of unauthorized entries, as it allows for more effective monitoring and enforcement of security policies.
              </li>
              <li>
                <b>Flexibility:</b> Allows users to operate seamlessly across different regions or departments, fostering collaboration and ensuring that users have the necessary access to perform their duties efficiently.
              </li>
            </ul>
          </p>
        </div>
        {/* <hr />
        <div className="main-company-images  text-center ">
          <div className="image-contain mb-3 m-auto">
            <p>If you want to see image then <b>click</b> on press button</p>
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              click
            </Button>
            <div style={{ minHeight: '250px' }} className="m-auto">
              <Collapse in={open} dimension="width" direction="">
                <img src="../Images/Capture1.PNG" alt="FimrMaster" className="img-fluid" style={{ border: "3px double #8266e7", borderRadius: '5px', }} />
              </Collapse>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default UserFirmRightsEntry;
