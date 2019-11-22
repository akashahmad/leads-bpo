import React from 'react'
import Layout from '../../component/layout/layout'
import Style from './style';

export default ()=>{

    return(
        <>

        <Layout>
            <hr/>
            <section className="thankuPage">
                <div className="container">
                        <div className="row" >
                            <div className="twelve columns text-center" >
                                <h3>Great News!</h3>
                                <p className="leads"> <strong>  You could potentially qualify to Write-Off a Large % of your Debts..</strong></p>
                                <br/>
                                    <h3>What Happens Next?</h3>
                                    <strong> <p> You will receive a phone call in the next minute, please stay by your phone.. </p>
                                        <p> <br/>If you don't have time to speak right now, please still answer and let us know when would be a better time.</p> </strong>
                            </div>

                        </div>

                </div>
            </section>
        </Layout>
        <Style/>
        </>
    );
}