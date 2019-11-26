import React from 'react'
export default()=>(
    <style js="true">{
        `

        a:hover {
            text-decoration: none;
        }

        i.fa.fa-chevron-circle-right.icon.movement-icon {
            margin-top: 7px;
        }

        .data{
        
            width: 656px;
            height: 500px;
            // background: rgb(243, 127, 0,0.5);
        }
        .data h1 {
            color: white;
            font-size: 58px;
            line-height: 42px;
            padding-top: 5%;
            margin-left: 8%;
            font-weight: 500;
        }
        .data h5 {
            margin-top: 11px!important;
            font-size: 32px;
            font-weight: 400;
            color: #f5f5f5;
            margin-left: 8%;
        }
        .data ul {
            list-style: none;
            padding: 0px;
            padding-left: 11px;
            margin-top: 22px!important;
        }
        .li{
            margin-top: -17px;
        }
        .data ul li span {
            border: 2px solid #006a90;
            border-radius: 90px;
            -webkit-border-radius: 90px;
            -moz-border-radius: 90px;
            display: block;
            font-size: 30px;
            font-weight: bold;
            height: 40px;
            line-height: 36px;
            text-align: center;
            width: 40px;
            position: absolute;
            /* left: 0; */
            color: #fff;
            background: #006a90;
        }
        .data ul li {
            display: block;
            color: #f5f5f5;
            font-size: 20px;
            font-weight: 500;
            min-height: 36px;
            line-height: 36px;
            padding: 0px 0 6px 40px;
            position: relative;
        }
        .form{
            padding-top: 17%;
            padding-left: 10%;
        }
        .one{
            padding-top: -0.5%;
        }
        .data ul li p{
            font-size: 25px;
        
        } 
        .data ul li p{
            margin-left: 5px!important;
            font-size: 25px;
            font-weight: 500;
        }
        .clip{
            background-color:  #f37f00 !important;    
            clip-path: polygon(0% 0%, 75% 0%, 90% 59%, 100% 100%, 0% 100%);
            width: 100%;
        
        }
        .clip-div{
            width: 400px;
            background-color: #006a90 ;
            cursor: pointer;
            border-radius: 3px;
        
        }
        .clip-div:hover .clip{
            background-color:#DC7300!important;
            clip-path: polygon(0% 0%, 67% 0, 81% 61%, 88% 100%, 0% 100%);
            transition: clip-path 1s;
            transition-timing-function: ease-in-out;    
        }
        .clip-div:hover{
            background-color:#006a90;
            
        }
        .icon{
        color:rgba(137, 27, 132, 1) ;
        
        }
        .clip-div:hover .icon{
            color:#006a90;
        }
        .button-section2-move{
            margin-left: 11%;
            height: 65px;
            width: 330px;
        }
      
        .button-section2-move p{
            padding-left: 11%;
            padding-top: 8px;
        }

        .movement-icon{
            margin-right: 20px;
            margin-top: 14px;
            
        }
        i.fa.fa-chevron-circle-right.icon.movement-icon {
            margin-top: 19px;
            color: #f37f00!important;
        }
        i.fa {
            color: #fff;
            font-size: 32px;
        }
        


        img.smallIcon {
            width: 40px;
            height: 41px;
        }
        .second-paragraph-of-icon {
            margin-top: 7px;
        }
        .third-paragraph-of-icon {
            margin-top: 7px;
        }
        .button-section3-header {
            height: 53px!important;
            width: 200px!important;
            margin-top:40px!important;
            font-size:28px;
        }
        button#clip-div2 {
            background-image: linear-gradient(#F37F00, #fdb05b);
            border: #e67c00;
            margin-left: 62px;
            margin-top: -14px!important;
            border-radius: 37px;
            width: 285px!important;
            height: 60px!important;
            
        }
        .button-header-text2 {
            padding-left: 15px;
            margin-top: 2px;
            color: white;
            font-size: 18px;
        }

        `
    }

    </style>
);