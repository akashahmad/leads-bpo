import React from 'react'

export default ()=>{
    return(
        <style js="true">{`
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
            background-color: #8a1082;
        }
        .center {
            display: flex;
            align-items:center;
            justify-content: space-around;
            padding-top: 2%;
        }
        .collapse-first{
            
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