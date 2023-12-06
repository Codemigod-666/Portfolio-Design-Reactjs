import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import RightSidebar from './components/RightSidebar/RightSidebar';
import HomePage from './components/MainContent/HomePage';
import { useState } from 'react';

function App() {

  const [theme, setTheme] = useState('light');
  return (
    <div className="App" data-bs-theme={theme}>
        <div className='container23'>
          <div className="row mx-0">
            <div className='col-3 d-lg-block d-none px-0 left-side text-center'
            style={
              {
                left:"0",
                overflowY:"scroll",
                minHeight:"100vh",
              }
            }>
              {/*Left-Sidebar*/}
              <LeftSidebar />
            </div>

            <div className='col-12 col-lg-8 text-center'>
            {/*Main Content */}
              <HomePage />
            </div>

            <div className='col-1 px-0 mx-0 d-none d-lg-block right-side text-center'
            style={{
                right:"0",
                overflowY:"scroll",
                minHeight:"100vh",
            }}>
              {/* RightSideBar */}
              <RightSidebar />
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
