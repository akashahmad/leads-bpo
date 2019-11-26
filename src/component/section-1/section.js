import React from 'react'
import Style from '../section-1/style'
import 'animate.css/animate.css'
import Move from '../qualificationdata/qualificationdata'
// import { FontAwesomeIcon } from 'fortawesome/fortawesome'
import '../../asserts/style/style.css'
import smallIcon from '../../asserts/images/Group2.png'
import Icon from '../../asserts/images/Group3.png'
import {Link} from 'react-router-dom'
export default()=>{
    return(
        <>
        <head>
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/> */}
        </head>
   {/* <!-- section 2 image and form --> */}

<div className="container-fluid mt-3 image">
    <div className="form">
        <div className="data data-responsive  ml-5 d-flex flex-column">
          <h1 className="heading-responsive-section1 ">Receive free debt info</h1>
            <h5 className="heading5-responsive-section1 mt-3">Find a solution online</h5>
            <ul className="small-circles-along-with-numbers mt-3">
                <li className="li d-flex">
                   {/* <span className=" mt-2">1</span> */}
                   <img src={smallIcon} className="smallIcon"></img>
                   <p className="ml-5 one mt-2">Use our debt solution finder </p> 
                   
                </li>
                
                <li className="li d-flex">
                    {/* <span className="">2</span> */}
                    <img src={smallIcon} className="smallIcon"></img>
                    <p className="ml-5 second-paragraph-of-icon">Complete 4 simple questions </p>
                </li>
                
                <li className="li d-flex">
                    {/* <span className="">3</span> */}
                    <img src={smallIcon} className="smallIcon"></img>
                    <p className="ml-5 third-paragraph-of-icon">Start to become debt free </p>
                </li>
            </ul>

            <section>
                <Link to={"/chat"}>
                <div>
                       <button className="scroll_btn pulse  animated infinite pulse button-section3-header clip-div2 d-flex mt-5" id="clip-div2"><span className="button-header-text2">FIND A DEBT SOLUTION</span>
                            <img src={Icon} width="20px" className=" ml-3 "></img></button>       
                       </div>
              
              {/* <div className="animated infinite pulse button-section2-move clip-div d-flex" id="clip-div">
                  <button className="btn btn-purple btn-ndh  scroll_btn pulse clip" id="clip"><p class="button-text1">FIND A DEBT SOLUTION</p> </button>
                  <img src={Icon} ></img> */}
                  {/* <i  className="fa fa-chevron-circle-right icon movement-icon"/> */}
              {/* </div> */}
              </Link>
              </section>
              

        </div>
    </div>
</div>

<Style/>
        </>
    );
}