import React from 'react'
import img from '../../asserts/images/money_advice.png'
import Style from './style'
export default()=>{

    return(
<>
<section className="pt-5">
        <div className="container-fluid">
            <div className="row d-flex justify-content-center mb-5">
                    <img className="img-money ml-5  pr-5" width="250px" height="110px" src={img}/>
                    <p className="pt-3 below-collapse  ml-5" style={{width:"805px",lineHeight:"30px",fontWeight:"600px"}}> Customers can also get free debt Counselling, debt adjusting and provision of credit information services from the
                            money advice service an organisation set up by the Government to offer practical advice to those in
                            debt.
                    </p>
                </div>
        </div>
    <Style/>
    </section> 
</>
    );
}