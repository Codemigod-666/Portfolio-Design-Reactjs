import React from 'react'
import Stack from 'react-bootstrap/esm/Stack';
import { blogData } from './BlogData';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Blog = () => {

  const settings = {
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
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
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
    ]
  }

  return (
    <Stack gap={5} style={{paddingTop:"90px", paddingBottom:'50px'}}>
        <div className="section-heading">Blog</div>

        <div className='service-desc d-flex justify-content-center'>
            <p className='w-75 w-md-50 text-secondary'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum Velit officia consequat duis enim velit mollit. lorem ipsum</p>
        </div>

        <Slider {...settings}>
            {
                blogData.map((item, index) => {
                    return (
                        <div className='p-2' key={index}>
                            <div className='bg-white mx-0 px-0'>
                                <img src={item.image} className='w-100'  alt='data' />

                                <Stack gap={3} className='text-start pb-3'>
                                    <div className='fw-bolder text-start px-3 fs-5 ' >{item.heading}</div>
                                    <div className='text-secondary text-start px-3'>{item.text}</div>
                                    <div className="ps-3 text-warning fw-bold">Learn More &gt;</div>
                                </Stack>
                            </div>
                        </div>
                    )
                })
            }
        </Slider>
    </Stack>
  )
}

export default Blog;