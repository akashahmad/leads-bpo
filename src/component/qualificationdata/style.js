import React from 'react'

export default ()=>{
    return(
        <style js="true">
            {`
            .container-all{
                
                box-shadow: 0 0 10px;
            }
            .row.section1-row.d-flex.justify-content-around {
                box-shadow: 0px 0px 5px;
            }
            .section2
            {
             
            }
            .row.space-between {
                display: flex;
                justify-content: space-around;
                padding-bottom: 1%;
            }
            button.around-button{
                border-radius: 30px;
                width: 180px;
                font-size: 14px;
                font-family: Heebo, sans-serif, fontawesome;
                color: #fff;
                background: #8a1082;
                padding: 10px 20px 10px 20px;
                border: 0 solid #fdc037;
                margin: 25px 0;
                /* height: 30px; */
            }
            .chat1-inside-data {
                height: 95px;
                background: #e7efff;
                border-radius: 180px;
                max-width: 700px;
                height: 130px;
                text-align: start;
                padding: 10px;
                line-height: 30px;
                font-size:20px;
            }
                
            .chat1 {
                padding-left: 3%;
                padding-top: 2%;
                

            }
            .Loader {
                padding-left: 3%;
                width: 180px;
                height: 80px;
                background: #e7efff;
                border-radius: 50px;
            }
            .chat-input-data {
                float: right;
                background: purple;
                max-width: 800px;
                height: 120px;
                border-radius: 55px;
                
            }
            p.p {
                float: left;
                padding-top: 6%;
                font-size: 22px;
                margin-left: 16px;
            }
            .input{
                height: 70px;
                border-radius: 7px;
                background: #e7efff;
                font-size: 22px;
                width: 300px;
                padding-left: 6px;
            }
            .button{
                margin-right: 12px;
                margin-bottom: 10px;
                border-radius: 10px;
                width: 100px;
                height: 70px;
            }

            .chat-input {
                padding-bottom: 127px;
            }

            .chat-input2 {
                padding-bottom: 127px;
            }
            .chat-input-data2 {
                background: purple;
                float: right;
                border-radius: 10px;
                max-width: 800px;
                height: 120px;
                border-radius: 55px;
            }
            .chat-input-data2 .btn{
                border-radius: 10px;
                width: 100px;
                height: 70px;
                margin-top: 20px;
                margin-right: 25px;
            
            }
            `}
        </style>
    );
}