import React from 'react'
import Style from '../section-2/style'
export default ()=>{
    return(

<>
{/* <!-- section 3 small icons below background image and  --> */}


<div className="container-fluid">
    <div className="row pad d-flex justify-content-center">
        
        <div className="d-flex paragraph-section3 ">
                <i className="fa fa-question-circle span"  aria-hidden="true"></i>
                <p>Free Debt Info</p>
        </div>

        <div className="d-flex ml-5 paragraph-section3">
                <i className="fa fa-lock span "  aria-hidden="true"></i>
                <p>Private & Confidential</p>
        </div>

        <div className="d-flex ml-5 paragraph-section3">
                <i className="fa fa-user span"  aria-hidden="true"></i>
                <p>Regulated Advisors</p>
        </div>

        <div className="d-flex ml-5 paragraph-section3">
                <i className="fa fa-thumbs-up span"  aria-hidden="true"></i>
                <p>Best Advice Policy</p>
        </div>
    </div>
</div>
<Style/>

</>
    );
}