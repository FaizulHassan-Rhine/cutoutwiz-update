import React, { Component } from "react";
 
 

function Footerfr() {
    return (
<div className="footer"style={{backgroundColor:"#231f20"}}>
<div className="container">
<div className="row">
<div className="col-md-3"style={{marginTop:"4%"}}>
<img src="assets/images/ailogo.png"style={{marginTop:"3%"}} width="190" height="40" alt=""/>

<p style={{textAlign:"justify",color:"white",marginTop:"4%"}}>The KOW Company is one of the leading image and video editing company for businesses all over the world.</p>
<a href="https://www.facebook.com/KOWCompany"target="_blank" className="fa fa-facebook"></a>
<a href="https://twitter.com/the_kow_company"target="_blank" className="fa fa-twitter"></a>
<a href="https://www.linkedin.com/company/the-kow-company/"target="_blank" className="fa fa-linkedin"></a>
<a href="https://www.youtube.com/channel/UCCXAA-Q_f0uuvG8RqW0HRYQ"target="_blank" className="fa fa-youtube"></a>
{/* <a href="https://www.instagram.com/accounts/login/"target="_blank" className="fa fa-instagram"></a> */}
</div>

    <div className="col-6 col-md-2"style={{marginTop:"5%"}}>
        <b style={{color:"white",fontSize:"20px"}}>Menu</b>

        <p style={{color:"#b7b9bb",marginTop:"8%"}}>
        Home <br/>
        Features<br/>
        Services<br/>
        Pricing<br/>
        Blogs
        </p>
    </div>

    <div className="col-6 col-md-2"style={{marginTop:"5%"}}>
    <b style={{color:"white",fontSize:"20px"}}>Features</b>
        <p style={{color:"white",marginTop:"8%"}}>
        Shoppify App <br/>
        AmazonSPN<br/>
        Cutoutwiz<br/>
        BigCommerce App<br/>
        Shotflow
        </p>
    </div>

    <div className="col-6 col-md-2"style={{marginTop:"5%"}}>
    <b style={{color:"white",fontSize:"20px"}}>Useful Links</b>

      <p style={{color:"white",marginTop:"8%"}}>
      Privacy Policy <br/>
      Terms & Condition<br/>
      Contact Us<br/>
      Sign Up<br/>
      </p>
    </div>     


  <div className="col-6 col-md-3"style={{marginTop:"5%"}}>
  <b style={{color:"white",fontSize:"20px"}}>Our Address</b> <br/>   <br/>
  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10329.283883735325!2d90.39304891556642!3d23.749043274767246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc1fb12dbea63beca!2sCutOutWiz!5e0!3m2!1sbn!2sbd!4v1639129804206!5m2!1sbn!2sbd"
  width="70%" height="50%" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>

  </div>
  
  </div> 
</div>
<p style={{textAlign:"center",color:"white",padding:"8px",backgroundColor:"black"}}>Designed & Developed By The KOW Company</p>
</div>
    );
}

export default Footerfr;