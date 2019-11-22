import React from 'react'
import img from '../../asserts/images/logo.png'
import Style from '../header/style'
import '../../asserts/style/responsive.css'
import {Link} from 'react-router-dom'
export default ()=>{
    return(
        <>
             <div className="container-fluid">
                <div className="row section1-row d-flex justify-content-around">

                    <Link to={'/'}><img className="headerLogo" src={img} width="380px" height="100px" alt="logo" /></Link>
                    <div className="d-flex justify-content-between header">
                    <div className="d-flex flex-column align-items-end content">
                        <div className="section1-paragraph">
                            <h4 className="paragragh1-section1">Contact for Support: </h4>
                         <a className="anchor-section1"><Link to={'/help'}>Blackberry Finance Solutions</Link></a>
                           
                        </div>
                      <p className="mr-2">blackberryfinancesolutions.netlify.com</p>
                        </div>
                        {/* <div className="d-flex flex-column below-anchor">
                            <p className="mr-2">www.blackberryfinancesolutions.com</p>
                            
                      <div className="animated infinite pulse button-section2-move1 clip-div1 d-flex" id="clip-div1">
                          <button className="btn btn-purple btn-ndh  scroll_btn pulse clip1" id="clip1"><p class="button-text1">BBA</p> </button>
                          <i className="fa fa-chevron-circle-right icon movement-icon1"></i>
                      </div>
                      
                        </div> */}

                        {/* <Link to={'/form2'}>
                         <div className="animated infinite pulse button-section2-header clip-div1 d-flex mt-4" id="clip-div1">
                          <button className="btn btn-purple btn-ndh  scroll_btn pulse clip1" id="clip1"><p class="button-text-header">Contact</p> </button>
                          <i className="fa fa-chevron-circle-right icon movement-icon1"></i>
                        </div>
                       </Link> */}
                       <Link to={'/formPage'}>
                       <div>
                       <button className="scroll_btn pulse  animated infinite pulse button-section2-header clip-div1 d-flex mt-4" id="clip-div1"><span className="button-header-text">Contact</span></button>
                       </div>
                       </Link>
                      </div>

                </div>

            </div>
        <Style/>
        </>
    );
}