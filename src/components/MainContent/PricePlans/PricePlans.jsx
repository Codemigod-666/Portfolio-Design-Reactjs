import React from 'react'
import Stack from 'react-bootstrap/esm/Stack'
import { plans } from './PlansData'

const PricePlans = () => {
  return (
    <Stack className='mb-5' gap={5} style={{paddingTop:"90px"}}>
        <div className='section-heading'>Price Plans</div>
        <div className='service-desc d-flex justify-content-center'>
            <p className='w-50 text-secondary'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum Velit officia consequat duis enim velit mollit. lorem ipsum</p>
        </div>

        <div className='d-flex flex-row justify-content-around'>
        {
            plans.map((item, index) => {
                return (
                    <div key={index} className="cards bg-white" style={{width:"290px"}}>
                        {
                            item.Popular? <div className='py-2 bg-warning fw-bold w-100'>Most Popular</div>: <div className='pb-4'>&nbsp;</div>
                        }
                        <h3 className=''>{item.heading}</h3>
                        <div className='pt-4'><span className='fw-bold' style={{fontSize:"30px"}}>${item.price}</span> &nbsp; /Hour</div>
                        <div className='pt-2 px-3 text-secondary'>{item.quote}</div>
                        
                        <Stack gap={3} className='px-5 pt-4'>
                        {
                            item.items.map((dataObj,dataIndex) => {
                                return (
                                    <div key={dataIndex} className='row justify-content-between'>
                                        <div className='col-2'>{dataObj.selected?<i class="fa-solid fa-check" style={{color:'#FFB400'}}></i>:<i class="fa-solid fa-x" style={{color:'grey'}}></i>}</div>
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
                )
            })
        }
        </div>
    </Stack>
  )
}

export default PricePlans