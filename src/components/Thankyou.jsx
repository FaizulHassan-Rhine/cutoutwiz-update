import React, { Component } from "react";
import {Helmet} from "react-helmet";

 function Thankyou(props) {

    return(
        <div className="postphoto"style={{backgroundColor:"#c5da9c"}}>
             <Helmet>
                <style>{'body { background-color: #c5da9c; }'}</style>
                <meta name="robots" content="noindex"></meta>
            </Helmet>

            <div className="row">
                <p style={{fontWeight:"700",fontSize:"100px",marginTop:"4%",color:"black",textAlign:"center"}}>Thank You</p>
                <p className="text-center"style={{fontSize:"25px",color:"black"}}>Thank you for getting in touch.
                 One of our team members will reach<br/> out to you within the shortest possible time.
                  If you need project<br/> assistance, you can contact us at:<br/><br/><u>info@thekowcompany.com</u></p>
            </div>
        </div>
        );

    }
   
    export default Thankyou;