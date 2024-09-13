import React from "react";
import { Bounce } from "react-awesome-reveal";

const UserFirmRightsEntry = () => {

  return (
    <>
      <div className='home-content mt-3 ' style={{ border: "3px double black", borderRadius: '5px', background: 'white' }}>
        <div className="home-heading">
          <div className="container justify-content-around align-items-center w-75 mt-3">
            <div className="container justify-content-between align-items-center">
              <div className=" ratio ratio-16x9">
                <iframe container src="https://www.youtube.com/embed/TwHItJegntI?si=Xrl10ZJ6prcJx1_d" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" className="d-inline xs" allowFullScreen style={{ border: "3px double rgb(123, 123, 241)", borderRadius: '5px', }}></iframe>
              </div>
            </div>
          </div>
          <hr />
          <div className="home-page container">
            <p className=" p-lg-5 justify-content-end ms-5 me-5 fs-5" >
              <b>User Firm Rights -:</b><br />
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
            <div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserFirmRightsEntry;


