import React, { useState } from "react";
import { Ratio } from "react-bootstrap";
import { Bounce } from "react-awesome-reveal";
import './FYBackUp.css'
const FYBackUp = () => {
  return (
    <div className='fy-content mt-2 voucher-content ' style={{ border: "3px double black", borderRadius: '5px', }}>
      <div className="container mt-3">
        {/* <Bounce duration={2000} className="fs-3"><center>Financial Year Back-Up</center></Bounce> */}
        <div className="container p-2" >
          <Ratio aspectRatio={('1x1', '4x3', '16x9', '21x9')}>
            <iframe container src="https://www.youtube.com/embed/a7k0IUF9ey8?si=_8guCzZPLpcO8Hp-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" className="d-inline xs" allowFullScreen style={{ border: "3px double rgb(123, 123, 241)", borderRadius: '5px', }}></iframe>
          </Ratio>
        </div>
        <hr />
        <div className="home-page container">

          <p className=" p-lg-5 justify-content-end ms-5 me-5 fs-5" >
            <div className="Voucher-page container">
              <Bounce duration={2000} className=" fw-bold">Data Backup in SQL-Based -: </Bounce>
              <p>
                Data backup is a crucial aspect of using accounting software, especially when it is SQL-based. SQL databases are widely used for their efficiency, scalability, and reliability in handling large volumes of financial data. Implementing a robust backup strategy ensures that all financial information is securely preserved and can be recovered in the event of data loss. This guide explores the importance of data backup, various backup methods, and best practices for ensuring data security in SQL-based accounting software.
                <br />
                <hr />
                <b className="fw-bold align-items-lg-start text-uppercase">Importance of Data Backup And Security </b> <br />
                <ul>
                  <li><b>Data Protection:</b> Financial data is critical for any business. Regular backups ensure that this data is protected against loss due to unforeseen circumstances such as system crashes, natural disasters, or cyber-attacks.
                  </li>
                  <li> <b>Regulatory Compliance:</b> Many industries have strict regulations regarding data retention and protection. Regular backups help businesses comply with these regulations, avoiding potential fines and legal issues.
                  </li>
                  <li><b>Risk Management:</b> Backing up data is a key component of risk management. It mitigates the impact of data loss incidents and provides a safety net for critical business information.
                  </li>
                  <li><b>Data Encryption:</b> Encrypt backup data to protect it from unauthorized access. This is particularly important for cloud backups, where data is transmitted over the internet.
                  </li>
                  <li><b>Access Control:</b>Limit access to backup data to authorized personnel only. Implement strong access control measures and regularly review permissions.
                  </li>

                  <li><b>Choosing Backup Solutions:</b> Select reliable backup solutions that are compatible with your SQL database. Consider factors such as ease of use, security features, and customer support.
                  </li>
                </ul>
              </p>
            </div>
            <hr />
            <Bounce duration={2300}> <b className="fw-bold  align-items-lg-start"> Get Started with Reckon</b>  </Bounce>
            <ul>
              Join the thousands of businesses that trust Reckon for their accounting needs. Sign up today and take the first step towards streamlined financial management.
            </ul>
          </p>
        </div>
        <hr />
        {/* <div className="main-company-images  text-center ">
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
                <img src="../Images/Capture1.PNG" alt="FimrMaster" className="img-fluid" style={{ border: "3px double black", borderRadius: '5px', }} />
              </Collapse>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default FYBackUp;


