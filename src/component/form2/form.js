import React, {useState, useEffect, Component} from 'react'
import axios from 'axios';
import Style from './style';
import {apiPath} from '../../config'
import '../../asserts/style/style.css'
import {Link} from 'react-router-dom'
export default() => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [error, setError] = useState("");
    const [postBody, setpostBody] = useState("");
    const [Validnum, setValidnum] = useState(true);
    const [phonenum, setphonenum] = useState("");


    const phoneNumberValidator = number => {
        console.log(number)
        let re = /^(44\s?\d{10}|0044\s?\d{10}})?$/;
        console.log(re.test(String(number).toLowerCase()))
        return (
            re.test(String(number).toLowerCase())
        )
    };



    const AddItem = (e) => {
        e.preventDefault();
        if(!phoneNumberValidator(phone)){
            setError("* Enter phone number with pattern:0044 1434634996");
            return
        }
        else
        {
            if(!Validnum)
            {
                setError("Phone number is switched off");
                return

            }
            else {
                setphonenum(phone);
            }


        }
        let payLoad = {firstName: firstName, lastName: lastName, phone: phonenum, email: email, postBody: postBody};
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
        <section style={{height: '950px'}} >
            <form   onSubmit={(event) =>
            {
                AddItem(event);
            }} >
                <div className="d-flex flex-column align-items-center div-container">
                    <div className="container d-flex flex-column align-items-center form">
                        <div style={{  marginBottom: '32px' }} className="mt-4">
                            <h2 style={{color: "#006a90"}}>Get in touch with us</h2>
                        </div>
                        <div className="" style={{width:'87%', marginLeft: '-3%!important', marginRight: '-1%'}}>
                            <div id="" className="inside-form">
                                <label className="" htmlFor="input_1_1_3">Name
                                    <span className="">*</span>
                                </label>
                                <div className="" id="">
                                       <span style={{marginRight:'7px'}} >
                                            <input style={{width:'48%'}} name="firstname" id="input_1_2"
                                                   placeholder=" FIRST NAME" className="fields"
                                                   value={firstName}
                                                   onChange={(event)=>setfirstName(even.target.value)}
                                                   type="text"
                                                   required/>
                                        </span>

                                    <span id="" className="">
                                          <input  style={{width:'50%'}}  type="text"
                                                  className="fields"
                                                  placeholder="  LAST NAME"
                                                  name="lastName"  value={lastName}
                                                  onChange={(event)=>setlastName(even.target.value)}
                                                  required/>
                                        </span>
                                </div>


                                <div id="field_1_2"
                                     className="">
                                    <label className="" htmlFor='input_1_2'>Phone
                                        <span className="">*</span>
                                    </label>
                                    <div className="phone">
                                        <input name="phone" id="input_1_2"
                                               placeholder="  Requested Format: 0044 1434634996 " className="fields"
                                               value={phone}
                                               type="number"
                                               onChange={(event)=>setphone(even.target.value)}
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
                                               onChange={(event)=>setemail(even.target.value)}
                                               pattern='[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\.[A-Za-z]{2,4}'
                                               title="for example: abc@gmail.com" required/>

                                    </div>
                                </div>

                                <div id="field_1_4" className="">
                                    <label className="" htmlFor="input_1_4">Post Body<span className="">*</span></label>
                                    <div className="">
                                            <textarea type="text" placeholder="Your Question" className="text-area"
                                                      value={postBody}
                                                      onChange={(event)=>setpostBody(even.target.value)}
                                                      rows="8" cols="50"
                                            />
                                    </div>
                                </div>

                                <div className="d-flex">
                                    <input type="checkbox" name="" value="" style={{marginTop: "3px",height: "18px",
                                        width: "30px"}} required/>
                                    <p className="sub-input" style={{color: "#035F80"}}>
                                        I accept the<Link className="link" to={'/privacy-policy'}
                                                          style={{color: "#F37F00"}}> &nbsp;Privacy Policy </Link>&nbsp;and
                                        <Link className="link"
                                              to={'/privacy-policy'}  style={{color: "#F37F00"}}>
                                            &nbsp; Terms & Conditions.</Link>
                                    </p>
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
        <Style/>
        </>
    );
}