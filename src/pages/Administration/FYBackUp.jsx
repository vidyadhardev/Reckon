import React from "react";
// import { Ratio } from "react-bootstrap";
// import { Bounce } from "react-awesome-reveal";

const FYBackUp = () => {
  return (
    <>
      <div className='home-content mt-3 ' style={{ border: "3px double black", borderRadius: '5px', background: 'white' }}>
        <div className="home-heading">
          <div className="container justify-content-around align-items-center w-75 mt-3">
            <div className="container justify-content-between align-items-center">
              <div className=" ratio ratio-16x9">
                <iframe container src="https://www.youtube.com/embed/a7k0IUF9ey8?si=_8guCzZPLpcO8Hp-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" className="d-inline xs" allowFullScreen style={{ border: "3px double rgb(123, 123, 241)", borderRadius: '5px', }}></iframe>
              </div>
            </div>
          </div>
          <hr />
          <div className="home-page container">
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
            <div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FYBackUp;


