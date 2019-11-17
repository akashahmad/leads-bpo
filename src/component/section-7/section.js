import React from 'react'
import Style from '../section-7/style'
export default ()=>{

return(
<>

{/* <!-- section 8 --> */}

<div className="container-fluid image-section8">
    <div className="justify-content-center  d-flex " style={{marginRight:"180px"}}>
    <div className="column d-flex flex-column mt-3 section-8-center" >

        <div className="heading-section8 mt-5">
            <h1>Everyone has a unique story</h1>
        </div>

        <div className="mt-4 ml-5">
            <p className="first-para">We will listen to you</p>
            <p className="second-para">The help you receive is 100% private and confidential.</p>
        </div>

        <div className="mt-4 ml-5">
                <p className="first-para">We are dedicated to helping you</p>
                <p className="second-para">You’ll always get personalised and professional assistance from a kind regulated advisor.</p>
        </div>

        <div className="mt-4 ml-5">
                <p className="first-para">We can help you build a brighter future</p>
                <p className="second-para">Our partners have a combined total of over 40+ years experience, we're passionate about getting you Debt Free</p>
        </div>

        <div className="mt-5 last-heading-h5">
        <h5 style={{fontSize:"22px"}}><b>Find the right solution for your situation</b></h5>
        </div>    

        <section>
          <div className="animated mt-5 infinite pulse button-section2-move2 clip-div2 d-flex" id="clip-div2">
              <button className="btn btn-purple btn-ndh  scroll_btn pulse clip2" id="clip2"><p className="button-text2">FIND A DEBT SOLUTION</p> </button>
              <i className="fa fa-chevron-circle-right icon movement-icon2"></i>
          </div>
          </section>
    </div>
</div>
</div>
<Style/>
{/* <!-- ------------------------------- --> */}

</>
);

}