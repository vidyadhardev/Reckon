import React from 'react'
import './ReckonDemoPage.css';
const GarmentFootwearSoftware = () => {
  return (
    <>
      <div className='home-content mt-3 ' style={{ border: "3px double black", borderRadius: '5px', background: 'white' }}>
        <div className="home-heading">
          <div className="container justify-content-around align-items-center w-75 mt-3 width-adjust">
            <h3> <center className='mb-4'> Garment & Footwear </center></h3>
            <div className=" ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/0mW8BzBoJgQ?si=gFVVClzmX_2un1cw"
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
          <br />
       
        </div>
      </div>
    </>
  )
}

export default GarmentFootwearSoftware