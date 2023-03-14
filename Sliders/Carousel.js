//import Slider from "react-slick";
import React, { useState } from 'react'
// import "./carousel.css";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import { DatePicker, message } from 'antd';
import 'antd/dist/reset.css';



export default function Carousel() {
    const [date, setDate] = useState(null);
    
    // function for picking the date:

    const handleChange = (value) => {
        message.info(`Selected Date: ${value ? value.format('DD-MM-YYYY') : 'None'}`);
        setDate(value);
      };

    return(
    <div style={{backgroundColor:"skyblue", width:150, height:150,textAlign:"center"}}>
        <DatePicker onChange= {handleChange} />
    <div style={{width: 150, height: 50}}>
        <p style={{color: "white", backgroundColor:"black"}}> 
           Selected Date: {date ? date.format("DD-MM-YYYY") : "None"}
        </p>

    </div>

    </div>
    )


    // const settings = {
    //     dots: true,
    //   infinite: false,
    //   speed: 500,
    //   slidesToShow: 3,
    //   slidesToScroll: 3,
    //   initialSlide: 0,
    //   responsive: [
    //     {
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 2,
    //         infinite: true,
    //         dots: true
    //       }
    //     },
    //     {
    //       breakpoint: 600,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 2,
    //         initialSlide: 2
    //       }
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1
    //       }
    //     }
    //   ]
    // };

//   return (
//     <div style={{display: 'flex', flexDirection: 'column', WebkitBoxAlign: 'center', alignItems: 'center', width: '100%', boxSizing: 'border-box', margin: '0px', padding: '0px'}}>
//     <div width="1024" style={{WebkitBoxAlign: 'center', alignItems: 'center', display: 'flex', flexDirection: 'row', marginBottom: '16px', maxWidth: '1024px', WebkitBoxPack: 'justify', justifyContent: 'space-between', width: '100%', boxSizing: 'border-box', margin: '0px 0px 16px', padding: '0px'}}>
        
//         <p style={{fontFamily: 'RlBasisGrotesque,  Avenir,  Helvetica Neue,  Helvetica,  sans-serif', fontSize: '21px', fontWeight: 900, letterSpacing: '-0.2px', lineHeight: '28px', textTransform: 'none', margin: '0px', color: 'rgb(18, 18, 20)', paddingLeft: '4px', boxSizing: 'border-box', padding: '0px 0px 0px 4px'}}>Browse by make</p>
        
//         <div style={{display: 'flex', flexDirection: 'row', boxSizing: 'border-box', margin: '0px', padding: '0px'}}><button aria-label="previous" disabled="" style={{marginRight: '4px', height: '40px', width: '40px', marginLeft: '0px', border: '0px none rgba(16, 16, 16, 0.3)', cursor: 'pointer', boxSizing: 'border-box', fontFamily: 'BasisGrotesque, Avenir, "Helvetica Neue", Helvetica, sans-serif', fontSize: '16px', fontWeight: 400, padding: '0px'}}>
//             <svg width="18px" height="18px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" version="1.1" style={{fill: 'rgb(137, 137, 137)', boxSizing: 'border-box'}}>
//                     <path fill-rule="evenodd" clip-rule="evenodd" d="M9.522 14a.75.75 0 0 1-.555-.245l-4.773-5.25a.754.754 0 0 1 0-1.01l4.773-5.25a.75.75 0 0 1 1.11 1.01L5.764 8l4.315 4.745A.75.75 0 0 1 9.521 14Z" fill="#121214" style={{fill: 'rgb(137, 137, 137)', boxSizing: 'border-box'}}></path>
//                 </svg></button><button aria-label="next" style={{height: '40px', width: '40px', marginRight: '8px', border: '0px none rgb(0, 0, 0)', cursor: 'pointer', marginLeft: '4px', boxSizing: 'border-box', fontFamily: 'BasisGrotesque, Avenir, "Helvetica Neue", Helvetica, sans-serif', fontSize: '16px', fontWeight: 400, padding: '0px'}}><svg width="18px" height="18px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" version="1.1" style={{fill: 'rgb(18, 18, 20)', boxSizing: 'border-box'}}>
//                     <path fill-rule="evenodd" clip-rule="evenodd" d="M6.48 14a.75.75 0 0 0 .555-.245l4.773-5.25a.754.754 0 0 0 0-1.01l-4.773-5.25a.75.75 0 0 0-1.11 1.01L10.239 8l-4.314 4.745A.75.75 0 0 0 6.48 14Z" fill="#121214" style={{fill: 'rgb(18, 18, 20)', boxSizing: 'border-box'}}></path>
//                 </svg></button></div>
//     </div>
//     <div data-testid="scroller" style={{maxWidth: '1032px', padding: '4px 0px', scrollSnapType: 'x mandatory', overflowX: 'scroll', display: 'flex', boxSizing: 'border-box', margin: '0px'}}><a href="/gb/en/suv-rental/united-states/jeep" style={{transition: 'color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s, transform 0.15s ease-in-out 0s', backgroundColor: 'rgb(255, 255, 255)', borderRadius: '8px', boxShadow: 'rgba(35, 31, 32, 0.2) 0px 2px 4px 0px, rgba(35, 31, 32, 0.1) 0px 0px 1px 0px', color: 'rgb(35, 31, 32)', flex: '1 0 auto', margin: '0px 8px', overflow: 'hidden', position: 'relative', textAlign: 'center', userSelect:'none' , width: '190px', scrollSnapAlign: 'start', scrollMargin: '0px 8px', textDecoration: 'none solid rgb(35, 31, 32)', fontWeight: 700, boxSizing: 'border-box'}}>
//             <div style={{height: '154px', width: '190px', boxSizing: 'border-box', margin: '0px', padding: '0px'}}><img alt="Jeep rental alternatives - TURO" src="//resources.turo.com/f/81934/386x308/9bf274f19e/image_make_jeep-2x.jpg" style={{maxWidth: '100%', width: '100%', boxSizing: 'border-box', border: '0px none rgb(35, 31, 32)'}} /></div>
//             <div style={{margin: '16px 0px', color: 'rgb(35, 31, 32)', fontFamily: 'RlBasisGrotesque,  Avenir,  Helvetica Neue,  Helvetica,  sans-serif', fontSize: '16px', fontWeight: 900, letterSpacing: 'normal', lineHeight: '20px', textTransform: 'none', boxSizing: 'border-box', padding: '0px'}}>Jeep</div>
//         </a><a href="/gb/en/car-rental/united-states/tesla" style={{transition: 'color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s, transform 0.15s ease-in-out 0s', backgroundColor: 'rgb(255, 255, 255)', borderRadius: '8px', boxShadow: 'rgba(35, 31, 32, 0.2) 0px 2px 4px 0px, rgba(35, 31, 32, 0.1) 0px 0px 1px 0px', color: 'rgb(35, 31, 32)', flex: '1 0 auto', margin: '0px 8px', overflow: 'hidden', position: 'relative', textAlign: 'center', userSelect: 'none', width: '190px', scrollSnapAlign: 'start', scrollMargin: '0px 8px', textDecoration: 'none solid rgb(35, 31, 32)', fontWeight: 700, boxSizing: 'border-box'}}>
//             <div style={{height: '154px', width: '190px', boxSizing: 'border-box', margin: '0px', padding: '0px'}}><img alt="Tesla rental alternatives - TURO" src="//resources.turo.com/f/81934/386x308/7dcf9bff19/image_make_tesla-2x.jpg" style={{maxWidth: '100%', width: '100%', boxSizing: 'border-box', border: '0px none rgb(35, 31, 32)'}} /></div>
//             <div style={{margin: '16px 0px', color: 'rgb(35, 31, 32)', fontFamily: 'RlBasisGrotesque,  Avenir,  Helvetica Neue,  Helvetica,  sans-serif', fontSize: '16px', fontWeight: 900, letterSpacing: 'normal', lineHeight: '20px', textTransform: 'none', boxSizing: 'border-box', padding: '0px'}}>Tesla</div>
//         </a><a href="/gb/en/car-rental/united-states/subaru" style={{transition: 'color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s, transform 0.15s ease-in-out 0s', backgroundColor: 'rgb(255, 255, 255)', borderRadius: '8px', boxShadow: 'rgba(35, 31, 32, 0.2) 0px 2px 4px 0px, rgba(35, 31, 32, 0.1) 0px 0px 1px 0px', color: 'rgb(35, 31, 32)', flex: '1 0 auto', margin: '0px 8px', overflow: 'hidden', position: 'relative', textAlign: 'center', userSelect: 'none', width: '190px', scrollSnapAlign: 'start', scrollMargin: '0px 8px', textDecoration: 'none solid rgb(35, 31, 32)', fontWeight: 700, boxSizing: 'border-box'}}>
//             <div style={{height: '154px', width: '190px', boxSizing: 'border-box', margin: '0px', padding: '0px'}}><img alt="Subaru rental alternatives - TURO" src="//resources.turo.com/f/81934/386x308/ef857a4438/image_make_subaru-2x.jpg" style={{maxWidth: '100%', width: '100%', boxSizing: 'border-box', border: '0px none rgb(35, 31, 32)'}} /></div>
//             <div style={{margin: '16px 0px', color: 'rgb(35, 31, 32)', fontFamily: 'RlBasisGrotesque,  Avenir,  Helvetica Neue,  Helvetica,  sans-serif', fontSize: '16px', fontWeight: 900, letterSpacing: 'normal', lineHeight: '20px', textTransform: 'none', boxSizing: 'border-box', padding: '0px'}}>Subaru</div>
//         </a><a href="/gb/en/car-rental/united-states/porsche" style={{transition: 'color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s, transform 0.15s ease-in-out 0s', backgroundColor: 'rgb(255, 255, 255)', borderRadius: '8px', boxShadow: 'rgba(35, 31, 32, 0.2) 0px 2px 4px 0px, rgba(35, 31, 32, 0.1) 0px 0px 1px 0px', color: 'rgb(35, 31, 32)', flex: '1 0 auto', margin: '0px 8px', overflow: 'hidden', position: 'relative', textAlign: 'center', userSelect: 'none', width: '190px', scrollSnapAlign: 'start', scrollMargin: '0px 8px', textDecoration: 'none solid rgb(35, 31, 32)', fontWeight: 700, boxSizing: 'border-box'}}>
//             <div style={{height: '154px', width: '190px', boxSizing: 'border-box', margin: '0px', padding: '0px'}}><img alt="Porsche rental alternatives - TURO" src="//resources.turo.com/f/81934/386x308/7e7ce60797/image_make_porsche-2x.jpg" style={{maxWidth: '100%', width: '100%', boxSizing: 'border-box', border: '0px none rgb(35, 31, 32)'}} /></div>
//             <div style={{margin: '16px 0px', color: 'rgb(35, 31, 32)', fontFamily: 'RlBasisGrotesque,  Avenir,  Helvetica Neue,  Helvetica,  sans-serif', fontSize: '16px', fontWeight: 900, letterSpacing: 'normal', lineHeight: '20px', textTransform: 'none', boxSizing: 'border-box', padding: '0px'}}>Porsche</div>
//         </a><a href="/gb/en/car-rental/united-states/bmw" style={{transition: 'color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s, transform 0.15s ease-in-out 0s', backgroundColor: 'rgb(255, 255, 255)', borderRadius: '8px', boxShadow: 'rgba(35, 31, 32, 0.2) 0px 2px 4px 0px, rgba(35, 31, 32, 0.1) 0px 0px 1px 0px', color: 'rgb(35, 31, 32)', flex: '1 0 auto', margin: '0px 8px', overflow: 'hidden', position: 'relative', textAlign: 'center', userSelect: 'none', width: '190px', scrollSnapAlign: 'start', scrollMargin: '0px 8px', textDecoration: 'none solid rgb(35, 31, 32)', fontWeight: 700, boxSizing: 'border-box'}}>
//             <div style={{height: '154px', width: '190px', boxSizing: 'border-box', margin: '0px', padding: '0px'}}><img alt="BMW rental alternatives" src="//resources.turo.com/f/81934/386x308/0c4f5f5186/image_make_bmw-2x.jpg" style={{maxWidth: '100%', width: '100%', boxSizing: 'border-box', border: '0px none rgb(35, 31, 32)'}} /></div>
//             <div style={{margin: '16px 0px', color: 'rgb(35, 31, 32)', fontFamily: 'RlBasisGrotesque,  Avenir,  Helvetica Neue,  Helvetica,  sans-serif', fontSize: '16px', fontWeight: 900, letterSpacing: 'normal', lineHeight: '20px', textTransform: 'none', boxSizing: 'border-box', padding: '0px'}}>BMW</div>
//         </a><a href="/gb/en/car-rental/united-states/mercedes-benz" style={{transition: 'color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s, transform 0.15s ease-in-out 0s', backgroundColor: 'rgb(255, 255, 255)', borderRadius: '8px', boxShadow: 'rgba(35, 31, 32, 0.2) 0px 2px 4px 0px, rgba(35, 31, 32, 0.1) 0px 0px 1px 0px', color: 'rgb(35, 31, 32)', flex: '1 0 auto', margin: '0px 8px', overflow: 'hidden', position: 'relative', textAlign: 'center', userSelect: 'none', width: '190px', scrollSnapAlign: 'start', scrollMargin: '0px 8px', textDecoration: 'none solid rgb(35, 31, 32)', fontWeight: 700, boxSizing: 'border-box'}}>
//             <div style={{height: '154px', width: '190px', boxSizing: 'border-box', margin: '0px', padding: '0px'}}><img alt="Mercedes-Benz rental alternatives - TURO" style={{maxWidth: '100%', width: '100%', boxSizing: 'border-box', border: '0px none rgb(35, 31, 32)'}} /></div>
//             <div style={{margin: '16px 0px', color: 'rgb(35, 31, 32)', fontFamily: 'RlBasisGrotesque,  Avenir,  Helvetica Neue,  Helvetica,  sans-serif', fontSize: '16px', fontWeight: 900, letterSpacing: 'normal', lineHeight: '20px', textTransform: 'none', boxSizing: 'border-box', padding: '0px'}}>Mercedes-Benz</div>
//         </a><a href="/gb/en/car-rental/united-states/toyota" style={{transition: 'color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s, transform 0.15s ease-in-out 0s', backgroundColor: 'rgb(255, 255, 255)', borderRadius: '8px', boxShadow: 'rgba(35, 31, 32, 0.2) 0px 2px 4px 0px, rgba(35, 31, 32, 0.1) 0px 0px 1px 0px', color: 'rgb(35, 31, 32)', flex: '1 0 auto', margin: '0px 8px', overflow: 'hidden', position: 'relative', textAlign: 'center', userSelect: 'none', width: '190px', scrollSnapAlign: 'start', scrollMargin: '0px 8px', textDecoration: 'none solid rgb(35, 31, 32)', fontWeight: 700, boxSizing: 'border-box'}}>
//             <div style={{height: '154px', width: '190px', boxSizing: 'border-box', margin: '0px', padding: '0px'}}><img alt="Toyota rental alternatives" style={{maxWidth: '100%', width: '100%', boxSizing: 'border-box', border: '0px none rgb(35, 31, 32)'}} /></div>
//             <div style={{margin: '16px 0px', color: 'rgb(35, 31, 32)', fontFamily: 'RlBasisGrotesque,  Avenir,  Helvetica Neue,  Helvetica,  sans-serif', fontSize: '16px', fontWeight: 900, letterSpacing: 'normal', lineHeight: '20px', textTransform: 'none', boxSizing: 'border-box', padding: '0px'}}>Toyota</div>
//         </a><a href="/gb/en/car-rental/united-states/nissan" style={{transition: 'color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s, transform 0.15s ease-in-out 0s', backgroundColor: 'rgb(255, 255, 255)', borderRadius: '8px', boxShadow: 'rgba(35, 31, 32, 0.2) 0px 2px 4px 0px, rgba(35, 31, 32, 0.1) 0px 0px 1px 0px', color: 'rgb(35, 31, 32)', flex: '1 0 auto', margin: '0px 8px', overflow: 'hidden', position: 'relative', textAlign: 'center', userSelect: 'none', width: '190px', scrollSnapAlign: 'start', scrollMargin: '0px 8px', textDecoration: 'none solid rgb(35, 31, 32)', fontWeight: 700, boxSizing: 'border-box'}}>
//             <div style={{height: '154px', width: '190px', boxSizing: 'border-box', margin: '0px', padding: '0px'}}><img alt="Nissan rental alternatives" style={{maxWidth: '100%', width: '100%', boxSizing: 'border-box', border: '0px none rgb(35, 31, 32)'}} /></div>
//             <div style={{margin: '16px 0px', color: 'rgb(35, 31, 32)', fontFamily: 'RlBasisGrotesque,  Avenir,  Helvetica Neue,  Helvetica,  sans-serif', fontSize: '16px', fontWeight: 900, letterSpacing: 'normal', lineHeight: '20px', textTransform: 'none', boxSizing: 'border-box', padding: '0px'}}>Nissan</div>
//         </a><a href="/gb/en/car-rental/united-states/lamborghini" style={{transition: 'color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s, transform 0.15s ease-in-out 0s', backgroundColor: 'rgb(255, 255, 255)', borderRadius: '8px', boxShadow: 'rgba(35, 31, 32, 0.2) 0px 2px 4px 0px, rgba(35, 31, 32, 0.1) 0px 0px 1px 0px', color: 'rgb(35, 31, 32)', flex: '1 0 auto', margin: '0px 8px', overflow: 'hidden', position: 'relative', textAlign: 'center', userSelect: 'none', width: '190px', scrollSnapAlign: 'start', scrollMargin: '0px 8px', textDecoration: 'none solid rgb(35, 31, 32)', fontWeight: 700, boxSizing: 'border-box'}}>
//             <div style={{height: '154px', width: '190px', boxSizing: 'border-box', margin: '0px', padding: '0px'}}><img alt="Lamborghini rental alternatives" style={{maxWidth: '100%', width: '100%', boxSizing: 'border-box', border: '0px none rgb(35, 31, 32)'}} /></div>
//             <div style={{margin: '16px 0px', color: 'rgb(35, 31, 32)', fontFamily: 'RlBasisGrotesque,  Avenir,  Helvetica Neue,  Helvetica,  sans-serif', fontSize: '16px', fontWeight: 900, letterSpacing: 'normal', lineHeight: '20px', textTransform: 'none', boxSizing: 'border-box', padding: '0px'}}>Lamborghini</div>
//         </a><a href="/gb/en/car-rental/united-states/ford" style={{transition: 'color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s, transform 0.15s ease-in-out 0s', backgroundColor: 'rgb(255, 255, 255)', borderRadius: '8px', boxShadow: 'rgba(35, 31, 32, 0.2) 0px 2px 4px 0px, rgba(35, 31, 32, 0.1) 0px 0px 1px 0px', color: 'rgb(35, 31, 32)', flex: '1 0 auto', margin: '0px 8px', overflow: 'hidden', position: 'relative', textAlign: 'center', userSelect: 'none', width: '190px', scrollSnapAlign: 'start', scrollMargin: '0px 8px', textDecoration: 'none solid rgb(35, 31, 32)', fontWeight: 700, boxSizing: 'border-box'}}>
//             <div style={{height: '154px', width: '190px', boxSizing: 'border-box', margin: '0px', padding: '0px'}}><img alt="Ford rental alternatives" style={{maxWidth: '100%', width: '100%', boxSizing: 'border-box', border: '0px none rgb(35, 31, 32)'}} /></div>
//             <div style={{margin: '16px 0px', color: 'rgb(35, 31, 32)', fontFamily: 'RlBasisGrotesque,  Avenir,  Helvetica Neue,  Helvetica,  sans-serif', fontSize: '16px', fontWeight: 900, letterSpacing: 'normal', lineHeight: '20px', textTransform: 'none', boxSizing: 'border-box', padding: '0px'}}>Ford</div>
//         </a></div>
// </div>
//   )
}
