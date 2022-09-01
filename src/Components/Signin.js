import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();

// get token generated on login
const token = cookies.get("TOKEN");

export default function Signin(prop) {
  const [Show, SetShow] = useState(false);

  useEffect(() => {
    // set configurations for the API call here
    const configuration = {
      method: "get",
      url: "https://wordwordenglish.herokuapp.com/auth-endpoint",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        // assign the message in our result to the message we initialized above
      })
      .catch((error) => {
        error = new Error();
      });
  }, []);

  const [UserLogin, SetUserLogin] = useState([
    {
      email: "",
      password: "",
    },
  ]);

  const UserLoginChange = (event) => {
    event.preventDefault();
    const FieldName = event.target.getAttribute("name");
    const FieldValue = event.target.value;
    const NewWordArray = { ...UserLogin };
    NewWordArray[FieldName] = FieldValue;

    SetUserLogin(NewWordArray);
    console.log(NewWordArray);
  };

  const UserLoginHandle = (event) => {
    event.preventDefault();
    const NewUser = {
      email: UserLogin.email,
      password: UserLogin.password,
    };

    axios.post("https://wordwordenglish.herokuapp.com/login", NewUser).then((response) => {
      console.log(response);
      cookies.set("TOKEN", response.data.token, {
        path: "/",
      });
    });

    SetUserLogin({
      email: "",
      password: "",
    });
    SetShow(true);
    setTimeout(() => SetShow(false), 1000);
    setTimeout(() => (window.location.href = "/allcards"), 1200);
  };

  const logout = () => {
    // destroy the cookie
    cookies.remove("TOKEN", { path: "/" });

    // redirect user to the landing page
    window.location.href = "/signin";
  };

  if (!token) {
    return (
      <div>
        <div>
          <Alert show={Show} key="success" variant="success">
            You Sign In , Let's Start !
          </Alert>
        </div>
        <div className="Main" style={{ display: "flex" }}>
          <div>
            <h1
              style={{
                margin: "40px",
                marginTop: "180px",
                paddingLeft: "5rem",
              }}
            >
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
            <form className="Auth-form" onSubmit={UserLoginHandle}>
              <div className="Auth-form-content">
                <h3 className="Auth-form-title">Sign In</h3>
                <div className="text-center">
                  Not registered yet?{" "}
                  <span className="link-primary" onClick={prop.changeAuthMode}>
                    Sign Up
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
                    onChange={UserLoginChange}
                    value={UserLogin.email}
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
                    onChange={UserLoginChange}
                    value={UserLogin.password}
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
  } else {
    return (
      <div>

        <div className="Main" style={{ display: "flex" }}>
          <div>
            <h1
              style={{
                margin: "40px",
                marginTop: "180px",
                paddingLeft: "5rem",
              }}
            >
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
            <div style={{ marginTop: "6rem" }}>
              <h1>Hi ! You are Sign In .</h1>
            </div>

            <div className="d-grid gap-2 mt-3">
              <Button
                type="submit"
                variant="danger"
                onClick={() => logout()}
                style={{ marginTop: "3rem", marginRight: "3rem" }}
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
