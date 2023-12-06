import React, { useState } from 'react'
import Stack from 'react-bootstrap/esm/Stack';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { categories, portData } from './PortData';

const Portfolio = () => {
    const [key , setKey] = useState('UI Design');
    
  return (
    <Stack gap={5} style={{marginTop:"90px"}}>
        <div className='section-heading'>PortFolio</div>
        <div className='service-desc d-flex justify-content-center'>
            <p className='w-50 text-secondary'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum Velit officia consequat duis enim velit mollit. lorem ipsum</p>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
            <Stack direction="horizontal" gap={3}>
                
            <div className='tab-buttons'
            style={
                {
                    fontSize: '18px',
                    fontWeight: "500",
                    lineHeight: "123.6%",
                    cursor: 'pointer'
                }
            }
            >All Categories</div>

                {
                    categories.map((item, index) => <div key={index} 
                        className="tab-buttons"
                        onClick={() => setKey(item)}
                        style={
                            {
                                fontSize: '18px',
                                fontWeight: "500",
                                lineHeight: "123.6%",
                                cursor:'pointer'
                            }
                        }
                    >{item}</div>)
                }
            </Stack>
        </div>

        <div className='tab-panes d-flex flex-row flex-wrap justify-content-around'>
                {
                    portData.map((item , index) => {
                        if(item.id === key){
                            return <img src={item.image} alt="tabs" />
                        }
                        else {
                            return null;
                        }
                    })
                }
        </div>

        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
            >
            <Tab eventKey="home" title="Home">
                Tab content for Home
            </Tab>
            <Tab eventKey="profile" title="Profile">
                Tab content for Profile
            </Tab>
            <Tab eventKey="contact" title="Contact">
                Tab content for Contact
            </Tab>
        </Tabs>
    </Stack>
  )
}

export default Portfolio;