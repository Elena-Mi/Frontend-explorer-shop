import React, { useState } from 'react';
import './Slider.scss';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
      ];

      const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
      };
      const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
      };
    
  return (
    <div className="slider">
    <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
      <img src={data[0]} alt="sliderone" />
      <img src={data[1]} alt="slidertwo" />
      <img src={data[2]} alt="sliderthree" />
    </div>
    <div className="icons">
      <div className="icon" onClick={prevSlide}>
        <ArrowBackIosIcon />
      </div>
      <div className="icon" onClick={nextSlide}>
        <ArrowForwardIosIcon />
      </div>
    </div>
  </div>
  )
}

export default Slider