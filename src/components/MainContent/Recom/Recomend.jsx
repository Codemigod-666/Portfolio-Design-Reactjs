import React from 'react'
import Stack from 'react-bootstrap/esm/Stack'
import { recommendData } from './RecomData'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

const Recomend = () => {

  const settings = {
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

  }

  return (
    <Stack className='mb-5' gap={5} style={{paddingTop:'90px', paddingBottom:"20px"}}>
        <div className="section-heading">Recommendations</div>
        <div className='service-desc d-flex justify-content-center'>
            <p className='w-75 w-md-50 text-secondary'>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
            </p>
        </div>

            <Slider {...settings}>
                {
                    recommendData.map((item, index)=> {
                        return (
                            <div  key={index} className='py-2 px-3'>
                               <div className='bg-white p-4'>
                                    <div className="text-start pb-3">{item.icons}</div>
                                    <div className="text-start"><h5>{item.name}</h5></div>
                                    <p className="text-start text-secondary">{item.quote}</p>
                                    <div className='row'>
                                        <div className='col-4 '>
                                            <img src={item.image.link} alt="" />
                                        </div>
                                        <div className='col ps-4 align-self-center'>
                                            <div className='fw-bold text-start'>{item.image.Iname}</div>
                                            <div className="text-secondary  text-start">{item.image.designation}</div>
                                        </div>
                                    </div>
                               </div>
                            </div>
                        )
                    })
                }
            </Slider>

    </Stack>
  )
}

export default Recomend