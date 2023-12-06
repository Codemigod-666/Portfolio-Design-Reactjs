import React from 'react'
import { LogoData } from '../Contact/ContactData'
import Slider from 'react-slick'



const Footer = () => {

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
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
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              }
        ]
    }
  return (
    <div>
        <div className='Carousel-section' style={{marginTop:"80px"}}>
            <Slider {...settings}>
                {
                    LogoData.map ((item, index) => {
                        return (
                            <div key={index} className='d-flex justify-content-center'>
                                <img src={item.image} alt="logo" />
                            </div>
                        )
                    })
                }
            </Slider>
        </div>

        <div className='bg-white p-3 fw-bolder text-secondary mt-5'> 2021 All Rights Reserved By Rishi Khandagle</div>
    </div>
  )
}

export default Footer