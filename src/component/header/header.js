import React from 'react'
import img from '../../asserts/images/cropped-Header-logo-527-148-01.png'
import Style from '../header/style'
import '../../asserts/style/responsive.css'
export default ()=>{
    return(
        <>
            <div className="container-fluid">
            <div className="row section1-row d-flex justify-content-around">
                
                    <img className="headerLogo" src={img} width="380px" alt="logo"/>

                    <div> 
                        <div className="section1-paragraph">     
                        <h4 className=".paragragh1-section1">Contact for Support: </h4>
                        <a className="anchor-section1" href="https://www.national-debt-help.org.uk/qualify-now/">Blackberry Finance Solutions</a>                                      
                        </div>

                        <div className="d-flex flex-column below-anchor">
                            <p className="mr-2">www.blackberryfinancesolutions.com</p>
                        </div>

                        
                    </div>

            </div>

        </div>
        <Style/>
        </>
    );
}