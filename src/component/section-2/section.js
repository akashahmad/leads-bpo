import React from 'react'
import Style from '../section-2/style'
import Img1 from '../../asserts/images/noun_Question_670398.png'
import Img2 from '../../asserts/images/noun_Lock_243769.png'
import Img3 from '../../asserts/images/noun_advisor_2338579.png'
import Img4 from '../../asserts/images/noun_best_1899030.png'

export default ()=>{
    return(

<>
{/* <!-- section 3 small icons below background image and  --> */}


<div className="container-fluid">
    <div className="row pad d-flex justify-content-center">
        
        <div className="d-flex paragraph-section3">
                {/* <i className="fa fa-question-circle span"  aria-hidden="true"></i> */}
                 <div className="box-icon1"><img className="box-icon1-img" src={Img1}></img></div>
                <p className="mt-1 ml-1">Free Debt Info</p>
        </div>

        <div className="d-flex ml-5 margin-left paragraph-section3">
                <div className="box-icon1"><img className="box-icon2-img" src={Img2}></img></div>
                <p className="ml-1">Private & Confidential</p>
        </div>

        <div className="d-flex ml-5 box-responsive  paragraph-section3">
        <div className="box-icon1"><img className="box-icon3-img" src={Img3}></img></div>
                <p className="ml-1">Regulated Advisors</p>
        </div>

        <div className="d-flex ml-5 paragraph-section3">
        <div className="box-icon1 "><img className="box-icon4-img" src={Img4}></img></div>
                <p className="ml-1">Best Advice Policy</p>
        </div>
    </div>
</div>
<Style/>

</>
    );
}