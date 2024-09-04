import React from 'react'
import { Link } from 'react-router-dom'

const RestaurantBarSoftware = () => {
  return (
    <>
      <div className='row card-body ms-0 me-0 mt-3 mb-3 border-2 border border-black rounded'>
        <div className='col-sm-3 card-header-tabs mx-3 my-3  ' >
          <iframe
            src="https://www.youtube.com/embed/TN61FJD2YcU?si=D5axY6vPdALsQWay"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className='rounded pill border-2 border border-black'
          >
          </iframe>
        </div>
        <div className='col-sm-8 ms-3'>
          <ol>  Restaurant Bar Software 1</ol>
        </div>
      </div>

      <div className='row card-body ms-0 me-0 mt-3 mb-3 border-2 border border-black rounded'>
        <div className='col-sm-3 card-header-tabs mx-3 my-3  ' >
          <iframe
            src="https://www.youtube.com/embed/DPlHypXlZiU?si=9ClTUoKmCyuuVqC0"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className='rounded pill border-2 border border-black'
          >
          </iframe>
        </div>
        <div className='col-sm-8 ms-3'>
          <Link to={"https://www.youtube.com/watch?v=DPlHypXlZiU&list=PLfKvjSaBLaUvdcIQnmw2lCOD71Z-aTnMi&index=3"} className='text-decoration-none' >
            <ol>
              <li className='list-unstyled text-dark'>
                Restaurant Bar Software 2
              </li>
            </ol>
          </Link>
        </div>
      </div>
      <div className='row card-body ms-0 me-0 mt-3 mb-3 border-2 border border-black rounded'>
        <div className='col-sm-3 card-header-tabs mx-3 my-3  ' >
          <iframe
            src="https://www.youtube.com/embed/m-qs0xue690?si=PgJo7EZoY-8Sqxfa"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className='rounded pill border-2 border border-black'
          >
          </iframe>
        </div>
        <div className='col-sm-8 ms-3'>
          <Link to={"https://www.youtube.com/watch?v=m-qs0xue690&list=PLfKvjSaBLaUvdcIQnmw2lCOD71Z-aTnMi&index=4"} className='text-decoration-none'>
            <ol>
              <li className='list-unstyled text-decoration-none text-dark'>
                Restaurant Bar Software 3
              </li>
            </ol>
          </Link>
        </div>
      </div>

    </>
  )
}

export default RestaurantBarSoftware