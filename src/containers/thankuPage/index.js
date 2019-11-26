import React from 'react'
import Layout from '../../component/layout/layout'
import Style from './style';
import '../../asserts/style/ridaresponsive.css';

export default ()=>{

    return(
        <>
        <section className="thankuPage">
            <Layout>
                <hr/>

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

            </Layout>
        </section>
        <Style/>
        </>
    );
}