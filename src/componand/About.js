import React from 'react';
import  '../css/about_css.css';
import header from '../imge/imge2.png';
import man from '../imge/man.png'
import women from '../imge/women.jpg'
import '../css/all.min.css'


const About=() =>{
    return <div>
<div className="container" id="About_container">
  {/* ******************Start first Section**************************************** */}
 <div className="row justify-content-md-center">
    <div className="col" id="First">
     <h1> Traveling fast, comfortable or smart? </h1>
      <br></br>
     <h2> Welcome to SHASTA "Travel Faster, Travel Smart"</h2>  <br></br>
     <img src={header} alt="Image"></img>
<p>SHASTA is a company specialized in domestic flights, established in 1975.</p>
<p>Our motto is travel smart, travel fast,</p>
<p> We have more than 45 years of experience of domestic transportation flights between different governorates.</p>
<p>We always strive to provide the traveler with complete comfort, </p>
    <p>from booking the ticket until he reaches his next destination</p> 
  </div>
 </div>
 
 <div className="row justify-content-md-center">
    <div className="col" id="Second">
    <div className="row justify-content-md-center">
    <p id='fst'> We tried to provide quick ways for reservations and inquiries</p> 
   <p>So we launched our website, where it provides many features for the user :</p>
   </div>
   <div className="row justify-content-md-center">
    <div className="col-2">
        <div className='card'>
        <i class="fa-solid fa-magnifying-glass"></i>
      <p>Search the available flights, set the date and specify the details of the trip  TWO or One way without the need to contact customer service</p>
        </div>
        
        </div>
        <div className="col-2">
        </div>
        <div className="col-3">
        <div className='card'>
        <i class="fa-solid fa-clipboard-check"></i>
         <p> Book your ticket Easily use the card to pay Without the need to go to the airport for reservations</p>
        </div>
        </div>
        <div className="col-1">
        </div>
        <div className="col-3">
        <div className='card'>
        <i class="fa-solid fa-forward-fast"></i>
        <p> Just <br></br>>>register <br></br>>> choose <br></br>>> book <br></br>>> travel</p>
        </div>
        </div>
        </div>
     <p></p>

  </div>
 </div>
 <div className="row justify-content-md-center">
    <div className="col" id="Contact_us">
    <a href="mailto:tamermansor371@gmail.com"><i class="fa-solid fa-envelope"></i></a> <br></br>
 <a href="https://www.facebook.com/profile.php?id=100004248341053"><i class="fa-brands fa-facebook"></i></a>
                                        <br></br>
<a href="https://github.com/"><i class="fa-brands fa-github"></i></a>
         </div>
        </div>
        
 <div className='col' id='employee'>
 <div className="row justify-content-md-center">
   <div className='col'>
     <br></br>
   <h2 id='emp_text'>Our team</h2>
   <br></br>

   </div> 
</div>
<div className="row justify-content-md-center">
    <div className="col-3">
  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={women} alt="employee" className='employe_imge'></img>
      {/* <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;"> */}
    </div>
    <div class="flip-card-back">
      <br></br>      <br></br>
      <h1>Shrouk Yaser</h1>
      <h3>Sectoin 3</h3>
    </div>
  </div>
</div>
</div>
<div className="col-1"></div>
<div className="col-3">
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <img src={women} alt="employee" className='employe_imge'></img>
      {/* <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;"> */}
    </div>
    <div class="flip-card-back">
    <br></br>      <br></br>
      <h1>Habiba Hosam</h1>
      <h3>Sectoin 2</h3>
    </div>
  </div>
</div>
</div>
<div className="col-1">
        </div>
 <div className="col-3">
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <img src={women} alt="employee" className='employe_imge'></img>
      {/* <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;"> */}
    </div>
    <div class="flip-card-back">
    <br></br>      <br></br>
      <h1>Shams Kamel</h1>
      <h3>Sectoin 3</h3>
    </div>
  </div>
</div>
  </div>
 </div>
 {/* Second row  */}
 <div className="row justify-content-md-center">
    <div className="col-4">
  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <img src={man} alt="employee" className='employe_imge'></img>
      {/* <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;"> */}
    </div>
    <div class="flip-card-back">
      <br></br>      <br></br>
      <h1>AbdelRahman 3arfa</h1>
      <h3>Sectoin 3</h3>
    </div>
  </div>
</div>
</div>
<div className="col-2"></div>
<div className="col-4">
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    {/* <i class="fa-solid fa-person" ></i> */}
            <img src={man} alt="employee" className='employe_imge'></img>
      {/* <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;"> */}
    </div>
    <div class="flip-card-back">
    <br></br>      <br></br>
      <h1>Tamer Medhat </h1>
      <h3>Sectoin 2</h3>
    </div>
  </div>
</div>
</div>
 </div>
</div>

</div>
</div>

}
export default About