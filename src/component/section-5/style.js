import React from 'react'

export default ()=>{
    return(
        <style js="true">{`

        .sect5 h1{
            color:#006a90;
        }


        .collapsible-container{
            box-shadow: 0px 0px 5px;
        }
        .img{
            height:30px;
        }

        .CollapsibleComponent {
            width: 900px;
            padding-top: 4%;
        }
        button.accordion-head.additionalClassForHead {
         
        }
        .accordion-head {
            background-color:#f37f00;
        }
        .center {
            display: flex;
            align-items:center;
            justify-content: space-around;
            padding-top: 2%;
        }
       
        .button-text1{
            padding-left:2%;
        }
        .collapse-first {
            display: flex;
            flex-direction: column;
        }
        .debt-inside-span {
            font-size: 18px;
        }
        .collapse-image-heading-row{
            display: flex;
            justify-content: space-between;
        }
        `}
        </style>
    );
}