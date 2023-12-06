import React from 'react'
import Stack from 'react-bootstrap/esm/Stack'
import { services } from './ServicesData'

const MyServices = () => {
  return (
    <Stack gap={5} style={{paddingTop:"90px"}}>
        <div className='section-heading'> My Services</div>

        <div className='service-desc d-flex justify-content-center'>
            <p className='w-75 w-md-50 text-secondary'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum Velit officia consequat duis enim velit mollit. lorem ipsum</p>
        </div>

        <div className='d-flex flex-row flex-wrap justify-content-around'>
            {
                services.map((item , index) => {
                    return(
                        <div className='service-card  bg-white rounded my-2' key={index}>
                            <img src={item.icon} style={{marginTop:"26px", marginBottom:"26px"}}
                             alt="service-pic" />
                            <h5>{item.sHeading}</h5>
                            <p className='text-secondary'>{item.subHeading}</p>
                        </div>
                    )
                })
            }

            <div className='service-card bg-warning text-dark rounded  my-2'>
                
                <h5 className='mt-4'>Advertising </h5>
                <div className='px-4 pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. </div>
                <div ><button className='btn btn-dark mt-2 text-warning' style={{textDecoration:"none",fontSize:"13px", fontWeight:"600"}}>ORDER NOW &#62; </button></div>
            </div>
        </div>
    </Stack>
  )
}

export default MyServices;