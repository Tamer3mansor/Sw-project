import "../css/txt.css";
const Text = () =>
{
    return <div >
        <div className="container" id="cont">
        <div className="row justify-content-md-center">
        <div className="col">
        <br></br>
            <h1> Welcome to Flight Booking App</h1>
        </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col">
            <br></br> <br></br>
           <a href="http://localhost:3000/Registr" target="-blank">
          <button class="learn-more" onclick="" >
          <span class="circle" aria-hidden="true">
         <span class="icon arrow"></span>
         </span>
  <span class="button-text">Get Start Here</span>
</button>            
</a>
          </div>
        </div>
      </div>
     </div>
}
export default Text;

