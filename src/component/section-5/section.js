import React from 'react';
import Style from '../../component/section-5/style'
import {CollapsibleComponent, CollapsibleHead, CollapsibleContent} from 'react-collapsible-component'
import image from '../../asserts/images/Group4.png'  
import {Link} from 'react-router-dom'
import smallIcon from '../../asserts/images/Group3.png'
import '../../asserts/style/style.css'



export default class MyComponent extends React.Component {
    
    constructor() {
        super();
    }
    
    render() {
        return (
            <div className="container-fluid mt-5 section5-image">
        <div className=" collapsible-container">    
            <div className="center d-flex flex-column " >
        <div className="sect5">
        <h1 class="pt-5">GOT QUESTIONS? HERE'S THE ANSWERS.</h1>
        </div>
     
        <div className="CollapsibleComponent "> 
            <CollapsibleComponent className="">
                <CollapsibleHead className="additionalClassForHead">
                    <div className="h6 collapse-image-heading-row">
                    <h6 className="h6">WHAT SORT OF DEBTS CAN YOU HELP WITH?</h6>
                    <span><img className="img" src={image}></img></span>
                    </div></CollapsibleHead>
                <CollapsibleContent className="additionalClassForContent">
                <div className="collapse-first">
                <p>The types of Debts that can be considered are:</p>
                    <div className="collapse-img">
                    <p>🏡 Council Tax arrears</p>
                    <p>💷 Loans and Payday Loans</p>
                    <p>💳 Credit cards</p>
                    <p>📑 Utility Bills</p>
                    <p>🔖 Catalogue Debts</p>
                    <p>✅ Almost any unsecured debt!</p>
                    </div>
                </div>
                </CollapsibleContent>
                <CollapsibleHead>
                <div className="collapse-image-heading-row">
                <h6 className="h6">WHAT WILL MY MONTHLY PAYMENTS BE?</h6>
                <span><img className="img" src={image}></img></span>
                </div>
                </CollapsibleHead>
                
                <CollapsibleContent>
                    <p className="mt-1">Your monthly payments should be reduced to one affordable amount that you can reasonably afford.</p>
                    <p>You will be guided by a professional who will help you become officially Debt Free!</p>
                </CollapsibleContent>
 
                <CollapsibleHead>
                <div className="collapse-image-heading-row">
                <h6 className="h6">HOW LONG DOES THE PROCESS TAKE?</h6>
                <span><img className="img" src={image}></img></span>
                </div>
                </CollapsibleHead>
                
                <CollapsibleContent>
                <p className="mt-1">We can get to work on stopping any unreasonable creditors or bailiffs as soon as we have spoken to you.</p>
                    <p> Once we have the right information for you, we may be able to start the debt relief process within the Same Day!</p>
                </CollapsibleContent>
            
            
            <CollapsibleHead>
            <div className="collapse-image-heading-row">
            <h6 className="h6">WHY DO I NEED TO SPEAK TO SOMEONE? I PREFER TO DO IT ALL ONLINE.</h6>
            <span><img className="img" src={image}></img></span>
            </div>
            </CollapsibleHead>
                <CollapsibleContent>
                <p className="mt-1">For us to help eliminate your debt, it is mandatory that we have a informal friendly chat on the phone. This is because what we do is life changing, and we will need to make sure you are given the right information for your personal circumstance.</p>
                <p>The conversations you have with us are never shared without your consent. The only way someone would know, is if you choose to tell them yourself.</p>
                </CollapsibleContent>
            </CollapsibleComponent>

            </div><Link to={"/chat"}>
            <section className="mt-5">
                      <div className="animated infinite pulse button-section2-move1 clip-div4 d-flex" id="clip-div4">
                      <button className="scroll_btn pulse  animated infinite pulse button-section2-header4 clip-div4 d-flex mt-4" id="clip-div4"><span className="button-header-text2">START FREE DEBT ASSESSMENT</span>
                            <img src={smallIcon} width="20px" className=" ml-3"></img></button>
                      </div>
                      </section> 
                      </Link>
                <div className="mt-5">

                </div>

                </div>
            </div>
            <Style/>
        </div>
        )
    }
 

}