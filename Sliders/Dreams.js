import React from 'react'
import "./dreams.css";


export default function Dreams() {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-12 col-lg-12 col-md-8 col-sm-4 dream_main_div">
                <h1 className="dreams_h1">
                    Fuel Your daydreams
                </h1>
                <p id="color_p"></p>
                <p className="text-secondary">
                Stoke your wanderlust with some dreamy photo chronicles of road trip adventures.
                </p>

                <button className="btn-primary btn-lg btn-block dreams_btn">
                    Explore Travelogues
                </button>

            </div>
        </div>

        <div className="row">
            <div className="col-12 dreams_second_main_div">
                <div className="second_inner_div1"> </div>

                <div className="second_inner_div2">
                    <p>
                    FEATURED TRAVELOGUE <br /> <br />
                    <span>
                    Wild drives: the UK’s <br /> best drive-through <br /> safaris
                    </span> <br /> <br />
                    <a href="https://turo.com/blog/wayfaring/wild-drives-the-uks-best-safari-drive-throughs">
                        Read more
                    </a>
                    </p>
                </div>


            </div>
        </div>
      
    </div>
  )
}
