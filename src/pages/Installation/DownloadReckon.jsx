import React from 'react'
import { Ratio } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const DownloadReckon = () => {
  return (
    <>
      <div className='fy-content mt-2'>
        <div className="container mt-3 " style={{ border: "3px double black", borderRadius: '5px', }}>
          <div className="home-page container mt-3">
            <Ratio aspectRatio={("16x9", "21x9")} >
              <iframe
                width="560" height="315"
                src="https://www.youtube.com/embed/ncURkwLfsPg?si=aLBRaWECk4tyz380" title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                className='mb-5 rounded'
              ></iframe>
            </Ratio>
          </div>
          <div className='row'>
            <div className='mt-3 mb-2 ms-5'>
              <Link to={"https://reckonsales.in/downloads.php"}  >
                <span className='btn btn-outline-info'>Download Reckon</span>
              </Link>
            </div>
          </div>
          <div className='col'>
            <p className='text-para mt-2'>

              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

          </div>

        </div>
      </div>
    </>
  )
}

export default DownloadReckon