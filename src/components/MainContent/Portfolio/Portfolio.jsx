import React, { useState } from 'react'
import Stack from 'react-bootstrap/esm/Stack';
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
import { categories, portData } from './PortData';

const Portfolio = () => {
    const [key , setKey] = useState('All Categories');

    const filteredItems = key === 'All Categories'? portData : portData.filter(item => item.id === key);
    
  return (
    <Stack gap={5} style={{marginTop:"90px"}}>
        <div className='section-heading'>PortFolio</div>
        <div className='service-desc d-flex justify-content-center'>
            <p className='w-75 w-md-50 text-secondary'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum Velit officia consequat duis enim velit mollit. lorem ipsum</p>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
            <Stack direction="horizontal" className='port-categories' gap={5}>
                
            <div className='tab-buttons'
                onClick={() => setKey('All Categories')}
                style={
                    {   color: key === "All Categories" ? "#FFB400":"black",
                        fontSize: '18px',
                        fontWeight: "500",
                        lineHeight: "123.6%",
                        cursor: 'pointer'
                    }
                }
            >All Categories</div>

                {
                    categories.map((item, index) => 
                    <div key={index} 
                        className="tab-buttons"
                        onClick={() => setKey(item)}
                        style={
                            {   
                                color: key === item ? "#FFB400":"black",
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

        <div className='tab-panes d-flex flex-row flex-wrap justify-content-around gap-4'>
                {
                    filteredItems.map((item, index) => {
                        return (
                            <img src={item.image} style={{width:"280px", height:"270px"}} alt='item-data' key={index} />
                        )
                    })
                }
        </div>
    </Stack>
  )
}

export default Portfolio;