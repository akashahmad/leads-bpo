import React from 'react'
export default()=>(
    <style js="true">{
        `

        /* --------------------------------- */
        /* section 9 starts here */
        
        // .footer{
        //     background-image: url(../assect/images/gplay.png);
        //     background-repeat: 100%;
            
        //     height: 500px;
        //     background-color: #202020;
        // }
        .footer{
        background-color:#616569;
        }
        .footer-div1{
            display: flex;
            flex-direction: column;
            align-items: center;
            color: white;

        }
        .footer-div1 a{
            color: #006a90;
            text-decoration: underline;
        }
        .footer-div1 a:hover{
            color: #006a90;
            text-decoration: underline;
        }
        .footer-div2{
            font-size: 16px;
            font-weight: normal;
            color: #fff;
            text-align: center;
            width: 66%;
            
        }
        .footer-ul li:first-child {
            border-left: none;
        }
        .footer-ul li{
            display: inline-block;
            padding: 0 4px;
            border-left: 1px solid #fff;
            line-height: 13px;
        }
        


        `
    }

    </style>
);