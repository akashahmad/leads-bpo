import React from 'react'
import smallIcon from '../../asserts/images/Group3.png'
import Style from './Style'

export default ()=>{
    return(
        <>
            <div className="container-fluid background-section8">
              <div className="free"></div>
                <div className="row color-section8">
                    <h3 className="section8-heading">Find the right solution for your situation</h3>

                    <div className="animated infinite pulse button-section2-move1 clip-div5 d-flex" id="clip-div5">
                      <button className="scroll_btn pulse  animated infinite pulse button-section2-header clip-div5 d-flex mt-4" id="clip-div5"><span className="button-header-text5">START FREE DEBT ASSESSMENT</span>
                            <img src={smallIcon} width="20px" className=" ml-3"></img></button>
                    </div>
                     
               
                </div>
                <Style/>
            </div>
        </>
    );

}