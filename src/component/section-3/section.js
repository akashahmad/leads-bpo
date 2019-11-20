import React,{useState} from 'react'
import Style from '../section-3/style'
import ProgressBar from 'react-bootstrap/ProgressBar'
import MultiSlider, { Progress, Dot } from 'react-multi-bar-slider'
import Form from 'react-bootstrap/Form'
// rangeNew
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles({
    root: {
      width: 500,
      
  },
    input: {
      width: 42,
    },
    thumbColorPrimary:{
    height:42,
    width:42
    },
  });
  



export default ()=>{

// RangeNew Slider
const classes = useStyles();
const [value, setValue] = React.useState(30);

const handleSliderChange = (event, newValue) => {
  setValue(newValue);
  

};

const handleInputChange = event => {
  setValue(event.target.value === '' ? '' : Number(event.target.value));
};

const handleBlur = () => {
  if (value < 100) {
    setValue(0);
  } else if (value > 100) {
    setValue(100);
  }
};




    const [progress,setProgress]=useState(100) 
    const handleSlide = newProgress => setProgress( newProgress );

    const next5=()=>{
        document.getElementById("p5").style.backgroundColor="#8b6ba3";
        document.getElementsByClassName("next4")[0].setAttribute('style', 'display:none !important');
        document.getElementsByClassName("next5")[0].setAttribute('style', 'display:flex !important');
    };
    const next4=()=>{
        document.getElementById("p4").style.backgroundColor="#8b6ba3";
        document.getElementsByClassName("next3")[0].setAttribute('style', 'display:none !important');
        document.getElementsByClassName("next4")[0].setAttribute('style', 'display:flex !important');
    };
    const next3=()=>{
        document.getElementById("p3").style.backgroundColor="#8b6ba3";
        document.getElementsByClassName("next2")[0].setAttribute('style', 'display:none !important');
        document.getElementsByClassName("next3")[0].setAttribute('style', 'display:flex !important');
    };
    const next2=()=>{
        document.getElementById("p2").style.backgroundColor="#8b6ba3";
        document.getElementsByClassName("next1")[0].setAttribute('style','display:none!important');
        document.getElementsByClassName("next2")[0].setAttribute('style', 'display:flex !important');
    };
    const next = () => {
        document.getElementById("p1").style.backgroundColor="#8b6ba3";
        document.getElementById("hide").style.display="none";
        document.getElementsByClassName("box1")[0].style.display="none";
        document.getElementsByClassName("box1 ml-3")[0].style.display="none";
        document.getElementsByClassName("box1 ml-3")[1].style.display="none";
        document.getElementsByClassName("box1 ml-3")[2].style.display="none";
        document.getElementsByClassName("next1")[0].setAttribute('style', 'display:flex !important');
        
    };
    const previous =()=>{
        document.getElementById("p1").style.backgroundColor="#dcdcdc";
        document.getElementsByClassName("next1")[0].setAttribute('style', 'display:none !important');
        document.getElementById("hide").style.display="block";
        document.getElementsByClassName("box1")[0].style.display="block";
        document.getElementsByClassName("box1 ml-3")[0].style.display="block";
        document.getElementsByClassName("box1 ml-3")[1].style.display="block";
        document.getElementsByClassName("box1 ml-3")[2].style.display="block";
    };
    const previous2=()=>{
        document.getElementById("p2").style.backgroundColor="#dcdcdc";
        document.getElementsByClassName("next2")[0].setAttribute('style', 'display:none !important');
        document.getElementsByClassName("next1")[0].setAttribute('style', 'display:flex !important');
    };
    const previous3=()=>{
        document.getElementById("p3").style.backgroundColor="#dcdcdc";
        document.getElementsByClassName("next3")[0].setAttribute('style', 'display:none !important');
        document.getElementsByClassName("next2")[0].setAttribute('style', 'display:flex !important');

    };
    const previous4=()=>{
        document.getElementById("p4").style.backgroundColor="#dcdcdc";
        document.getElementsByClassName("next4")[0].setAttribute('style', 'display:none !important');
        document.getElementsByClassName("next3")[0].setAttribute('style', 'display:flex !important');
    };
    const previous5=()=>{
        document.getElementById("p5").style.backgroundColor="#dcdcdc";
        document.getElementsByClassName("next5")[0].setAttribute('style', 'display:none !important');
        document.getElementsByClassName("next4")[0].setAttribute('style', 'display:flex !important');
    };
return (
    <>
 {/* <!-- section 4 starts here --> */}

<div class="container-fluid section4 ">
    <div className="column cc ">

        <div className="heading-portion">
            <h1>Debt Solution Finder</h1>
        </div>

        <div className="step-portion mt-4 ">
            <h3>Step 1 of 6</h3>
        </div>


          <div className="container mt-5 d-flex justify-content-center ">
          <ProgressBar>
  <ProgressBar         striped animated className="prog1" now={20} key={1} />
  <ProgressBar id="p1" striped animated className="prog2" now={15} key={2} />
  <ProgressBar id="p2" striped animated className="prog2" now={15} key={3} />
  <ProgressBar id="p3" striped animated className="prog2" now={15} key={4} />
  <ProgressBar id="p4" striped animated className="prog2" now={15} key={5} />
  <ProgressBar id="p5" striped animated className="prog2" now={20} key={6} />
</ProgressBar>
          </div>


        <div className="mt-5 steps" id="hide">
        <h3>Where do you live?</h3>
        </div>   

        <div className="row d-flex mt-5 hide2" >
            
            <div className="box1 bb" onClick={() => next()}>
                    <p><b><a >England</a></b></p>
            </div>

            <div className="box1 ml-3" onClick={() => next()}>
                    <p><b><a>Scotland</a></b></p>
                </div>

                <div className="box1 ml-3" onClick={() => next()}>
                        <p><b><a>Wales</a></b></p>
                </div>

                <div className="box1 ml-3" onClick={() => next()}>
                        <p><b><a>Norther Ireland</a></b></p>
                </div>
        </div>
        
    </div>
    {/* NEXT 3 */}
    <div className="next2 d-flex flex-column align-items-center" >
<div className="inside-england d-flex">

<i className="fa fa-chevron-circle-left icon movement-icon1"  onClick={()=> previous2()}></i>
<h5>What is the total value of your debt?</h5>

</div>

<div className="row d-flex mt-5">
            
            <div className="box1" onClick={()=>next3()}>
                    <p><b><a>England</a></b></p>
            </div>

            <div className="box1 ml-3" onClick={()=>next3()}>
                    <p><b><a>Scotland</a></b></p>
                </div>

                <div className="box1 ml-3" onClick={()=>next3()}>
                        <p><b><a>Wales</a></b></p>
                </div>
                
        </div>




    </div>

{/* Range slider */}
<div className="next1 d-flex flex-column align-items-center" >
<div className="d-flex justify-content-around">
<i className="fa fa-chevron-circle-left icon movement-icon1" onClick={()=> previous()}></i><h5>What is the total value of your debt?</h5>
</div>

<div className="row d-flex justify-content-center">

<div className="container justify-content-center">
            
            <div className="d-flex flex-column align-items-center slider ml-5 mt-2">     
            {/* <div>{`$${progress}`}</div>
            <MultiSlider
                width={600}
                height={25}
                slidableZoneSize={40}
                backgroundColor="#dcdcdc"
                equalColor="#8b6ba3"
                style={{marginBottom: 40}}
                onSlide={handleSlide}
                onDragStart={progress => console.log(`Started dragging: ${progress}%`)}
                onDragStop={progress => console.log(`Stopped dragging: ${progress}%`)}
                
                
                > 
                <Progress  progress={progress}>
                <Dot color="blue"  style={{height:"120px",width:"60px"}}/>
                </Progress>


                {/* <Progress color="purple" progress={45}>
                <Dot color="grey" />
                </Progress> 
            </MultiSlider> 
            */}
{/* Rnage New Slider */}

<div className={classes.root}>
      
      {/* <div className="input d-flex justify-content-around">
      <Grid item>
          <Input
            className={classes.input}
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 100,
              min: 0,
              max: 100,
              type: 'number',
            }}
          />
        </Grid>
      </div> */}


      <Grid container spacing={2} alignItems="center" >
        <Grid item xs >
          <Slider 
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>

      </Grid>
    
    </div>



            </div>
            
    </div>

    <section className="mt-5">
                      <div className="animated infinite pulse button-section2-move1 clip-div1 d-flex" id="clip-div1">
                          <button className="btn btn-purple btn-ndh  scroll_btn pulse clip1" id="clip1" onClick={() => next2()}><p class="button-text1">NEXT</p> </button>
                          <i className="fa fa-chevron-circle-right icon movement-icon1"></i>
                      </div>
                      </section> 



  </div>
</div>

{/* NEXT 4 */}
<div className="next3 d-flex flex-column align-items-center" >
<div className="d-flex justify-content-around">
<i className="fa fa-chevron-circle-left icon movement-icon1" onClick={()=> previous3()}></i><h5>What is the total value of your debt?</h5>
</div>

<div className="row d-flex mt-5">
            
            <div className="box1" onClick={()=>next4()}>
                    <p><b><a>England</a></b></p>
            </div>

            <div className="box1 ml-3" onClick={()=>next4()}>
                    <p><b><a>Scotland</a></b></p>
                </div>

                <div className="box1 ml-3" onClick={()=>next4()}>
                        <p><b><a>Wales</a></b></p>
                </div>
                <div className="box1 ml-3" onClick={()=>next4()}>
                        <p><b><a>Manchester</a></b></p>
                </div>
        </div>




    </div>

{/* SECOND Range slider */}
<div className="next4 d-flex flex-column align-items-center" >
<div className="d-flex justify-content-around">
<i className="fa fa-chevron-circle-left icon movement-icon1" onClick={()=> previous4()}></i><h5>What is the total value of your debt?</h5>
</div>

<div className="row d-flex justify-content-center">

<div className="container justify-content-center">
            
            <div className="d-flex flex-column align-items-center slider ml-5 mt-2">     
            {/* Rnage New Slider */}

<div className={classes.root}>
      
      {/* <div className="input d-flex justify-content-around">
      <Grid item>
          <Input
            className={classes.input}
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 100,
              min: 500,
              max: 1000,
              type: 'number',
            }}
          />
        </Grid>
      </div> */}


      <Grid container spacing={2} alignItems="center" >
        <Grid item xs >
          <Slider 
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>

      
      </Grid>
    
    </div>
            </div>
            
    </div>

    <section className="mt-5">
                      <div className="animated infinite pulse button-section2-move1 clip-div1 d-flex" id="clip-div1">
                          <button className="btn btn-purple btn-ndh  scroll_btn pulse clip1" id="clip1" onClick={() => next5()}><p class="button-text1">NEXT</p> </button>
                          <i className="fa fa-chevron-circle-right icon movement-icon1"></i>
                      </div>
                      </section> 



  </div>
</div>

{/* NEXT 5 */}
<div className="next5 d-flex flex-column align-items-center" >
<div className="d-flex justify-content-around">
<i className="fa fa-chevron-circle-left icon movement-icon1" onClick={()=> previous5()}></i><h5>What is the total value of your debt?</h5>
</div>

<div className="row d-flex mt-5">
            
<form className="d-flex flex-column align-items-center">
            
            <div className="d-flex flex-column inputs">
            <input className="inputall" placeholder="First name" />
            <input className="inputall mt-2" placeholder="Last name"/>
            <input className="inputall mt-2" placeholder="Email" />
            <input className="inputall mt-2" placeholder="Mobile"/>
            
            <div className="checkbox d-flex mt-1">
              <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox"/>
              </Form.Group>
             <p className="ml-3 para-input">I accept the <span className="span2">Privacy Policy</span> and <span className="span2">Terms & Conditions.</span></p>
           
            </div>
            
            </div>
            <section>
                      <div className="animated infinite pulse button-section2-move1 clip-div1 d-flex" id="clip-div1">
                          <button className="btn btn-purple btn-ndh  scroll_btn pulse clip1" id="clip1" onClick={() => next5()}><p class="button-text1">NEXT</p> </button>
                          <i className="fa fa-chevron-circle-right icon movement-icon1"></i>
                      </div>
                      </section> 
        </form>

           
        </div>




    </div>

</div>
<Style/>

    </>
);

}