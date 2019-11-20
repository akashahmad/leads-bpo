import React from 'react'

export default()=>{
    return(
        <style>
            {`
            .form-background{
                background-color: #eee;
                height:100vh;
            }
            input {
                width: 500px;
                font-size: 20px;
                background: white;
                height: 44px;
                padding-left: 10px;
            }
            label {
                margin-top: 15px;
                font-size: 26px;
                font-weight: 600;
            }
            .form-data {
                background-color: #fff;
                box-shadow: 0 0 2px;
                width: 1150px;
                margin-left: 12%;
            }
            h1 {
                text-align: center;
            }
            input.postbody {
                width: 1018px;
                height: 150px;
            }   
            button {
                margin-top: 3%;
                width: 140px;
                height: 60px;
                margin-bottom: 2%;
                background: black;
                color: white;
                border-radius: 10px;
                height: 90px;
                width: 200px;
                font-size: 25px;
                
            }         
            .column.from-body {
                padding-top: 2%;
            }

            `}

        </style>

    );
}