import React from "react";
import axios from "axios";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";

export default function Register(prop) {
  const [Show, SetShow] = useState(false);
  const [NewUserRegister, SetNewUserRegister] = useState([
    {
      email: "",
      password: "",
    },
  ]);

  const RegisterUserChange = (event) => {
    event.preventDefault();
    const FieldName = event.target.getAttribute("name");
    const FieldValue = event.target.value;
    const NewWordArray = { ...NewUserRegister };
    NewWordArray[FieldName] = FieldValue;

    SetNewUserRegister(NewWordArray);
    console.log(NewWordArray);
  };

  const RegisterUserHandle = (event) => {
    event.preventDefault();
    const NewUser = {
      email: NewUserRegister.email,
      password: NewUserRegister.password,
    };

    axios.post("https://wordwordenglish.herokuapp.com/register", NewUser).then((response) => {
      console.log(response);
    });
    SetNewUserRegister({
      email: "",
      password: "",
    });
    SetShow(true);
    setTimeout(
      () => SetShow(false),
      1000
    );
    setTimeout(
      () =>  window.location.href = "/signin",
      1200
    );
  };

  return (
    <div>
    <div>
      <Alert show={Show} key="success" variant="success">
        You Registered , Let's Start !
      </Alert>
    </div>
    <div className="Main" style={{ display: "flex" }}>
      
      <div>
        <h1 style={{ margin: "40px", marginTop: "180px", paddingLeft: "5rem" }}>
        To  Learn Words
        </h1>
       
      </div>
      <div
        className="Auth-form-container"
        style={{
          paddingRight: "1rem",
          paddingLeft: "10rem",
          marginTop: "5rem",
          width: "50rem",
        }}
      >
        <form className="Auth-form" onSubmit={RegisterUserHandle}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Register</h3>
            <div className="text-center">
              Already registered?{" "}
              <span className="link-primary" onClick={prop.changeAuthMode}>
                Sign In
              </span>
            </div>

            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                required="required"
                className="form-control mt-1"
                placeholder="Email Address"
                onChange={RegisterUserChange}
                value={NewUserRegister.email}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                required="required"
                className="form-control mt-1"
                placeholder="Password"
                onChange={RegisterUserChange}
                value={NewUserRegister.password}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}
