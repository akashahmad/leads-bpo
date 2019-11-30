import React from 'react'
import Style from '../section-7/style'
import img1 from '../../asserts/images/noun_listening_1934261.png'
import img2 from '../../asserts/images/noun_help_1715151.png'
import img3 from '../../asserts/images/noun_Handshake_540620.png'

export default ()=>{

return(

    <>

        <div className="top-border pt-5">

        </div>


        <div className="container-fluid">
            <div className="section7">

                <div className="heading-first-section7">
                <h1 className="h1">Everyone has a unique story</h1>
                </div>
            
                <div className="columns col-md-12 col-sm-12 col-ml-12 d-flex col-data">
                    <div className="col-md-4  col-sm-4 col-ml-4 left-side-section7">
                        <img className="img1" src={img1} width="70px"></img>
                        <p className="paragraph1-section7" >We will listen to you</p>
                        <p className="paragraph2-section7" >The help you receive is 100% private and confidential.</p>
                    </div>
                


                    <div className="col-md-4 col-sm-4 col-ml-4 middle-section7">
                    <img src={img2} width="70px"></img>
                        <p className="middle-paragraph1-section7" >We are dedicated to helping you</p>
                        <p className="middle-paragraph2-section7" >You’ll always get personalised and professional assistance from a kind regulated advisor.</p>
                    </div>



                    <div className="col-md-4 col-sm-4 col-ml-4 right-side-section7">
                    <img src={img3} width="70px"></img>
                        <p className="right-paragraph1-section7">We can help you build a brighter future</p>
                        <p className="right-paragraph2-section7">Our partners have a combined total of over 40+ years experience, we're passionate about getting you Debt Free</p>
                    </div>

                </div>
              </div>
        </div>
        <Style/>
    </>
);

}