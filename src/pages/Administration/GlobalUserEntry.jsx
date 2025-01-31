import React from "react";
import { Bounce } from "react-awesome-reveal";
const GlobalUserEntry = () => {

  return (
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
            <Bounce duration={2000}><b>Steps to Create a Global User Entry :- </b> </Bounce><br />
            Creating a global user entry in accounting software involves configuring a new user profile that is accessible and functional across multiple locations, departments, or subsidiaries of an organization. This setup is crucial for multinational companies or businesses with several branches to ensure consistent access and control over accounting functions.
            .<br />
            <hr />
            <Bounce duration={2000}><b>Benefits of Global User Entry</b></Bounce>
            <ul>
              <li><b>Consistency:</b> Ensures uniform access and permissions across all locations.</li>
              <li><b>Efficiency:</b> Streamlines the process of managing users in a multi-location setup.</li>
              <li><b>Security:</b> Centralized control over user access reduces the risk of unauthorized entries.</li>
              <li><b>Flexibility:</b> Allows users to operate seamlessly across different regions or departments.</li>
            </ul>
            <hr />
            <Bounce duration={2000}><b className="fw-bold align-items-lg-start text-uppercase">Access User Management-:  </b></Bounce>
            <ul>
              <li><b>Login:</b>  Use administrative credentials to log in to the accounting software.
              </li>
              <li><b>Navigate:</b> Go to the "User Management" or "Administration" section.
              </li>
              <ul>Assign Global Roles and Permissions<br />
                <li><b>Role Selection:</b> <br />
                  Choose a global role that aligns with the user's responsibilities (e.g., Global Admin, Regional Manager, Accountant).
                </li>
                <li><b>Permission Levels: </b> <br />Customize permissions to specify the areas the user can access, edit, or manage across different regions or departments.
                  <li className="list-unstyled"><b>Set Password and Security Options :- </b>
                  </li>
                  <li><b> Temporary Password: </b> <br />
                    Generate a temporary password or allow the user to create their own through an email invitation.
                  </li>
                  <li><b> Security Requirements: </b> <br />
                    Ensure the password meets the software’s security standards (e.g., complexity, length).<br />
                    Multi-Factor Authentication (MFA): Enable MFA for added security.</li>
                </li>
              </ul>
            </ul>
          </p>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalUserEntry;



