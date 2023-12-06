import React from 'react'
import { Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contact = () => {
  return (
    <div>
        <div className="row mb-5">
            <div className="col-sm-7 col-12 text-start">
                <div className='form-heading mb-5'>Leave Your Information With us</div>
                <div className="form-section bg-white p-3 text-start">
                        <Form>
                            <label htmlFor="name" className='d-block text-secondary' style={{fontSize:"18px", marginBottom:"8px"}}>Your Full Name (Required)</label>
                            <input type="text" className='w-100' style={{backgroundColor:'#F0F0F6', border:'none', height: "50px", marginBottom:'25px'}} />
                            <label htmlFor="name" className='d-block text-secondary' style={{fontSize:"18px", marginBottom:"8px"}}>Your Email (Required)</label>
                            <input type="email" className='w-100' style={{backgroundColor:'#F0F0F6', border:'none', height: "50px", marginBottom:'25px'}} />
                            <label htmlFor="name" className='d-block text-secondary' style={{fontSize:"18px", marginBottom:"8px"}}>Subject</label>
                            <input type="text" className='w-100' style={{backgroundColor:'#F0F0F6', border:'none', height: "50px",  marginBottom:'25px'}} />
                            <label htmlFor="name" className='d-block text-secondary' style={{fontSize:"18px", marginBottom:"8px"}}>Your message</label>
                            <textarea type="text" className='w-100' style={{backgroundColor:'#F0F0F6', border:'none', height: "200px",  marginBottom:'25px'}} />
                    </Form>
                </div>
            </div>
            <div className="col-sm-5 col-12">
                <div className='form-heading mb-5 d-none d-sm-block'>Contact Information</div>

                <Stack className="p-4 mb-4 bg-white" gap={2}>

                    <div className='icon-section'>
                        <i className="fa-solid bg-warning p-3 rounded-5 fa-map"></i>
                    </div>

                    <div className='d-flex flex-row justify-content-between'>
                    <div className='px-2 fw-bold text-secondary'>Country: </div>
                    <div className='text-secondary'>India</div>
                    </div>
                    <div className='d-flex flex-row justify-content-between'>
                    <div className='fw-bold text-secondary px-2'>City: </div>
                    <div className='text-secondary'>Aurangabad</div>
                    </div>
                    <div className='d-flex flex-row justify-content-between'>
                    <div className='fw-bold text-secondary px-2'>Street: </div>
                    <div className='text-secondary'>Kanchanwadi</div>
                    </div>
                </Stack>
                <Stack className="p-4 mb-4 bg-white" gap={2}>

                    <div className='icon-section'>
                        <i className="fa-solid bg-warning p-3 rounded-5 fa-envelope"></i>
                    </div>

                    <div className='d-flex flex-row justify-content-between'>
                    <div className='px-2 fw-bold text-secondary'>Email: </div>
                    <div className='text-secondary'>vikay434@gmail.com</div>
                    </div>
                    <div className='d-flex flex-row justify-content-between'>
                    <div className='fw-bold text-secondary px-2'>Skype: </div>
                    <div className='text-secondary'>Username</div>
                    </div>
                    <div className='d-flex flex-row justify-content-between'>
                    <div className='fw-bold text-secondary px-2'>Telegram: </div>
                    <div className='text-secondary'>Username</div>
                    </div>
                </Stack>
                <Stack className="p-4 mb-4 bg-white" gap={2}>

                    <div className='icon-section'>
                        <i className="fa-solid bg-warning p-3 rounded-5 fa-mobile"></i>
                    </div>

                    <div className='d-flex flex-row justify-content-between'>
                    <div className='px-2 fw-bold text-secondary'>Support Services: </div>
                    <div className='text-secondary'>123-333-2112</div>
                    </div>
                    <div className='d-flex flex-row justify-content-between'>
                    <div className='fw-bold text-secondary px-2'>Office: </div>
                    <div className='text-secondary'>XXXXXX0909</div>
                    </div>
                    <div className='d-flex flex-row justify-content-between'>
                    <div className='fw-bold text-secondary px-2'>Personal: </div>
                    <div className='text-secondary'>XXXXXX0909</div>
                    </div>
                </Stack>
            </div>
        </div>
    </div>
  )
}

export default Contact