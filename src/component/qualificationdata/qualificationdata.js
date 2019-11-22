import React, {useRef, useEffect, useState} from "react";
import {apiPath} from '../../config'
import Button from "react-bootstrap/Button";
import axios from "axios";
import Style from "./style";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import {Link} from 'react-router-dom';


export default () => {
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
            question: "My Phone Number is +44",
            takeInput: true,
            type: "number",
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
        let re = /^(\+44\s?\d{10}|0044\s?\d{10}|0\s?\d{10})?$/;
        return re.test(String(number).toLowerCase());
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
                        }, 500);
                        return (
                            <div className="ml-5 mt-5 mb-3">
                                <div className="d-flex Loader">
                                    <Loader
                                        type="ThreeDots"
                                        color="purple"
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
                                    <p className="ml-4 pt-4 p">{single.question}</p>
                                </div>
                            </div>
                        );
                    } else if (single.takeInput) {
                        return (
                            <div className="chat-input">
                                <div className="chat-input-data">
                                    <form onSubmit={(event) => {
                                        event.preventDefault();
                                        if (single.type === "number") {
                                            if (!phoneNumberValidator("0" + showQuestions[index].value)) {
                                                let newMessate = [...showQuestions];
                                                newMessate[index].message = "Number is Invalid";
                                                setShowQuestions(newMessate);
                                            } else {
                                                let newMessate = [...showQuestions];
                                                newMessate[index].value = "+44" + showQuestions[index].value;
                                                newMessate.push({question: "typing"});
                                                setShowQuestions(newMessate);
                                            }
                                        } else {
                                            let newMessate = [...showQuestions];
                                            newMessate.push({question: "typing"});
                                            setShowQuestions(newMessate);
                                        }
                                    }}>
                                        <p className="p ml-5" style={{color: "white"}}>{single.question}</p>
                                        {single.type === "number" ?
                                            <div>
                                                <input placeholder="" className="input mt-4 ml-4"
                                                       type="number"
                                                       required={true}
                                                       autoFocus
                                                       value={showQuestions[index] && showQuestions[index].value ? showQuestions[index].value : null}
                                                       onChange={event => {
                                                           let newMessate = [...showQuestions];
                                                           let value = event.target.value;
                                                           newMessate[index].message = "";
                                                           if (value.length <= 10) {
                                                               newMessate[index].value = value;
                                                           }
                                                           setShowQuestions(newMessate);
                                                       }}/>
                                                <p>{showQuestions[index].message ? showQuestions[index].message : ""}</p>
                                            </div>
                                            :
                                            <input placeholder="" className="input mt-4 ml-4"
                                                   type={single.type}
                                                   required={true}
                                                   autoFocus
                                                   onChange={event => {
                                                       let newMessate = [...showQuestions];
                                                       newMessate[index].value = event.target.value;
                                                       setShowQuestions(newMessate);
                                                   }}/>}
                                        <Button style={{position: "relative", zIndex: "1"}} type="submit"
                                                variant="secondary" className="button ml-2">
                                            Go
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        );
                    } else if (single.question === "submit") {
                        return (
                            <div className="chat-input2">
                                <div className="chat-input-data2">

                                    <p className="p ml-5" style={{color: "white"}}>Submit Message here...?</p>
                                    <Button variant="secondary" className=" ml-2"
                                            onClick={() => {
                                                submitHandler();
                                            }}
                                    >
                                        Submit
                                    </Button>
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