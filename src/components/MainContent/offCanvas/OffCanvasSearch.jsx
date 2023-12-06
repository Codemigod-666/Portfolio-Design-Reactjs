import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import profile from '../../../assets/Sidebar/Profile.jpg';
import { Stack } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import {sidebarIcons} from '../../../data';

const OffCanvasSearch = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    

    const handleClose = () => setShow(false);
    const handleClose2 = () => setShow2(false);
    const handleShow = () => setShow(true);
    const handleShow2 = () => setShow2(true);
  
    return ( 
      <div className='d-block d-lg-none px-3 py-3'>
        
        <div className='bg-white px-2 py-2 rounded-5 d-flex justify-content-between'>
            <div className=''>
                <Button variant='light rounded-5 bg-white' className='m-0 p-2' onClick={handleShow}>
                    <img src={profile} style={{width:"40px",height:"40px"}}  alt="" />
                </Button>

                
            </div>
            
            <div className=' d-flex justify-content-center align-items-center'>
                <Button variant='light me-3 rounded-5 bg-white'>
                    <i className="fa-solid fa-circle-half-stroke fa-xl"></i>
                </Button>
                <Button variant='light rounded-5 bg-white' onClick={handleShow2}>
                    <i className="fa-solid fa-bars"></i>
                </Button>
            </div>
        </div>


    
            <Offcanvas show={show}  onHide={handleClose} placement='start'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Profile</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <Stack gap={3}>
            <div className="p-2 image-section">
                <img src={profile} alt='profile' />

                <Stack className='mt-4'>
                <div className='p-2'>
                    <h5>Rishi Khandagle</h5>
                    <small className='text-secondary'>Front-End Developer</small>
                </div>
                <div className="media-flex mt-3 d-flex flex-row justify-content-around px-2">
                    <div><i className="fa-brands fa-facebook "></i></div>
                    <div><i className="fa-brands fa-instagram"></i></div>
                    <div><i className="fa-brands fa-twitter"></i></div>
                    <div><i className="fa-brands fa-linkedin"></i></div>
                    <div><i className="fa-brands fa-youtube"></i></div>
                    <div><i className="fa-brands fa-dribbble"></i></div>
                </div>
                <hr className='mx-3'></hr>
                </Stack>
            
                
            </div>
            <Stack className="px-4" gap={3}>
                <div className='d-flex flex-row justify-content-between'>
                <div className='bg-warning px-2'>Age: </div>
                <div>21</div>
                </div>
                <div className='d-flex flex-row justify-content-between'>
                <div className='bg-warning px-2'>Residence: </div>
                <div>AWB</div>
                </div>
                <div className='d-flex flex-row justify-content-between'>
                <div className='bg-warning px-2'>Freelance: </div>
                <div>Available</div>
                </div>
                <div className='d-flex flex-row justify-content-between'>
                <div className='bg-warning px-2'>Address: </div>
                <div>Kanchanwadi,AWB</div>
                </div>
                <hr></hr>
            </Stack>

            <div className="p-2">
                <div className='text-start px-3'>
                <h5 className=''>Language</h5>
                <Stack gap={3} className='pt-3'>
                    <div>
                    <div className='d-flex justify-content-between'>
                        <div className='text-secondary'>Hindi</div>
                        <div className='text-secondary'>100%</div>
                    </div>
                    <div className='progressBar'>
                        <div className='outer rounded border border-warning' style={{height:'6px'}}>
                        <div className='inner bg-warning rounded' style={{height:"0.11em",margin:"1px",width:"99%"}}></div>
                        </div>
                    </div>
                    </div>
                    <div>
                    <div className='d-flex justify-content-between'>
                        <div className='text-secondary'>Marathi</div>
                        <div className='text-secondary'>70%</div>
                    </div>
                    <div className='progressBar'>
                        <div className='outer rounded border border-warning' style={{height:'6px'}}>
                        <div className='inner bg-warning rounded' style={{height:"0.11em",margin:"1px",width:"70%"}}></div>
                        </div>
                    </div>
                    </div>
                    <div>
                    <div className='d-flex justify-content-between'>
                        <div className='text-secondary'>English</div>
                        <div className='text-secondary'>90%</div>
                    </div>
                    <div className='progressBar'>
                    <div className='outer rounded border border-warning' style={{height:'6px'}}>
                        <div className='inner bg-warning rounded' style={{height:"0.11em",margin:"1px",width:"90%"}}></div>
                    </div>
                    </div>
                    </div>
                </Stack>
                <hr></hr>
                </div>
            </div>
            <div className="p-2">
                <div className='text-start px-3'>
                <h5 className=''>Skills</h5>
                <Stack gap={3} className='pt-3'>
                    <div>
                    <div className='d-flex justify-content-between'>
                        <div className='text-secondary'>HTML</div>
                        <div className='text-secondary'>90%</div>
                    </div>
                    <div className='progressBar'>
                        <div className='outer rounded border border-warning' style={{height:'6px'}}>
                        <div className='inner bg-warning rounded' style={{height:"0.11em",margin:"1px",width:"90%"}}></div>
                        </div>
                    </div>
                    </div>
                    <div>
                    <div className='d-flex justify-content-between'>
                        <div className='text-secondary'>CSS</div>
                        <div className='text-secondary'>90%</div>
                    </div>
                    <div className='progressBar'>
                        <div className='outer rounded border border-warning' style={{height:'6px'}}>
                        <div className='inner bg-warning rounded' style={{height:"0.11em",margin:"1px",width:"90%"}}></div>
                        </div>
                    </div>
                    </div>
                    <div>
                    <div className='d-flex justify-content-between'>
                        <div className='text-secondary'>JAVASCRIPT</div>
                        <div className='text-secondary'>90%</div>
                    </div>
                    <div className='progressBar'>
                    <div className='outer rounded border border-warning' style={{height:'6px'}}>
                        <div className='inner bg-warning rounded' style={{height:"0.11em",margin:"1px",width:"90%"}}></div>
                    </div>
                    </div>
                    </div>
                    <div>
                    <div className='d-flex justify-content-between'>
                        <div className='text-secondary'>REACT JS</div>
                        <div className='text-secondary'>70%</div>
                    </div>
                    <div className='progressBar'>
                    <div className='outer rounded border border-warning' style={{height:'6px'}}>
                        <div className='inner bg-warning rounded' style={{height:"0.11em",margin:"1px",width:"70%"}}></div>
                    </div>
                    </div>
                    </div>
                    <div>
                    <div className='d-flex justify-content-between'>
                        <div className='text-secondary'>GIT & GITHUB</div>
                        <div className='text-secondary'>60%</div>
                    </div>
                    <div className='progressBar'>
                    <div className='outer rounded border border-warning' style={{height:'6px'}}>
                        <div className='inner bg-warning rounded' style={{height:"0.11em",margin:"1px",width:"60%"}}></div>
                    </div>
                    </div>
                    </div>
                </Stack>
                </div>

            </div>

            <div className='p-2'>
                <div className='text-start px-3 ps-4'>
                <h5 className='pb-3'>Extra Skills</h5>
                <Stack gap={1} className='pb-3'>
                    <div className='row'>
                    <div className='col-2'>
                    <i className="fa-brands fa-bootstrap fa-lg " style={{color:"#FFB400"}}></i>
                    </div>
                    <div className='text-secondary col' style={{fontSize:"14px"}}> Bootstrap ,React-Bootstrap</div>
                    </div>
                    <div className='row'>
                    <div className='col-2'>
                    <i className="fa-brands fa-sass fa-lg" style={{color:"#FFB400"}}></i>
                    </div>
                    <div className='text-secondary col' style={{fontSize:"14px"}}> SASS, SCSS, CSS3</div>
                    </div>
                    <div className='row'>
                    <div className='col-2'>
                    <i className="fa-brands fa-figma fa-lg" style={{color:"#FFB400"}}></i>
                    </div>
                    <div className='text-secondary col' style={{fontSize:"14px"}}> Figma, Styling</div>
                    </div>
                    <div className='row'>
                    <div className='col-2'>
                    <i className="fa-solid fa-c fa-lg" style={{color:"#FFB400"}}></i>
                    </div>
                    <div className='text-secondary col' style={{fontSize:"14px"}}> C, C++, Java,Python</div>
                    </div>
                </Stack>
                <hr></hr>
                </div>
            </div>
            <div>
                <button className='btn btn-warning fw-bold' style={{width:"90%",height:"45px"}}> Download CV &nbsp; &nbsp; &nbsp; &nbsp; <i className="fa-solid fa-download"></i></button>
            </div>
        </Stack>
            </Offcanvas.Body>
            </Offcanvas>

            <Offcanvas show={show2} onHide={handleClose2} placement='end' style={{maxWidth: "110px"}}>
                <Offcanvas.Header closeButton>
                    
                </Offcanvas.Header>
                <Offcanvas.Body>
                <Card className='right-side right-sidebar' 
                style={{
                    position:"fixed",
                    width:"inherit",
                    paddingTop:"100px",
                    paddingBottom:"300px",
                    height:"120vh",
                    // minHeight:"100vh",
                    overflowY:"scroll",
                }}>
                    <div className='container'>
                        <div className='mb-5 pb-5 d-flex justify-content-center'>
                            <i className="fa-solid fa-circle-half-stroke fa-xl"></i>
                        </div>
            
                        <Stack style={{paddingTop:"130px"}} direction='vertical' gap={5}>
                            {
                                sidebarIcons.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <img src={item.icons} className='p-3 rounded-5' style={{backgroundColor:'#F0F0F6'}} alt="image" />
                                        </div>
                                    )
                                })
                            }
                        </Stack>
                    </div>
                </Card>
                </Offcanvas.Body>
            </Offcanvas>

      </div>
    );
}

export default OffCanvasSearch