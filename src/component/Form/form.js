import React,{useState,useEffect, Component} from 'react'
import axios from 'axios';
import {apiPath} from '../../config'
import Style from './Style'


export default class Form extends Component{
 
    constructor(props){
    super(props)

    this.state={
        firstname:'',
        lastname:'',
        phone:'',
        email:'',
        postBody:'',

    }
    }

    changeHandler = (e) =>{
        this.setState({ [e.target.name]: e.target.value})
    }
    
    submitHandler = e=>{
        e.preventDefault()
        console.log(this.state)
        axios
        .post('https://json-team-crud.herokuapp.com/api/team',this.state)
        .then(response=>{
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
    }



 
    render(){

        function required(inputtx) 
        {
            if (inputtx.value.length == 0)
            { 
                alert("message");  	
                return false; 
            }  	
            return true; 
        }    

        const {firstName , lastName , phone , email , postBody}= this.state

        return(
        <div className="container-fluid form-background">
            <div className="column  from-body">

                <div className="form-data ">
                <div className="heading ">
                            <h1 className="pt-5">Contact Page</h1>
                    </div>

                    <form onSubmit={this.submitHandler} className="data-inside-form d-flex flex-column ml-5">

                    <label className="">Name</label>

                    <div className="d-flex mt-1">

                    <input className="" id = "22aa" type="text" required="required"  name="firstname" 
                     value={firstName}
                     required="required"
                     placeholder="First Name"
                     onChange={this.changeHandler} />


                    <input className="ml-4" type="text"  name="lastname"
                     value={lastName} 
                     placeholder="Last Name"
                     required="required"
                    onChange={this.changeHandler}  />
                    
                    </div>

                    <label className="">Phone</label>
                    <input className="" type="phone" name="phone" 
                    value={phone} 
                    placeholder="Phone"
                    onChange={this.changeHandler}
                    required="required"
                    />
                    
                    <label>Email</label>
                    <input type="email"name="email"
                     value={email} 
                     placeholder="Email"
                     required="required"
                    onChange={this.changeHandler}/>
                    
                    <label>PostBody</label>
                    <textarea rows="8" cols="3"  className="postbody" type="postBody" name="postBody"
                    required="required"
                     value={postBody}
                     placeholder=""
                     onChange={this.changeHandler}/>


                    <button type="submit" required="required">
                        Submit
                    </button>
                    
  

                    </form>
                </div>
            </div>   
        <Style/>
        </div>

    );
    }
}
