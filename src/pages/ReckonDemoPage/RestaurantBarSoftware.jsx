import React from 'react'
const RestaurantBarSoftware = () => {
  return (
    <>
      <div className='home-content mt-3 ' style={{ border: "3px double black", borderRadius: '5px', background: 'white' }}>
        <div className="home-heading">
          <div className="container justify-content-around align-items-center w-75 mt-3">
            <div className="container justify-content-between align-items-center mb-5">
              <h3> <center className=' mb-4'> Restaurant Bar<br/> Part : 1</center></h3>
              <div className=" ratio ratio-16x9">

                <iframe
                  src="https://www.youtube.com/embed/TN61FJD2YcU?si=D5axY6vPdALsQWay"
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
            <hr />
            <div className="container justify-content-between align-items-center mb-5">
              <h3> <center className=' mb-4'> Part : 2</center></h3>
              <div className=" ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/DPlHypXlZiU?si=9ClTUoKmCyuuVqC0"
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
            <hr />
            <div className="container justify-content-between align-items-center mt-5">
              <h3> <center className=' mb-4'> Part : 3</center></h3>
              <div className=" ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/m-qs0xue690?si=QwoR5HS1SFQExICu"
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
      </div>




    </>
  )
}

export default RestaurantBarSoftware