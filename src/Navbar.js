import React from "react";
import "./Navbar.css";
import { NavLink, Link, Route } from "react-router-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { someContext } from "./App";
import { useContext, useRef } from "react";
import { signInWithGoogle, auth } from "./Firebase";
import { useHistory } from "react-router-dom";
function Navbar() {
  let props = useContext(someContext);
  let history = useHistory();
  let search = useRef(null);

  function CamelCaseString(str) {
    let ans = str.charAt(0).toUpperCase() + "";
    for (let i = 1; i < str.length; i++) {
      if (str.charAt(i) == " ") {
        if (ans.charAt(ans.length - 1) != " ") ans = ans + str.charAt(i);
        continue;
      } else if (str.charAt(i - 1) == " ")
        ans = ans + str.charAt(i).toUpperCase();
      else {
        ans = ans + str.charAt(i);
      }
    }

    return ans;
  }

  return (
    <div>
      <div className="conatiner">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoAfl89TqA-xdUK-J6f5LrXTv8j8D1mwjrqSG-hK3ep4_eEIyXX3v-P1EtWijZWR3UAlE&usqp=CAU" />
        <NavLink
          activeClassName="activeLink"
          style={{
            position: "absolute",
            left: "7rem",
            marginTop: "1rem",
            color: "",
            textDecoration: "none",
            fontSize: "large",
            fontWeight: "bold",
          }}
          exact
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          activeClassName="activeLink"
          exact
          to="/Mobile"
          style={{
            position: "absolute",
            left: "14rem",
            marginTop: "1rem",
            color: "",
            textDecoration: "none",
            fontSize: "large",
            fontWeight: "bold",
          }}
        >
          Mobiles
        </NavLink>
        <NavLink
          activeClassName="activeLink"
          exact
          to="/Bike"
          style={{
            position: "absolute",
            left: "21rem",
            marginTop: "1rem",
            color: "",
            textDecoration: "none",
            fontSize: "large",
            fontWeight: "bold",
          }}
        >
          Bike
        </NavLink>

        <input
          type="text"
          ref={search}
          className="searchNav"
          placeholder="Enter Catagries Eg mobile,bike"
          style={{}}
        />

        <button
          className="searchbtn"
          onClick={() => {
            history.push(`/${CamelCaseString(search.current.value)}`);
          }}
        >
          Search
        </button>

        <NavLink
          activeClassName="activeLink"
          exact
          to="/Car"
          style={{
            position: "absolute",
            left: "58rem",
            marginTop: "1rem",
            color: "",
            textDecoration: "none",
            fontSize: "large",
            fontWeight: "bold",
          }}
        >
          Car
        </NavLink>
        <NavLink
          exact
          to="/Myads"
          activeClassName="activeLink"
          style={{
            position: "absolute",
            left: "64rem",
            marginTop: "1rem",
            color: "",
            textDecoration: "none",
            fontSize: "large",
            fontWeight: "bold",
          }}
        >
          MyAds
        </NavLink>
        {/* <NavLink exact to="/"
          style={{
            position: "absolute",
            left: "68rem",
            marginTop: "1rem",
            color: "black",
            textDecoration: "none", fontSize: "large", fontWeight: "bold", 
          }}
        
        >
          sell
        </NavLink> */}

        <NavLink
          exact
          to="/Login"
          style={{
            position: "absolute",
            left: "70rem",
            marginTop: "1rem",
            color: "",
            textDecoration: "none",
            fontSize: "large",
            fontWeight: "bold",
          }}
        >
          sell
        </NavLink>

        <p
          style={{
            position: "absolute",
            left: "74rem",
            marginTop: "0",
            top: "6px",
            color: "",
            textDecoration: "none",
            fontSize: "large",
            fontWeight: "bold",
          }}
        >
          {props.user ? 
          props.user.displayName===null?props.user.email:props.user.displayName : ""}
        </p>

        {props.user ? (
          <button
            style={{
              position: "absolute",
              left: "76rem",
              marginTop: "0",
              top: "33px",
              color: "",
            }}
            onClick={() => {
              auth.signOut();
            }}
          >
            Logout
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Navbar;
