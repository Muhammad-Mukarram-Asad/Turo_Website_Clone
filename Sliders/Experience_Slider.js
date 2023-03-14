import React from 'react'
import { Swiper, SwiperSlide} from "swiper/react";
import { FaHeart, FaCarSide } from "react-icons/fa";
import { BsHeartHalf, BsBatteryCharging, BsStars, BsWatch } from 'react-icons/bs';
import keys_picture from "./turo_keys_picture.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import "./experience.css";

export default function Experience_Slider() {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-12 experience_div">
            <p className='experience_div_p'>Browse By Experience</p>
            <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={3}
            >
            <SwiperSlide>
                <div className="experience_inner_div">
                    <img src="https://resources.turo.com/f/81934/328x262/8e60a37cc1/image_experience_electric.jpg" alt="" />
                    <p id='exp_inner_div_p'> <span> <BsBatteryCharging style={{color:"purple", fontSize:"20px"}} /> </span> Electric</p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="experience_inner_div">
                    <img src="https://resources.turo.com/f/81934/328x262/1d0c1a5bd7/image_experience_deluxesuperdeluxe.jpg" alt="" />
                    <p id='exp_inner_div_p'> <span> <BsStars style={{color:"purple", fontSize:"20px"}} /> </span> Delux & Super Delux</p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="experience_inner_div">
                    <img src="https://resources.turo.com/f/81934/328x262/0d5b069ff2/image_experience_petfriendly.jpg" alt="" />
                    <p id='exp_inner_div_p'> <span> <BsWatch style={{color:"purple", fontSize:"20px"}} /> </span> Pet-friendly</p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="experience_inner_div">
                    <img src="https://resources.turo.com/f/81934/328x262/61e1aebed5/image_experience_convertibles.jpg" alt="" />
                    <p id='exp_inner_div_p'> <span> <FaCarSide style={{color:"purple", fontSize:"20px"}} /> </span> Convertibles</p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="experience_inner_div">
                    <img src="https://resources.turo.com/f/81934/328x262/6a22a954a4/image_experience_allwheeldrive.jpg" alt="" />
                    <p id='exp_inner_div_p'> <span> <FaHeart style={{color:"purple", fontSize:"20px"}} /> </span> All-wheel drive</p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="experience_inner_div">
                    <img src="https://resources.turo.com/f/81934/328x262/294b8f8aec/image_experience_classiccars.jpg" alt="" />
                    <p id='exp_inner_div_p'> <span> <BsHeartHalf style={{color:"purple", fontSize:"20px"}} /> </span> Classic cars</p>
                </div>
            </SwiperSlide>

            

                </Swiper>

            </div>
        </div>
        <div className="row">
            <div className="col-lg-12 col-md-10 col-sm-4 d-flex justify-content-center my-10">
                <img src={keys_picture} alt="" style={{width:800, height: 600}} />
            </div>
        </div>
      
    </div>
  )
}
