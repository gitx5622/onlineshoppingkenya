import React from 'react'

export default function Footer() {
    return (
        <div>
                   
<footer className="container-fluid bg-grey py-5">
<div className="container">
   <div className="row">
      <div className="col-md-6">
         <div className="row">
            <div className="col-md-6 ">
               <div className="logo-part">
                  <h1><strong>O N L I N E <br></br>Shopping</strong></h1><br/>
                  <div className="row ">
                  <div className="col-md-2">
                  <i class="fa fa-envelope-o fa-2x" aria-hidden="true"></i>
                  </div>
                  <div className="col-md-10">
                  <p>sales@onlineshoppingkenya</p>
                  </div>
               </div>  
               </div>
            </div>
            <div className="col-md-6 px-4">
               <h6><b>ABOUT COMPANY</b> </h6>
               <p>Designing and building classic UI for Ecommerce</p>
               <a href="/login" className="btn-footer"> Contact Us</a>
            </div>
         </div>
      </div>
      <div className="col-md-6">
         <div className="row">
            <div className="col-md-6 px-4">
               <h6> <b>CONTACT US</b></h6>
               <div className="row ">
                  <div className="col-md-4">
                  <i class="fa fa-phone fa-3x" aria-hidden="true"></i><br/>
                  <i class="fa fa-map-marker fa-3x" aria-hidden="true"></i>
                  </div>
                  <div className="col-md-8">
                  <p>+254741790736</p>
                  <p>+254792588607</p>
                  <p>Kasarani - ClayWorks, Nairobi</p>
                  </div>
               </div>
            </div>
            <div className="col-md-6 ">
               <h6><b> NEWSLETTER</b></h6>
               <div className="social-item">
                  <a href="/login"><i className="fa fa-facebook fa-2x" aria-hidden="true"></i>.</a>
                  <a href="/login"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i>.</a>
                  <a href="/login"><i class="fa fa-twitter-square fa-2x" aria-hidden="true"></i>.</a>
                  <a href="/login"><i class="fa fa-google fa-2x" aria-hidden="true"></i>.</a>
               </div>
               <form className="form-footer my-3">
                  <input type="text"  placeholder="search here...." name="search"/>
                  <input type="button" value="Go"/>
               </form>
               <p>That's technology of ONLINESHOPPING</p>
            </div>
         </div>
      </div>
   </div>
</div>
</footer>
        </div>
    )
}
