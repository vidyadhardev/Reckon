import React from "react";
import {Ratio } from "react-bootstrap";
import { Bounce } from 'react-awesome-reveal'
const UserModuleEntry = () => {

  return (
    <div className='module-content mt-2 voucher-content ' style={{ border: "3px double black", borderRadius: '5px', }}>

      <div className="container mt-2">
        {/* <Bounce duration={2000} className="fs-3"><center>User Module Entry </center></Bounce> */}
        <div className="container p-2" >
          <Ratio aspectRatio={('1x1', '4x3', '16x9', '21x9')}>
            <iframe container src="https://www.youtube.com/embed/CElszsLCbuY?si=kjmAs6gM9yxImdkw"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" className="d-inline xs" allowFullScreen style={{ border: "3px double rgb(123, 123, 241)", borderRadius: '5px', }}></iframe>
          </Ratio>
        </div>
        <hr />
        <div className="user-module-page container">
          <p className=" p-lg-5 justify-content-end ms-5 me-5 fs-5" >
            <b>User Module :- </b> <br/>
            Creating a user entry in accounting software involves adding a new user to the system, recording their details, and assigning appropriate access and permissions. This ensures that users have the correct privileges based on their roles and that the system's security is maintained.
            <br />
            <hr />
            <Bounce duration={2000} className="fw-bold ">User Entry Key features :-</Bounce> <br />
            <ul>
              <li> <b>Access the User Management Section : </b>
                <br />1) Log in to your accounting software with administrative privileges.
              </li>
              <li className="list-unstyled">2) Navigate to the settings or administration section, usually labeled "User Management/User Entry" "Users," or "Accounts."
              </li>
              <li><b>Add a New User : </b><br />
                1) Look for an option to "Add User" or "Create New User." <br />
                2) Click on it to open the user creation form.
              </li>
              <li><b>Enter User Details:</b> <br />
                Full Name: Enter the user's full name. <br />
                Username: Create a unique username for the user.<br />
                Email Address: Provide the user's email address, which may also serve as their username.<br />
                Phone Number: Optionally, enter a contact number.<br />
              </li>
              <li><b>Assign User Roles and Permissions:</b> <br />
                1) Select the role that best fits the user's responsibilities (e.g., Admin, Accountant, Viewer). <br />
                2) Customize permissions if needed, specifying what the user can view, edit, or manage within the software.
              </li>
              <li><b> Set a Password & Save It :</b><br />
                1) Generate a temporary password or allow the user to set their own password through an email invitation.
                &nbsp;&nbsp;&nbsp;  Ensure the password meets security requirements (e.g., minimum length, use of special characters). <br />
                2) Save the new user entry.
                The system may automatically send an email notification to the user with instructions on how to log in.
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

export default UserModuleEntry;
