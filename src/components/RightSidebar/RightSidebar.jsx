import React from 'react';
import Card from "react-bootstrap/Card";
import Stack from 'react-bootstrap/Stack';
import {sidebarIcons} from "../../data";

const RightSidebar = () => {
  return (
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
            <div className='mb-5 pb-5'>
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
  )
}

export default RightSidebar