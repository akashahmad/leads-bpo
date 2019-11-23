import React, {useState, useEffect, Component} from 'react'
import axios from 'axios';
import Style from './style';
import {apiPath} from '../../config'
import img from '../../asserts/images/logo(1).png'
import '../../asserts/style/style.css'
import '../../asserts/style/contactFormResponsive.css';
import Button from 'react-bootstrap/Button';
import Footer from '../footer/footer';
import {Link} from 'react-router-dom';

export default() => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [postBody, setpostBody] = useState("");

    const [fieldType, setfieldType] = useState("");

    const addFirstName = e => {
        setfirstName(e.target.value)
    };

    const addLastname = e => {
        setlastName(e.target.value)
    };
    const addEmail = e => {
        setemail(e.target.value)
    };
    const addPhone = e => {
        setphone(e.target.value)
    };
    const addPostBody = e => {
        setpostBody(e.target.value)
    };

    const addMember = () => {
        if (!fieldType || fieldType === "true") {

        }

        else {
            // let payLoad = {firstName: firstName, lastName: lastName, phone: phone, email: email, postBody: postBody};
            // axios.post(apiPath + "/api/team", payLoad)
            //     .then(response => {
            //         window.location.replace("/thank-you");
            //         console.log(response);
            //
            //     })
            //     .catch(err => {
            //     });


        }


    };

    return (
        <>
        <section>
            <div className="d-flex justify-content-center" >
                <img className="header-logo mt-3" src={img}/>
            </div>
            <div className="d-flex justify-content-center img-form mt-1 align-items-center">
                <div className="d-flex flex-column align-items-center">
                    <p>We'd love to hear from you</p>
                    <p className="para1">Wheather you have a question about features,trails,pricing,need a demo or<br/>
                        anything else
                        ,our team is ready to<br/> answer all your questions.
                    </p>
                </div>
            </div>
        </section>
        <section>
            <form >
                <div className="d-flex flex-column align-items-center div-container">
                    <div className="container d-flex flex-column align-items-center form">
                        <div className="mt-5">
                            <h2 style={{color: "#006a90"}}>Get in touch with us</h2>
                        </div>

                        <div className="d-flex justify-content-center mt-4">

                            <div className="firstname">
                                <input type="text" name="firstname" placeholder="First Name" className="input-first"
                                       onChange={addFirstName} required/>
                            </div>

                            <div className="lastname ml-4">
                                <input type="text" name="lastname" placeholder="Last Name" className="input-first"
                                       value={lastName} onChange={addLastname} required/>

                            </div>

                            <div className="fieldset mt-4">
                                <div>
                                    <input type="email" placeholder="Email" className="fields"
                                           name='email' value={email}
                                           onChange={addEmail}
                                           pattern='[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\.[A-Za-z]{2,4}'
                                           title="for example: abc@gmail.com" required/>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4">
                            <div><input placeholder="Phone" className="fields"
                                        value={phone}
                                        onChange={addPhone}
                                        type="text"
                                  // pattern="\+([0-9]{1})?\(?([0-9]{3})\)?([0-9]{3})?[-.]?([0-9]{4})?"
                                   pattern="\+([0-9]{2})?[-.]?([0-9]{10})?"
                                   title="example: +44-1434634996"
                                        // title="  example: +1(222)333-4444"
                                        required/>


                            </div>
                        </div>


                        <div className="mt-4">
                            <div> <textarea type="text" placeholder="Your Question" className="text-area"
                                            value={postBody}
                                            onChange={addPostBody}
                                            required
                            />
                            </div>
                        </div>


                        <div className="mt-4">
                            <div>
                                <button onClick={() => addMember() } className="btn-form">
                                    {fieldType && fieldType==="false"?
                                        "Submit":"Submit"
                                    }


                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </form>
        </section>
        <Style/>
        </>
    );
}