import React from 'react'
import Style from '../section-1/style'
import 'animate.css/animate.css'
import Move from '../qualificationdata/qualificationdata'
// import { FontAwesomeIcon } from 'fortawesome/fortawesome'
import '../../asserts/style/style.css'
import {Link} from 'react-router-dom'
export default()=>{
    return(
        <>
        <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        </head>
   {/* <!-- section 2 image and form --> */}

<div className="container-fluid mt-3 image">
    <div className="form">
        <div className="data  ml-5 d-flex flex-column">
          <h1 className="">Receive free debt info</h1>
            <h5 className="mt-3">Find a solution online</h5>
            <ul className="mt-3">
                <li>
                   <span className="mt-2">1</span>
                   <p className="ml-5 one mt-2">Use our debt solution finder </p> 
                </li>
                
                <li className="mt-3">
                    <span className="">2</span>
                    <p className="ml-5">Complete 4 simple questions </p>
                </li>
                
                <li className="mt-2">
                    <span className="">3</span>
                    <p className="ml-5 ">Start to become debt free </p>
                </li>
            </ul>

            <section>
                <Link to={"/help"}>
              <div className="animated infinite pulse button-section2-move clip-div d-flex" id="clip-div">
                  <button className="btn btn-purple btn-ndh  scroll_btn pulse clip" id="clip"><p class="button-text1">FIND A DEBT SOLUTION</p> </button>
                  <i  className="fa fa-chevron-circle-right icon movement-icon"/>
              </div>
              </Link>
              </section>
              

        </div>
    </div>
</div>

<Style/>
        </>
    );
}