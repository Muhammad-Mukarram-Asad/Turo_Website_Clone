// import logo from './logo.svg';
// import { Carousel } from 'antd';
// import { Alert, Space } from 'antd';
// import Cars_slider from './Components/Cars_slider';
// import Carousel from './Components/Carousel';
// import Slider from './Slider';


import './App.css';
import React from 'react';
import Header from './Components/Header';
import SwiperFunction from './Components/Swiper_slider';
import Second_slider from './Components/Second_slider';
import Dreams from './Components/Dreams';
import Destination_Slider from './Components/Destination_Slider';
import Experience_Slider from './Components/Experience_Slider';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      {/* First SLider which is of Cars */}
      <SwiperFunction /> 

      {/* Second SLider which is of Cars and persons */}
      <Second_slider />

      <Destination_Slider />

      <Dreams />
      <Experience_Slider />

      <Footer />
      
     
    </div>
  );
}

export default App;
