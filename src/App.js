import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import TopInfo from './components/Nav/02-Top Info';
// import Global from './components/Nav/01-Global';
import About from './components/About';
import NewArrivals from './components/NewArrivals';
import Shop from './components/Shop';
import Videos from './components/Videos';
import AsSeenOn from './components/AsSeenOn';
import Global from './components/Nav/01-Global';
import Footer from './components/Footer';
import Slider from './components/Slider';
import Explore from './components/Explore';
import PopOut from './components/Shared/PopOut';
function App() {
  return (
    <>
      <div className='header-container'>
        <TopInfo />
        <Global />
      </div>
        <Slider />
      <div className='main-container'>
        <NewArrivals />
        <About />
        <Explore />
        <Shop />
        <Videos />
        <AsSeenOn />
      </div>
      <div className='footer-container'>
        <Footer />
      </div> 
    </>
  );
}

export default App;
