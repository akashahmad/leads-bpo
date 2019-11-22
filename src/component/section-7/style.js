import React from 'react'

export default()=>(
    <style js="true">{
        `

        /* section 8 */

      
        .first-para{
            color: #006a90; 
            font-size: 22px;
            font-weight: 400;
        }
        .second-para{
            font-size: 20px;
            color: white;
            font-weight: 400;
            margin-top: -10px;
        }
        .heading-section8{
            color: #006a90;
        }
        .last-heading-h5{
            color: white;
            font-weight: 500px;
            font-size: 40px;
        }
        
        
        .clip2{
            background-color:#F37F00!important;    
            clip-path: polygon(0% 0%, 81% 0, 92% 56%, 100% 100%, 0% 100%);
            width: 100%;
        }
        .clip-div2{
            width: 400px;
            background-color:#F5CC00;
            cursor: pointer;
            border-radius: 3px;
        }
        .clip-div2:hover .clip2{
            background-color: #DC7300important;
            clip-path: polygon(0% 0%, 63% 1%, 81% 58%, 93% 100%, 0% 100%);
            transition: clip-path 1s;
            transition-timing-function: ease-in-out;
        }
        .clip-div2:hover{
            background-color:#FFB300;
        }
        .icon2{
        color:#F37F00!important;
        
        }
        .clip-div2:hover .icon{
            /* color: rgba(25, 181, 154, 1); */
        }
        .button-section2-move2{
            margin-left: 5%;
            height: 65px;
            width: 330px;
        }
        .button-text2{
            margin-left: -50px;
            color: white;
            font-size: 16px;
            margin-top: 5px;
        }
        .movement-icon2{
            margin-right: 20px;
            margin-top: 14px;
           
        }
        i.fa.fa-chevron-circle-right.icon.movement-icon2 {
            color: #f37f00!important;
        }
        
        
        /* --------------------------------- */

        `
    }

    </style>
);