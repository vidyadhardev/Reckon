import React from 'react'
import { Link } from 'react-router-dom'

const DownloadSQLSSMSSetup = () => {
  return (
    <>
      <div className='row'>
        <div className=' rounded mb-3 p-3'>
          <center><h1 className='text-capitalize fw-bold mt-2'>Industry-leading performance and<br /> security with SQL Server</h1></center>
          <center className='fw-bold mt-3 fs-5'>SQL Server Versions and Supported Windows Operating System</center>
        </div>
      </div>
      <div className='row rounded container'>
        <div className='text-capitalize custome-css'>
          <span className='fw-bold'>SQL SERVER 2008 64 BIT : </span>
          <li> Supported on Windows Server 2008 and Windows 7.</li>
          <Link to="https://drive.google.com/drive/folders/1buMYalzIgR8sBzz0tiuEx5qxShfOGgsZ?usp=drive_link" className='text-decoration-none'>
            <button className='btn btn-outline-info  mt-3 mb-3'>Download SQL Server 2008</button>
          </Link>
          <li className='fw-bold'>SQL-2008_X64-FULL VERSION</li>
          <Link to="https://drive.google.com/file/d/13Luu-HzKN9uGEoyvikJXxbskie70_n8O/view?usp=sharing" className='text-decoration-none'>
            <button className='btn btn-outline-info  mt-3 mb-3 '>Download SQL-2008_X64-FULL</button>
          </Link>

          <br />
          <span className='fw-bold'>SQL SERVER 2008 32 BIT : </span>
          <li> Supported on Windows Server 2008 and Windows 7.</li>
          <Link to="https://drive.google.com/drive/folders/1AOPeFSVYtnI2IHgRD56ydsLqvGF9Ni9M?usp=drive_link" className='text-decoration-none'>
            <button className='btn btn-outline-info  mt-3 mb-3'>Download SQL Server 2008</button>
          </Link>
          <br />
          <span className='fw-bold'> SQL Server 2017 : </span>
          <li> Works on Windows Server 2016, Windows Server 2019, Windows 10, and Windows 11.</li>
          <Link to="https://drive.google.com/drive/folders/1NMiFuTOnJ9bnVfHArLesZTLRnsxBZL9J?usp=sharing" className='text-decoration-none'>
            <button className='btn btn-outline-info mt-3 mb-3'>Download SQL Server 2017</button>
          </Link>
          <br />
          <br />
        </div>
      </div>
      <hr />
      <div className='header mt-3 mb-5'>
        <span className='fw-bold fs-3'>System Requirements for SQL Server</span>
        <br />
        <ul>
          <b>Processor : </b>
          <li>Minimum: 1.4 GHz (64-bit)</li>
          <li>x64 Processor: 1.4 GHz or faster.</li>
          <th>Core Count</th>
          <li>At least 4 cores recommended for SQL Server Standard/Enterprise.</li>
          <li>Minimum of 2 cores for lightweight workloads.</li>
          <li> Recommended: 2 GHz or faster for better performance, especially with large databases.</li>
          <b>Memory (RAM) :  </b>
          <li>Minimum: 4 GB</li>
          <li>Recommended: 8 GB or more depending on your workload. For larger databases and multiple users, more RAM is necessary.</li>
          <b>Storage 512/256 GB (SSD/HDD): </b>
          <li>Minimum: 6 GB for installation. Additional storage is required for the database and log files, depending on the size of your application and data.</li>
        </ul>
      </div>
    </>
  )
}

export default DownloadSQLSSMSSetup