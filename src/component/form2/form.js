import React, {useState, useEffect, Component} from 'react'
import axios from 'axios';
import Style from './style';
import {apiPath} from '../../config'
import '../../asserts/style/style.css'
import '../../asserts/style/contactFormResponsive.css';
export default() => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [postBody, setpostBody] = useState("");

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


    const phoneNumberValidator = number => {
        let re = /^(\+44\s?\d{10}|0044\s?\d{10}|0\s?\d{10})?$/;
        if(re.test(String(number).toLowerCase()))
        {
            console.log(true);
            setphone(true);
        }
        else {
            console.log(false);

        }
    };

    const AddItem = event => {
        event.preventDefault();
        let payLoad = {firstName: firstName, lastName: lastName, phone: phone, email: email, postBody: postBody};
            axios.post(apiPath + "/api/team", payLoad)
                .then(response => {
                    window.location.replace("/thank-you");
                    console.log(response);

                })
                .catch(err => {
                    console.log(err);
                });
    };

    return (
        <>

        <section>
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

        <div style={{height: '520px'}}>
        <section >
            <form  >
                <div className="d-flex flex-column align-items-center div-container">
                    <div className="container d-flex flex-column align-items-center form">
                        <div style={{width:'62%' , marginBottom: '32px' }} className="mt-5">
                            <h2 style={{color: "#006a90"}}>Get in touch with us</h2>
                        </div>
                            <div className="" style={{width:'87%', marginLeft: '-3%!important', marginRight: '-1%'}}>
                                <div id="" className="">
                                    <label className="" htmlFor="input_1_1_3">Name
                                        <span className="">*</span>
                                    </label>
                                    <div className="" id="">
                                       <span style={{marginRight:'7px'}} id="" className="">
                                            <input style={{width:'48%'}} name="firstname" id="input_1_2"
                                                   placeholder=" FIRST NAME" className="fields"
                                                   value={firstName}
                                                   onChange={addFirstName}
                                                   type="text"
                                                   required/>
                                        </span>

                                        <span id="" className="">
                                          <input  style={{width:'50%'}}  type="text"
                                                  className="fields"
                                                  placeholder="  LAST NAME"
                                                  name="lastName"  value={lastName} onChange={addLastname} required/>
                                        </span>
                                    </div>


                                    {/*<div>*/}
                                         {/*<span style={{marginRight:'26px'}} id="" className="">*/}
                                             {/*<label className="one" htmlFor='input_1_1_3'>First</label>*/}
                                            {/*</span>*/}
                                        {/*<span style={{marginLeft:'161px'}} id="" className="">*/}
                                             {/*<label className="one" htmlFor='input_1_1_3'>Last</label>*/}
                                        {/*</span>*/}
                                    {/*</div>*/}

                                    <div id="field_1_2"
                                         className="">
                                        <label className="" htmlFor='input_1_2'>Phone
                                            <span className="">*</span>
                                        </label>
                                        <div className="">
                                            <input name="phone" id="input_1_2"
                                                   placeholder="  Requested Format1: +44 1434 634996 " className="fields"
                                                   //value={phone}
                                                   type="number"
                                                   title="+44 1434634996/0044-1434634996/0 1434634996 "
                                                   onChange={(event)=>[phoneNumberValidator(event.target.value)]}

                                            required/>

                                        </div>
                                    </div>
                                    <div id="field_1_5" className="">
                                        <label className="">Email
                                            <span className="">*</span>
                                        </label>
                                        <div className="">

                                            <input id="input_1_5" type="email" placeholder="  Email" className="fields"
                                                   name='email' value={email}
                                                   onChange={addEmail}
                                                   pattern='[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\.[A-Za-z]{2,4}'
                                                   title="for example: abc@gmail.com" required/>

                                        </div>
                                    </div>



                                    <div id="field_1_4" className="">
                                        <label className="" htmlFor="input_1_4">Post Body</label>
                                        <div className="">
                                            <textarea type="text" placeholder="Your Question" className="text-area"
                                                      value={postBody}
                                                      onChange={addPostBody}
                                                      required
                                                      rows="8" cols="50"
                                            />
                            {/*<textarea name="input_4" id="input_1_4" className=""  ></textarea>*/}
                                    </div>
                                    </div>

                                </div>
                            </div>
                            <div className="mt-4">
                            <div>
                            <button className="btn"
                                    // onClick={(event)=>{AddItem(event)}}
                            >Submit
                            </button>
                            </div>
                            </div>

                    </div>
                </div>
            </form>
        </section>
        </div>
        <Style/>
        </>
    );
}