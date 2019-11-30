import React, {useRef, useEffect, useState} from "react";
import {apiPath} from '../../config'
import Button from "react-bootstrap/Button";
import axios from "axios";
import Style from "./style";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import '../../asserts/style/Chatresponsive.css';
import {Link} from 'react-router-dom'
import {PhonevalidationapiPath} from '../../config'

export default () => {
    const [checkValidaty, setValidaty] = useState(true);

    const listOfName = [
        "Lara",
        "Kate",
        "Amanda",
        "Lily",
        "Lucy",
        "Annie",
        "Gennifer",
        "Ash",
        "Alyssa",
        "Alura",
        "Ansley",
        "Dina"
    ];
    let d = new Date();
    let time = d.getHours();
    let greeting = "";
    if (time < 12) {
        greeting = "Good morning!";
    }
    if (time >= 12) {
        greeting = "Good afternoon!";
    }
    const [questions, setQuestions] = useState([
        {
            question: `Hi, I hope you're having a ${greeting} : )`,
            takeInput: false
        },
        {
            question: `My name is ${
                listOfName[Math.floor(Math.random() * 12)]
                }, I’m going to take you through your debt assessment test today.`,
            takeInput: false
        },
        {
            question: "At the end you’ll know if you qualify for help, and if you are potentially able to write-off a large % of your debt.?",
            takeInput: false
        },
        {
            question: "What is your name?",
            takeInput: false
        },
        {
            question: "My First Name is",
            takeInput: true,
            value: "",
            disable: false,
            type: "text",
            name: "firstName"
        },
        {
            question: "What is your Last Name?",
            takeInput: false
        },
        {
            question: "My Last Name is",
            takeInput: true,
            value: "",
            disable: false,
            type: "text",
            name: "lastName"
        },
        {
            question: "Nice to meet you {{firstName}}.",
            takeInput: false
        },
        {
            question: "What is your Phone Number?",
            takeInput: false
        },
        {
            question: "My Phone Number is ",
            takeInput: true,
            type: "number",
            disable: false,
            value: "",
            name: "phone"
        },
        {
            question: "What is your email?",
            takeInput: false
        },
        {
            question: "My Email is",
            takeInput: true,
            disable: false,
            type: "email",
            value: "",
            name: "email"
        },
    ]);
    const [showQuestions, setShowQuestions] = useState([{question: "typing"}]);
    const submitHandler = () => {
        let obj = {};
        showQuestions.forEach(sing => {
            if (sing.takeInput) {
                obj[sing.name] = sing.value;
            }
        })
        obj.postBody = "";
        axios.post(apiPath + "/api/team", obj)
            .then(res => {
                window.location.replace("/thank-you");
            })
            .catch(err => {

            })
    };

    const phoneNumberValidator = number => {
        let re = /^(\+44\s?\d{10}|\+0044\s?\d{10})?$/;
        return re.test(String(number).toLowerCase());
    };



    const validateEmail = email => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };


    return (
        <>

        {/*<div className="container-fluid container-all">*/}
        {/*<div className="row space-between">*/}
        {/*<img className="mt-2" src={Image}></img>*/}
        {/*<div>*/}
        {/*<i className="fa fa-lock"></i>*/}
        {/*<Button className="around-button" variant="primary">*/}
        {/*Secure Website*/}
        {/*</Button>*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*</div>*/}

        {/* 2nd section chat */}

        <div className="container-fluid section2">
            <div className="column">
                {showQuestions &&
                showQuestions.length !== 0 &&
                showQuestions.map((single, index) => {
                    if (single.question === "typing") {
                        setTimeout(() => {
                            let newMessate = [...showQuestions];
                            if (questions[index] && !questions[index].takeInput) {
                                // sound here
                                questions &&
                                questions[index].question.indexOf("{{firstName}}") !== -1
                                    ? (questions[index].question = questions[
                                    index
                                    ].question.replace(
                                    "{{firstName}}",
                                    questions[index - 3].value
                                ))
                                    : (questions[index].question = questions[index].question);
                                newMessate[index].question = questions[index].question;
                            } else {
                                newMessate[index] = questions[index];
                            }
                            if (questions[index + 1] && !questions[index].takeInput) {
                                newMessate.push({question: "typing"});
                            }
                            if (!questions[index]) {
                                newMessate[index] = {question: "submit"};
                            }
                            setShowQuestions(newMessate);
                        }, 3000);
                        return (
                            <div className="ml-5 mt-5 mb-3">
                                <div className="d-flex Loader">
                                    <Loader
                                        type="ThreeDots"
                                        color="#006a90"
                                        height={80}
                                        width={80}
                                    />
                                </div>
                            </div>
                        );
                    } else if (!single.takeInput && single.question !== "submit") {
                        return (
                            <div className="chat1 mb-1">
                                <div className="chat1-inside-data">
                                    <div style={{marginLeft: "20px",marginRight: "70px",marginTop: "15px"}}>
                                        <p id="input1-p"  className="ml-4 p">{single.question}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    } else if (single.takeInput) {
                        return (
                            <div className="chat-input">
                                <div className="chat-input-data">
                                    <form className="d-flex" style={{alignItems:"flex-start",
                                        alignContent:"Start",justifyContent:"end",minWidth:"86%"
                                    }}
                                          onSubmit={(event) =>
                                          {
                                            event.preventDefault();
                                             if (single.type === "number") {
                                                 {
                                                     if (!phoneNumberValidator("+" + showQuestions[index].value)) {
                                                                 let newMessate = [...showQuestions];
                                                                 newMessate[index].message = " * Enter a valid Pattern i.e" +
                                                                     "0044 7804944083"
                                                                 setShowQuestions(newMessate);

                                                             }
                                                     else {
                                                                 if (!checkValidaty) {
                                                                     let newMessate1 = [...showQuestions];
                                                                     newMessate1[index].message = " * Request failed with status code 509";
                                                                     setShowQuestions(newMessate1);


                                                                 }
                                                                 else {

                                                                     const word = showQuestions[index].value;
                                                                     const newnumber = word.substring(word.length - 10);
                                                                     const  validnumber="0"+newnumber;

                                                                     let payLoad = {phone: validnumber};
                                                                     axios.post(PhonevalidationapiPath+ "/api/phoneVerification", payLoad)
                                                                         .then(response => {
                                                                             let newMessate = [...showQuestions];
                                                                             newMessate[index].disable = true;
                                                                             newMessate[index].value = "+" + showQuestions[index].value;
                                                                             newMessate.push({question: "typing"});
                                                                             setShowQuestions(newMessate);

                                                                         })
                                                                         .catch(err => {
                                                                             let newMessate1 = [...showQuestions];
                                                                             newMessate1[index].message = "Request failed with status code 509";
                                                                             setShowQuestions(newMessate1);

                                                                             //setError(err.message);
                                                                            // return
                                                                         });





                                                                 }
                                                             }
                                                 }
                                             }
                                        else if (single.type === "email") {
                                            console.log(showQuestions[index].value);
                                            if (!validateEmail(showQuestions[index].value)) {
                                                let newMessate = [...showQuestions];
                                                newMessate[index].message = "Email is invalid";
                                                setShowQuestions(newMessate);
                                            }
                                            else {
                                                let newMessate = [...showQuestions];
                                                newMessate[index].disable = true;
                                                newMessate[index].value = showQuestions[index].value;
                                                newMessate.push({question: "typing"});
                                                setShowQuestions(newMessate);
                                            }
                                        }
                                        else {
                                            let newMessate = [...showQuestions];
                                            newMessate[index].disable = true;
                                            newMessate.push({question: "typing"});
                                            setShowQuestions(newMessate);
                                        }
                                    }}>
                                        <div className="set-input" style={{
                                            marginLeft: "37px",
                                            padding: 0,
                                            width: "209px",
                                            marginTop: "42px"
                                        }}>
                                            <p className=" p " style={{color: "white",width:"300px"}}>{single.question}</p>

                                        </div>
                                        {single.type === "number" ?
                                            <div>
                                                <input  placeholder="" className="input ml-4"
                                                       type="number"
                                                       required={true}
                                                       autoFocus
                                                       value={showQuestions[index] &&
                                                       showQuestions[index].value ? showQuestions[index].value : null}
                                                       onChange={event => {
                                                           let newMessate = [...showQuestions];
                                                           let value = event.target.value;
                                                           newMessate[index].message = "";
                                                           if (value.length <=14) {
                                                               newMessate[index].value = value;
                                                           }
                                                           setShowQuestions(newMessate);
                                                       }}/>
                                                <p className="req-msg">
                                                    {  showQuestions[index].message ? showQuestions[index].message : ""}</p>
                                            </div>
                                            : single.type === "email" ? <div>
                                                <input placeholder="" className="input mt-4 ml-4"
                                                       type="email"
                                                       required={true}
                                                       autoFocus
                                                       value={showQuestions[index] && showQuestions[index].value ? showQuestions[index].value : null}
                                                       onChange={event => {
                                                           let newMessate = [...showQuestions];
                                                           let value = event.target.value;
                                                           newMessate[index].value = value;
                                                           newMessate[index].message = "";
                                                           setShowQuestions(newMessate);
                                                       }}/>
                                                <p className="req-msg">
                                                    {  showQuestions[index].message ? showQuestions[index].message : ""}</p>
                                            </div> :
                                                <input placeholder="" className="input  ml-4"
                                                       type={single.type}
                                                       required={true}
                                                       minLength={2}
                                                       maxLength={16}
                                                       autoFocus
                                                       onChange={event => {
                                                           let newMessate = [...showQuestions];
                                                           newMessate[index].value = event.target.value;
                                                           setShowQuestions(newMessate);
                                                       }}/>}
                                        <div><Button style={{marginTop: "20%", marginLeft: "8%!important",
                                            backgroundColor:"#035F80"}}
                                                     disabled={showQuestions[index].disable} type="submit"
                                                     variant="secondary" className="button ml-2">
                                            Go
                                        </Button></div>
                                    </form>
                                </div>
                            </div>
                        );
                    } else if (single.question === "submit") {
                        return (

                            <div className="  chat-input-data2">
                                <div className="d-flex chat-inside-data">
                                    <div style={{marginTop: "49px", marginLeft: "34px"}}>
                                        <p className="sub-input" style={{color: "white"}}>
                                            I accept the<Link className="link"
                                            to={'/privacy-policy'} target="_blank" style={{color: "#F37F00"}}>
                                            &nbsp;Privacy Policy </Link>
                                            &nbsp;and
                                            <Link className="link"
                                                to={'/privacy-policy'}
                                                  target="_blank"
                                                  style={{color: "#F37F00"}}>
                                                 &nbsp; Terms & Conditions.</Link></p></div>
                                    <div style={{marginLeft: ""}}>
                                        <Button
                                            style={{padding: "16px", borderRadius: "11px"}}
                                            variant="secondary"
                                            onClick={() => {
                                                submitHandler();
                                            }}>Accept
                                        </Button>
                                    </div>
                                </div>
                            </div>

                        );
                    }
                })}
            </div>
        </div>
        <Style/>

        </>
    );
};