import React, {useState} from 'react';
import { useRecoilState } from 'recoil';
import { emailatom, firstNameatom, lastNameatom  } from '../Atom';
import '../css/style.css'
function RegistrationForm() {
   
    const [firstName, setFirstName] = useRecoilState(firstNameatom);
    const [lastName, setLastName] = useRecoilState(lastNameatom);
    const [email, setEmail] = useRecoilState(emailatom);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword || firstName ===null || lastName ===null || password===null || email===null) {
        setSubmitted(false);
        setError(true);
        } else {
            console.log("equal")

        setSubmitted(true);
        setError(false);
       window.open('http://localhost:3000/confirm','*****');
        }
        };
    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }

    const successMessage = () => {
        return (
        <div
        className="success"
        style={{
        display: submitted ? '' : 'none',
        }}>
        <h1>User {firstName} successfully registered!!</h1>
        <a href="********"> Home </a>
        </div>
        );
        };
        const errorMessage = () => {
            return (
            <div
            className="error"
            style={{
            display: error ? '' : 'none',
            }}>
            <h1>Refill the data </h1>
            </div>
            );
            };
    return(
        <div>
        <div className="messages">
{errorMessage()}
{successMessage()}
</div>
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="firstName"  >First Name </label>
                    <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" required placeholder="First Name"/>
                </div>
                <div className="lastname">
                    <label className="form__label" for="lastName">Last Name </label>
                    <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} required placeholder="LastName"/>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} required placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)}   placeholder="Password" required/>
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">Confirm Password </label>
                    <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} required placeholder="Confirm Password"/>
                </div>
            </div>
            <div class="footer">
                <button onClick={handleSubmit} type="submit" class="btn">Register</button>
                <a href="http://localhost:3000/Login"> Have Account ?</a>
                <a href="**********"> AS Guest ?</a>

            </div>
        </div>
        </div>
    )       
}

export default RegistrationForm