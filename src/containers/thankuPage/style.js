import React from 'react'

export default ()=>{
    return(
        <style>
            {`

.thankuPage.container {
    margin: 0 auto;
    max-width: 1500px;
    width: 90%;
}
.thankuPage .twelve{
    background: #F4F4F4;
    padding: 40px;
    margin:50px;
}
.twelve.columns >h3 {
    font-size: 60px!important;
    font-weight: 700;
    color: #8a108ba8!important;
    margin: 0 0 10px 0;
    padding: 0;
    line-height: 1.1;
}
.twelve.columns >strong >p{
  font-size: 30px!important;
    line-height: 67px;
    overflow-wrap: break-word;
}

.thankuPage .twelve.columns>p.leads {
    line-height: 67px;
    overflow-wrap: break-word;
     font-size: 30px!important;
}
            `}
        </style>
    );
}