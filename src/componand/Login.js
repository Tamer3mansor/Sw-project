import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../css/Login.css";
import { Navigate  } from "react-router-dom";

export default function Login() {
  const Name=['Tamer@gmail.com','Shrouk@gmail.com','Abdo@gmail.com','Shams@gmail.com','Habiba@gmail.com'];
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    // console.log(email.length > 0 && password.length > 0 && Name.indexOf(email));
    if( email.length <= 0 || password.length <= 0 || Name.indexOf(email)===-1)
    {
        if(email.length <= 0 || password.length <= 0 )
        {
          alert("Empty Faild Not allowed");
        }
        if(Name.indexOf(email)===-1)
        {
          alert("mail not found");
        }
        return <Navigate  to="http://www.FaceBook.com" />

    }
    else
    {
      return <Navigate  to="http://www.google.com" />
    }
       
  }
function vd(e)
{
  e.preventDefault(); 
}
 
  

  return (
    <div className="Login">
      <Form onSubmit={vd} >
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="md" type="submit"  onClick={vd}>
          Login
        </Button>
      </Form>
    </div>
  );
}