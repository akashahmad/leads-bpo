import React, {useState, useEffect, Component} from 'react'
import axios from 'axios';
import Style from './style';
import {apiPath} from '../../config'
 import '../../asserts/style/style.css'
export default() => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [error, setError] = useState("");
    const [postBody, setpostBody] = useState("");
    const [Validnum, setValidnum] = useState(true);
    const [phonenum, setphonenum] = useState("");


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
        e.preventDefault();
        setphone(e.target.value);
        if(!phoneNumberValidator(phone)){
           setError("* Enter phone number with pattern:+44 1434 634996")

        }
        else
            {
                if(Validnum)
                {
                    setError("Phone number is switched off")

                }
                else {
                    setphonenum(phone);
                }

           }
    };
    const addPostBody = e => {
        setpostBody(e.target.value)
    };

    const phoneNumberValidator = number => {
        let re = /^(\44\s?\d{10}|0044\s?\d{10}})?$/;
        return (
            re.test(String(number).toLowerCase())
        )
    };



const AddItem = (e) => {
          e.preventDefault();
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

        <div style={{height: '835px'}}>
        <section style={{height: '1500px'}} >
            <form   onSubmit={(event) =>
            {
                AddItem(event);
            }} >
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
                                                   placeholder="  Requested Format: 0044 1434 634996 " className="fields"
                                                   value={phone}
                                                   type="number"
                                                   onChange={addPhone}
                                                   required/>
                                            <p style={{color:"Red"}}>{error}</p>


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
                                    </div>
                                    </div>

                                </div>
                            </div>
                            <div className="mt-4">
                            <div>
                            <button style={{marginTop:"-5px"}} className="btn_submit" type="submit">Submit
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
