import React,{useState,useEffect, Component} from 'react'
import axios from 'axios';
import Style from './style'
import img from '../../asserts/images/cropped-Header-logo-527-148-01.png'
import '../../asserts/style/style.css'
import Button from 'react-bootstrap/Button';


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

        const {firstName , lastName , phone , email , postBody}= this.state

        return(
<>
<section>
<div className="d-flex justify-content-center">
<img className="header-logo mt-3" src={img}/>
</div>
<div className="d-flex justify-content-center img-form mt-1 align-items-center">
<div className="d-flex flex-column align-items-center">
<p>We'd love to hear from you</p>
<p className="para1">Wheather you have a question about features,trails,pricing,need a demo or<br/> anything else
    ,our team is ready to<br/> answer all your questions.
</p>
</div>
</div>
</section>
<section>
<form onSubmit={this.submitHandler}>
<div className="d-flex flex-column align-items-center div-container">
<div className="container d-flex flex-column align-items-center form">
<div className="mt-5">
  <h2 style={{color:"purple"}}>Get in touch with us</h2>  
</div>

<div className="d-flex justify-content-center mt-4">
   
<div>
  <input placeholder="First Name" className="input-first"  value={firstName} onChange={this.changeHandler}></input>  
</div>
<div className="ml-4">
  <input placeholder="Last Name" className="input-first"  value={lastName} onChange={this.changeHandler}></input>  
</div>
</div>
<div className="mt-4">
 <div> <input type="phone" placeholder="Phone"  className="fields"  onChange={this.changeHandler}></input> </div> 
</div>
<div className="mt-4">
 <div> <input placeholder="Email" className="fields"  value={email} onChange={this.changeHandler}></input> </div> 
</div>
<div className="mt-4">
 <div> <textarea placeholder="Your Question" className="text-area" value={postBody} onChange={this.changeHandler}/> </div> 
</div>
<div className="mt-4">
 <div> <Button type="submit" className="btn">Submit</Button> </div> 
</div>
</div>

</div>
</form>
</section>


<Style/>



















</>

        //     <div className="container-fluid form-container">
        // <div className="container form-contactUs">
        //     <h1 className="contact">Contact Page</h1>
        //     <div className="line">
        //     <span className="line-below-contact">__________________</span>
        //     </div>
        //     <h1 className="contactus">Contact Us</h1>
        //     <div className="column from-body">
        //         <div className="form-data ">
        //             <form onSubmit={this.submitHandler} className="form">
        //                 <div class="row">
                            
        //                 <div className="col-md-6 First1">
        //             <label className="label">Name*</label>
        //             <input type="text" name="firstname" className="form-control "
        //              value={firstName}
        //              onChange={this.changeHandler} />
        //              <span className="span-name">First</span>
        //              </div>
        //              <div className="col-md-6 Last1">
                     
        //              <label className="label12"></label>
                     
        //             <input type="text" name="lastname" className="form-control second"
        //              value={lastName}
        //             onChange={this.changeHandler}  />
        //             <span className="span-name">Last</span>
                    
                    
        //             </div>
        //             </div>
        //             <label className="label label-phone">Phone*</label>
        //             <input type="phone" name="phone" className="phone form-control"
        //             value={phone}
        //             onChange={this.changeHandler}
        //             />
                    
        //             <label className="label">Email*</label>
        //             <input type="email"name="email" className="phone form-control"
        //              value={email}
        //             onChange={this.changeHandler}/>
                    
        //             <label className="label">Post Body</label>
        //             <textarea rows="8" cols="3" type="postBody" name="postBody" className="form-control text-area"
        //              value={postBody}
        //              onChange={this.changeHandler}/>


        //             <button type="submit" className="btn_submit">
        //                 Submit
        //             </button>

        //             </form>
        //         </div>
        //     </div>
        // <Style/>
        // </div>
        // </div>

    );
    }
}