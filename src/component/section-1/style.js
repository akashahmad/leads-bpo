import React from 'react'
export default()=>(
    <style js="true">{
        `

        a:hover {
            /* color: #0056b3; */
            text-decoration: none;
        }

        i.fa.fa-chevron-circle-right.icon.movement-icon {
            margin-top: 7px;
        }
        /* section 2 */

        // .image{
        //     background-image:url(../assect/images/hero-banner-bg.jpg);
        //     height: 80vh;
        //     background-repeat: no-repeat;
        //     background-size: cover;
        // }
        .data{
        
            width: 500px;
            height: 500px;
            background:rgb(0, 0, 0);
            background:rgba(0, 0, 0,0.8);
        }
        .data h1{
            font-size: 42px;
            line-height: 42px;
            font-weight: 700;
            color: #8a1082;
            padding-top: 5%;
            margin-left: 8%;
            
        }
        .data h5{
            font-size: 35px;
            font-weight: normal;
            color: #f5f5f5;
            margin-left: 8%;
        }
        .data ul{
            list-style: none;
            padding: 0px;
        }
        .data ul li span {
            border: 2px solid #8b6ba3;
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
            background: #8b6ba3;
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
            padding-top: 7%;
            padding-left: 10%;
        }
        .one{
            padding-top: 1.5%;
        }
        .data ul li p{
            font-size: 25px;
        
        } 
        .clip{
            background-color:  #8b6ba3 !important;    
            clip-path: polygon(0% 0%, 75% 0%, 90% 59%, 100% 100%, 0% 100%);
            width: 100%;
        
        }
        .clip-div{
            width: 400px;
            background-color: #9c81b1 ;
            cursor: pointer;
            border-radius: 3px;
        
        }
        .clip-div:hover .clip{
            background-color:rgba(137, 27, 132, 1) !important;
            clip-path: polygon(0% 0%, 67% 0, 81% 61%, 88% 100%, 0% 100%);
            transition: clip-path 1s;
            transition-timing-function: ease-in-out;    
        }
        .clip-div:hover{
            background-color: rgba(154, 52, 148, 1);
            
        }
        .icon{
        color:rgba(137, 27, 132, 1) ;
        
        }
        .clip-div:hover .icon{
            color: rgba(25, 181, 154, 1);
        }
        .button-section2-move{
            margin-left: 11%;
            height: 65px;
            width: 330px;
        }
      
        .button-section2-move p{
            padding-left: 21%;
        }

        .movement-icon{
            margin-right: 20px;
            margin-top: 14px;
            
        }
        i.fa {
            color: #fff;
            font-size: 32px;
        }
        /* section 2 ends here  */
        /* --------------------------- */


        `
    }

    </style>
);