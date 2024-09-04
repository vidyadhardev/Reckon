import React from "react";
import { Bounce } from 'react-awesome-reveal'
const UserModuleEntry = () => {

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
          <p className=" p-lg-5 justify-content-end ms-5 me-5 fs-5" >
            <b>User Module :- </b> <br />
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
          <div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModuleEntry;



