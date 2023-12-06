import React from 'react'
import Stack from 'react-bootstrap/esm/Stack'
import { plans } from './PlansData'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";

const PricePlans = () => {

    const settings = {
        infinite: true,
        arrows: false,
        autoplay: true,
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
    <Stack className=' price-plans mb-5' gap={5} style={{paddingTop:"90px"}}>
        <div className='section-heading'>Price Plans</div>
        <div className='service-desc d-flex justify-content-center'>
            <p className='w-75 w-md-50 text-secondary'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum Velit officia consequat duis enim velit mollit. lorem ipsum</p>
        </div>

        <Slider {...settings}>
        {
            plans.map((item, index) => {
                return (
                    <div key={index} className='p-2'>
                        <div key={index} className="cards bg-white" style={{width:"290px"}}>
                            {
                                item.Popular? <div className='py-2 pb-3 bg-warning fw-bold w-100'>Most Popular</div>: <div className='pb-4'>&nbsp;</div>
                            }
                            <h3 className=''>{item.heading}</h3>
                            <div className='pt-4'><span className='fw-bold' style={{fontSize:"30px"}}>${item.price}</span> &nbsp; /Hour</div>
                            <div className='pt-2 px-3 text-secondary'>{item.quote}</div>
                            
                            <Stack gap={3} className='px-5 pt-4'>
                            {
                                item.items.map((dataObj,dataIndex) => {
                                    return (
                                        <div key={dataIndex} className='row justify-content-between'>
                                            <div className='col-2'>{dataObj.selected?<i className="fa-solid fa-check" style={{color:'#FFB400'}}></i>:<i className="fa-solid fa-x" style={{color:'grey'}}></i>}</div>
                                            <div className='col-9 text-start'>{dataObj.name}</div>
                                        </div>
                                    )
                                })
                            }
                            </Stack>

                            {
                                !item.Popular ? <button className='btn btn-outline-dark rounded-5 w-50 mt-5 mb-4 fw-bold'>Order Now</button> : <button className='btn btn-warning rounded-5 w-50 mt-5 mb-4 fw-bold'>Order Now</button>
                            }

                            
                        </div>
                    </div>
                )
            })
        }
        </Slider>
    </Stack>
  )
}

export default PricePlans