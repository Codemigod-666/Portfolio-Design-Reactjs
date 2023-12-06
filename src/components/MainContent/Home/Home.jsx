import React from 'react'

const Home = () => {
  return (
    <div className=' home bg-white rounded ' style={{paddingTop:"150px", paddingBottom:"70px"}}>
        <div className="row">
            <div className="col-12 col-sm-7 text-start" style={{paddingLeft:'80px'}}>
                <div className='home-heading'>
                    I am Codemigod <br></br>
                    <span className='text-warning'> Front-end </span> Developer
                </div>

                <div className='pe-5 my-4 text-secondary'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.
                </div>

                <div>
                    <button className="btn btn-warning px-4 py-2 fw-bolder mt-3">HIRE ME <i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
            <div className="col-5">
            </div>
        </div>
    </div>
  )
}

export default Home