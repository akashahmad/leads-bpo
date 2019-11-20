import React, {useRef, useEffect, useState} from "react";
import {apiPath} from '../../config'
import Button from "react-bootstrap/Button";
import axios from "axios";
import Style from "./style";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { Link } from 'react-router-dom';


export default () => {



    const [name, setName] = useState("");
    const [nameValiation, setNameValidation] = useState(false);
    const [x, setx] = useState("");

    const customValidation = () => {
        if (!name) {
            setNameValidation(true);
        }
        else{
            let newMessate = [...showQuestions];
            newMessate.push({question: "typing"});
            setShowQuestions(newMessate);
        }

        
    };

    // const plugins = [ CSSPlugin, AttrPlugin ];
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
            question: "My Phone Number is",
            takeInput: true,
            value: "",
            name: "phone"
        },
        {
            question: "What is your email?",
            takeInput: false
        },
        {
            question: "My Email is.........",
            takeInput: true,
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
        axios.post(apiPath + "/team", obj)
            .then(res => {

            })
            .catch(err => {

            })
    };
    const checkValid=()=>
    {
        if(!x || x==="true")
        {
            customValidation();
        }
        else{
           
        }

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
                                        color="purple"
                                        height={80}
                                        width={80}
                                    />
                                </div>
                            </div>
                        );
                    }else if (!single.takeInput && single.question !== "submit") {
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

                                    <p className="p ml-5" style={{color: "white"}}>{single.question}</p>
                                    <input placeholder="" className="input mt-4 ml-4" style={nameValiation ? {border: "1px solid red"} : {}}
                                           onChange={event => {
                                               let newMessate = [...showQuestions];
                                               newMessate[index].value = event.target.value;
                                               setShowQuestions(newMessate);
                                               setName(event.target.value)
                                               setNameValidation(false)
                                           }}
                                    />
                                     <p style={{color: "red", fontSize: "12px"}}>{nameValiation ? "Name is required" : ""}</p>
                                   <Button variant="secondary" className="button ml-2"
                                            onClick={() => {
                                                checkValid()
                                                // customValidation();
                                                // let newMessate = [...showQuestions];
                                                // newMessate.push({question: "typing"});
                                                // setShowQuestions(newMessate);
                                                
                                            }}
                                    >
                                        {x&&x==="false"?"Go":"Go"}
                                        
                                    </Button>

                                </div>
                            </div>
                        );
                    } else if (single.question === "submit") {
                        return (
                            <div className="chat-input2">
                                <div className="chat-input-data2">

                                    <p className="p ml-5" style={{color: "white"}}>Thank you for giving all
                                        information.</p>
                               <Link to={"./Thankyou"}>     <Button variant="secondary" className=" ml-2"
                                            onClick={() => {
                                                submitHandler();
                                            }}
                                    >
                                        Submit
                                    </Button>
                                </Link>                
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