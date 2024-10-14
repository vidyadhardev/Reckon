import React from 'react'
import { Link } from 'react-router-dom'

const DownloadReckon = () => {
  return (
    <>
      <div className='row'>
        <div className=' rounded mb-3 p-3'>
          <center><h2 className='text-capitalize fw-bold mt-2'>Download Reckon Software<br /> Setup And Exe</h2></center>
          {/* <center className='fw-bold mt-3 fs-5'>SQL Server Versions and Supported Windows Operating System</center> */}
        </div>
      </div>
      <div className='row rounded container'>
        <div className='text-capitalize custome-css'>
          <hr />
          <li className='fw-bold'>DownLoad Reckon Setup Setup</li>

          <Link to="https://drive.google.com/file/d/1EUdrieIqAY5SWL_UbJi8xVquxSccaFdT/view?usp=sharing" className='text-decoration-none'>
            <button className='btn btn-outline-info  mt-3 mb-3 '>Reckon Setup</button>
          </Link>
          <br />
          <li className='fw-bold'>DownLoad Reckon Client</li>

          <Link to="https://drive.google.com/file/d/1W1zlNzsSEnndRt5Q92vwRVfw7QLUCksc/view?usp=sharing" className='text-decoration-none'>
            <button className='btn btn-outline-info  mt-3 mb-3 '>Download Reckon Client</button>
          </Link>
          <br />
          <li className='fw-bold'>DownLoad BioPDF</li>

          <Link to="https://drive.google.com/file/d/15iGQEiThwC_xI-eWaKYoyCOmr6ZRpg26/view?usp=drive_link" className='text-decoration-none'>
            <button className='btn btn-outline-info  mt-3 mb-3 '>Download BioPDF</button>
          </Link>
          <br />
        </div>
      </div>
    </>
  )
}

export default DownloadReckon