import React from 'react'
import { Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import "./destination.css";

export default function Destination_Slider() {
  return (
    <div className='container'>
        <div className='row'>
            <div className="col-12 destination_div">
                <p className='destination_div_p'>Browse By Destination</p>
            <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={6}
            >
            <SwiperSlide>
                <div className="destination_main_div">
                    <img src="https://resources.turo.com/f/81934/240x240/957c774400/illo_city_london_hover-2x.png" alt="" />
                    <p> London</p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="destination_main_div">
                    <img src="https://resources.turo.com/f/81934/330x330/66edc66f3e/manchester_icon_hover-2x.png" alt="" />
                    <p> Manchestor</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="destination_main_div">
                    <img src="https://resources.turo.com/f/81934/330x330/8ba4e85979/edinburgh_icon_hover-2x.png" alt="" />
                    <p> Edinburgh</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="destination_main_div">
                    <img src="https://resources.turo.com/f/81934/330x330/5f37498b45/bristol_icon_hover-2x.png" alt="" />
                    <p> Bristol </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="destination_main_div">
                    <img src="https://resources.turo.com/f/81934/240x240/76b4007676/illo_city_losangeles_hover-2x.png" alt="" />
                    <p> Los Angeles</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="destination_main_div">
                    <img src="https://resources.turo.com/f/81934/240x240/c2abf3de26/illo_city_lasvegas_hover-2x.png" alt="" />
                    <p> Las Vegas</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="destination_main_div">
                    <img src="https://resources.turo.com/f/81934/240x240/f40b3c1e95/illo_city_toronto_hover-2x.png" alt="" />
                    <p> Toronto</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="destination_main_div">
                    <img src="https://resources.turo.com/f/81934/240x240/48caa5117b/illo_city_orlando_hover-2x.png" alt="" />
                    <p> Orlando</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="destination_main_div">
                    <img src="https://resources.turo.com/f/81934/240x240/ee089eef85/illo_city_honolulu_hover-2x.png" alt="" />
                    <p> Honolulu</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="destination_main_div">
                    <img src="https://resources.turo.com/f/81934/240x240/ebf31d579f/illo_city_miami_hover-2x.png" alt="" />
                    <p> Miami</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="destination_main_div">
                    <img src="https://resources.turo.com/f/81934/240x240/3f9757ed81/illo_city_sanfrancisco_hover-2x.png" alt="" />
                    <p> San Francisco</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="destination_main_div">
                    <img src="https://resources.turo.com/f/81934/240x240/29eb3f7660/illo_city_houston_hover-2x.png" alt="" />
                    <p> Houston</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="destination_main_div">
                    <img src="https://resources.turo.com/f/81934/330x330/b0995c3a38/new-york-city-2x.png" alt="" />
                    <p> New York</p>
                </div>
            </SwiperSlide>

            </Swiper>

            </div>
        </div>
      
    </div>
  )
}
