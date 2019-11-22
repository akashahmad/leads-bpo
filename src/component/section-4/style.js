import React from 'react'
export default()=>(
    <style js="true">{
        `

        /* section 5 starts here */
        
        .left-side-section5 h2{
            color: #006a90;
            font-size: 29px;
            font-weight: 800px;
            line-height: 40px;
        
        }
        .left-side-section5 p{
            font-size: 18px;
            font-weight: 400;
            line-height: 30px;
            padding: 0 0 40px;
        }
        
        
        .clip1{
            background-color:  #F37F00 !important;    
            clip-path: polygon(0% 0%, 75% 0%, 89% 58%, 100% 100%, 0% 100%);
            width: 100%;
        }
        .clip-div1{
            width: 400px;
            background-color: #F5CC00;
            cursor: pointer;
            border-radius: 3px;
        }
        .clip-div1:hover .clip1{
            background-color:#DC7300!important;
            clip-path: polygon(0% 0%, 67% 0, 82% 63%, 90% 100%, 0% 100%);
            transition: clip-path 2s;
            transition-timing-function: ease-in-out;
        }
        .clip-div1:hover{
            background-color:#FFB300;
        }
        .icon1{
        color:#006a90;
        
        }
        .clip-div1:hover .icon{
            color: rgba(25, 181, 154, 1);
        }
        .button-section2-move1{
            margin-left: 3%;
            height: 63px;
            width: 400px;
        }
        .button-text1{
            margin-left: -70px;
            color: white;
            font-size: 16px;
            margin-top: 5px;
        }
        .movement-icon1{
            margin-right: 20px;
            margin-top: 14px;
            color: #f37f00!important;
           
            
        }
        
        .section5{
            background: gainsboro;
        
        }
        .dd{
            width: 500px;
            display: flex;
            justify-content: space-between;
        }
        .table-section-5{
            background: white;
            border-right:  1px solid #f37f00;
            border-top:  1px solid #f37f00;
            border-bottom:  1px solid #f37f00;
        }
        .table-section-5{
            width: 500px;
            margin-left: 110px;
        }
        .section5-paragraph-all p {
            display: block;
            font-size: 21px;
            font-weight: 400;
        }
        .section5-heading-all 
        {
                border-left: white;
                color: #333;
                background: #f4f4f4;
        }
        .section5-heading-all h6{
            font-size: 22px;
            font-weight: bold;
        }
        .section5-heading-all h5
        {
            font-size: 22px;
        
        }
        .border1, .border2,  .border4 ,  .border6{
            border-left:1px solid #f37f00;
            
            
        }
        
        /* ---------------------------------- */	
    
  

        `
    }

    </style>
);