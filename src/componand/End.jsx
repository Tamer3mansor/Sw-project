import React, {useState} from 'react';
import {  useRecoilState } from 'recoil';
import { emailatom, firstNameatom, lastNameatom  } from '../Atom';
import '../css/style.css'
function End() {
   
    const [firstName] = useRecoilState(firstNameatom);
    const [lastName] = useRecoilState(lastNameatom);
    const [email] = useRecoilState(emailatom);
    const [credit] = useState(null);
  function vd()
  {
      console.log(firstName , lastName ,credit ,email);
  }
    return(
        <div>
        <div className="messages">

</div>
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="firstName">First Name </label>
                    <input className="form__input" type="text" value={firstName} id="firstName" placeholder="First Name" defaultValue={firstName}/>
                </div>
                <div className="lastname">
                    <label className="form__label" for="lastName">Last Name </label>
                    <input  type="text" name="" id="lastName" value={lastName}  className="form__input"  placeholder="LastName" defaultValue={lastName}/>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" value={email} placeholder="Email" defaultValue={email}/>
                </div>
                <div className="password">
                    <label className="form__label" for="card">Card </label>
                    <input className="form__input" type="text"  id="credit"   placeholder="Credit Card "/>
                </div>
            </div>
            <div class="footer">
                <button  type="submit" class="btn" onClick={vd}>Confirm</button>
               

            </div>
        </div>
        </div>
    )       
}

export default End