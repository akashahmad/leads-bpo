import React from 'react'
import Header from '../../component/header/header'
import Footer from '../../component/footer/footer'
import Style from './style'
import '../../asserts/style/style.css'

export default ()=>{
    return(
        <>  
        <Header/>

            <div className="container-fluid background-Thankyou">
                <div className="column">
                    <div className="data2">
                        <h1>ThankYou</h1>
                        <h3 className="mt-5">You Have Submited the Required Infromation</h3>
                    </div>
                </div>
            </div>


            <Style/>
        <Footer/>
        </>
    );
}