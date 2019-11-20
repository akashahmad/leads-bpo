import React from 'react'
import Style from '../section-4/style'
import img1 from '../../asserts/images/purple-price-circle.png'
import Move from '../Form/form'


export default ()=>{
    return(
<>

{/* <!-- section 5 table--> */}

        <div className="container-fluid section5">
            <div className="row d-flex justify-content-center">
                
                <div className="left-side-section5 d-flex  flex-column mt-5 mr-5">
                    
                    <h2 className="mt-3"><b>How Much Of Your Debt Could<br/>You Potentially Write-Off?..</b></h2>
                    <p className="mt-3 pp">Here is an example of how your debt could be managed.<br/> Please note debt write off is dependent on<br/> personal circumstances, so find out now:</p>    
                    
                    <section>
                      <div className="animated infinite pulse button-section2-move1 clip-div1 d-flex" id="clip-div1">
                          <button className="btn btn-purple btn-ndh  scroll_btn pulse clip1" id="clip1"><p class="button-text1">START FREE DEBT ASSESSMENT</p> </button>                        
                          <i className="fa fa-chevron-circle-right icon movement-icon1"></i>
                      </div>
                      </section> 
                
                
                
                  </div>

            <div className="pt-5 mb-5">
                <div className="right-side mt-3  table-section-5 section5-paragraph-all">
                    
                    <div className="d-flex  border1 justify-content-between ">
                        <p className="ml-3">Total unsecured debt</p>    
                        <h5 className="numeric mr-3"><b>£ 16,458</b></h5>    
                    </div>

                    <div className="d-flex pt-3 border1 justify-content-between ">
                        <p className="ml-3">Old monthly payment</p>    
                        <h5 className="mr-3"><b>£ 689</b></h5>    
                    </div>

                    <div className="d-flex pt-2  justify-content-between section5-heading-all border3">
                        <h6 className="mt-2 ml-3">New monthly debt repayments</h6>    
                        <span className="img-section6-circle "><img class="mr-1" src={img1} width="89px" alt=""/>
                           <h5 className="mr-3" style={{marginLeft:"15px",marginTop:"-33px"}}><b> £ 689 </b></h5>
                        </span> 
                    </div>

                    <div className="d-flex pt-3   justify-content-between border4">
                        <p className="mr-4 ml-3">Monthly reduction</p>    
                        <h5 className="mr-3"><b>£ 604</b></h5>    
                    </div>

                    <div className="d-flex pt-2 justify-content-between pb-2 border5 section5-heading-all">
                        <h6 className="pt-2 ml-3">Debt written off</h6>    
                        <span className="img-section6-circle "><img className="secondImg" style={{marginLeft:"42px",marginBottom:"13px"}}  src={img1} width="100px" alt=""/>
                           <h5 className="mr-3" style={{marginLeft:"50px",marginTop:"-50px"}}><b>£ 11,358</b></h5>
                        </span> 
                    </div>

                    <div className="d-flex pt-3 justify-content-between border6 ">
                        <p className="ml-3">Term</p>    
                        <h5 className="mr-3 mt-1"><b>60 months</b></h5>    
                    </div>


                </div>

            </div>



        </div>

    </div>
<Style/>
    {/* <!-- ------------------------------- --> */}


</>
    );
}