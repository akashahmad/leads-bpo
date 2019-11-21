import React from 'react'
export default()=>(
    <style js="true">{
        `
        .progress{
            height:30px;
            width:60%;
        }
        .prog1{
            background-color:#8b6ba3!important;
            border-radius:10px;
        }
        .prog2{
            background-color:#dcdcdc;
            border-radius:10px;
        }
        
        .next2,.next3,.next4,.next5{
            display:none!important;
    
        }
        .next1.d-flex.flex-column.align-items-center{
            display:none!important;
        }


        .icon{
            color:rgba(137, 27, 132, 1)!important ;
            
        }
        .cc{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top:5%;
        }
        .cc h1{
            font-size: 50px;
            color: #8b6ba3;
        }
        .step-portion h3{
            font-size:35px;
        }
        .box1{
            width: 260px;
            text-align: center;
            background:#006a90;
            height: 150px;
            border-radius: 5px;
            transition: background 0.5s;
            transition-timing-function: ease-in-out;
        }
        .box1:hover{
            
            background-color: #8b6ba3;
        }
        .box1 p{
            
            font-size: 25px;
            padding-top: 23%;
            color: white;
        }
        .steps h3{
            color: #8b6ba3;
            font-size:33px;

        }
        
        
        /* section 4 ends here */
        
        /* section 4 Range Slider */
        .multislidergreen{
            height: 40px;
            border-radius: 30px;
        }
        .multisliderpurple{
            height: 40px;
            border-radius: 30px;
        }
        .multislider{
            height: 40px;
            border-radius: 30px;
        }
    
        Dot{
            height:30px;
        }

        /* section 4 FORM */

        .inputs {
            display: flex;
            align-items: center;
            padding-top: 1%;
            
        }
        i.fa.fa-chevron-circle-left.icon.movement-icon1 {
             margin-top: -2px; 
        }

        .inputall {
         padding-left:3px;
         height: 60px;
         background: #ecf0f2 none repeat scroll 0 0;
         border: 1px solid #ecf0f2;
         width:500px;
         border-radius: 3px;
        }
        .para-input{
            font-weight: bold;    
                font-size: 19px;
            
        }
        .span2{
            font-weight: bold;
            text-decoration: underline;
            color: #8a1082;
        }
        input#formBasicCheckbox {
            width: 30px;
            height: 20px;
        }

// Range New Slider



span.MuiSlider-rail {
    height: 30px;
    padding-top:10px;
    
}
span.MuiSlider-track {
    height: 30px;
    background: #8a1082;
    border-radius:5px;
    
}
span.MuiSlider-thumbColorPrimary {
    color: purple!important;
    width: 40px;
    height: 40px;
   
}



        `
    }

    </style>
);