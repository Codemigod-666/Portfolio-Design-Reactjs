import React from 'react'
import Stack from 'react-bootstrap/esm/Stack'
import { EduData } from './EduData'

const Education = ({Naming}) => {
  const heading = {
    fontSize: "18px",
    fontWeight: "500",
    lineHeight: "123.6%", /* 22.248px */
    textTransform: "capitalize",
  }

  return (
    <Stack gap={5} className='' style={{paddingTop:'50px'}}>
        <div className='section-heading'>{Naming}</div>
        <div className='service-desc d-flex justify-content-center'>
            <p className='w-75 w-md-50 text-secondary'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum Velit officia consequat duis enim velit mollit. lorem ipsum</p>
        </div>
        
        <Stack gap={3} className='bg-white p-5'>
            {
                EduData.map((item , index) => {
                    return (
                        <div className='row' key={index}>
                            <div className="col-sm-5 col-12 text-start">
                                <div style={{...heading}}>{item.University}</div>
                                <div className='pt-4'>{item.designation} <span className='bg-warning text-white px-1'>{item.Duration}</span> </div>
                            </div>
                            <div className="col-sm-7 col-12 text-start">
                                <div style={{...heading}}>{item.heading}</div>
                                <div className='pt-4 text-secondary'>{item.description}</div>
                            </div>

                            <hr className='mt-4' style={{opacity:'0.075'}}></hr>
                        </div>
                    )
                })
            }
        </Stack>
    </Stack>
  )
}

export default Education