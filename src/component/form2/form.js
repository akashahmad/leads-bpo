import React, {useState, useEffect, Component} from 'react'
import axios from 'axios';
import Style from './style';
import {apiPath} from '../../config'
import img from '../../asserts/images/cropped-Header-logo-527-148-01.png'
import '../../asserts/style/style.css'
import Button from 'react-bootstrap/Button';
import Footer from '../footer/footer';
import {Link} from 'react-router-dom';
export default() => {
    const submitHandler = (event) => {
        event.preventDefault();

    };

    const [data, setdata] = useState([]);
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [postBody, setpostBody] = useState("");


    const AddItem = (event) => {
        event.preventDefault();
        let payLoad = {firstName: firstName, lastName: lastName, phone: phone, email: email, postBody: postBody};
        axios.post(apiPath + '/api/team', payLoad).then(response => {
            console.log(response)
        });

        setfirstName("");
        setlastName("");
        setemail("");
        setphone("");
        setpostBody("");

    };
    return (
        <>
        <section>
            <div className="d-flex justify-content-center">
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
            <form onSubmit={event => submitHandler(event)}>
                <div className="d-flex flex-column align-items-center div-container">
                    <div className="container d-flex flex-column align-items-center form">
                        <div className="mt-5">
                            <h2 style={{color: "#006a90"}}>Get in touch with us</h2>
                        </div>

                        <div className="d-flex justify-content-center mt-4">

                            <div className="firstname">
                                <input type="text" name="firstname" placeholder="First Name" className="input-first"
                                       value={firstName}
                                       onChange={(event) => setfirstName(event.target.value)} required>
                                </input>
                            </div>
                            <div className="lastname ml-4">
                                <input type="text" name="lastname" placeholder="Last Name" className="input-first"
                                       value={lastName}
                                       onChange={(event) => setlastName(event.target.value)} required>

                                </input>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div><input type="number" placeholder="Phone" className="fields"
                                        value={phone}
                                        onChange={(event) => setphone(event.target.value)} required>

                            </input>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div>
                                <input required type="email" placeholder="Email" className="fields" value={email}
                                       onChange={(event) => setemail(event.target.value)}

                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <div> <textarea type="text" placeholder="Your Question" className="text-area"
                                            value={postBody}
                                            onChange={(event) => setpostBody(event.target.value)} required>
  </textarea></div>
                        </div>
                        <div className="mt-4">
                            <div>
                                <Link to={"./thankuPage"}> <Button type="submit"
                                                                   className="btn-form">Submit</Button></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </form>
        </section>

        <Footer/>
        <Style/>

        </>

    );
}

