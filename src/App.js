import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import RightSidebar from './components/RightSidebar/RightSidebar';
import HomePage from './components/MainContent/HomePage';

function App() {
  return (
    <div className="App">
        <div className='container23'>
          <div className="row mx-0">
            <div className='col-3 px-0 left-side text-center'
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

            <div className='col-8 text-center'>
            {/*Main Content */}
              <HomePage />
            </div>

            <div className='col-1 px-0 mx-0 right-side text-center'
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
