import React, { useContext } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { signInWithGoogle, auth } from "./Firebase";
import { someContext } from "./App";
import { useEffect } from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { firestore } from "./Firebase";
function Login() {
  let props = useContext(someContext);
  console.log(props);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);

      if (user) {
        console.log(user);
        let { displayName, email, uid } = user;
        props.checkOnline({ displayName, email, uid });
      } else {
        props.checkOnline(user);
      }
    });
  }, []);

  function usernamePwLogin() {
    let u = document.querySelector(".username").value;
    let p = document.querySelector(".password").value;
    console.log(u);
    auth
      .signInWithEmailAndPassword(u, p)
      .then(() => {
        console.log("done");
      })
      .catch(() => {
        alert("wrong password");
      });
  }

  return (
    <>
      {props.user ? <Redirect to="/sell"></Redirect> : ""}
      <div className="LoginContainer">
        <img
          className="instaLogo"
          src="data:image/png;base64,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"
        
        />
        <input type="text" className="username" placeholder="username"></input>
        <input
          type="password"
          className="password"
          placeholder="password"
        ></input>
        <button className="login-btn" onClick={usernamePwLogin}>
          Login
        </button>
        <h3 className="or">or</h3>
        <button className="login-google" onClick={signInWithGoogle}>
          Login With Google
        </button>
      </div>
      <div className="createAc">
        <Link to="./CreateAc">Create Account</Link>
      </div>
      <h3>For Testing Username- test123@test.com</h3>
      <h3>Password-123456</h3>
    </>
  );
}
export default Login;