import React from 'react'
import Logo from '../../asserts/images/newLogo.png'
import Style from './style'

export default ()=>{
    return(
        <div className="container-fluid footer-background">
               <div className="row">
                <img className="mt-5" src={Logo} width="200px"></img>
               </div> 
        <Style/>
        </div>
    );

}