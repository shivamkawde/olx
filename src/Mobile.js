import React from "react";
import { someContext } from "./App";
import { useContext } from "react";
import Navbar from "./Navbar";
import "./Mobile.css";
import { useState, useEffect } from "react";
import { auth, signInWithGoogle, firestore, storage } from "./Firebase";
function Mobile() {
  let props = useContext(someContext);
  let [location, setLocation] = useState();
  let [firebaseMobile, setFirebaseMobile] = useState([]);
  useEffect(() => {
    let f = async () => {
      await firestore.collection("newposts").onSnapshot((querySnapshot) => {
        let tempArr = [];
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          if (doc.data().itemtype === "Mobile") {
            tempArr.push({
              data: doc.data(),
            });
          }
        });
        setFirebaseMobile(tempArr);
      });
    };

    f();
  }, []);

  console.log(firebaseMobile);
  console.log(location);

  return (
    <div>
      <Navbar></Navbar>
      <select
        onChange={(e) => {
          setLocation(e.currentTarget.value);
        }}
      >
        <option>Select Location</option>
        <option>Mumbai</option>
        <option>Delhi</option>
        <option>Pune</option>
        <option>Banglore</option>
        <option>Indore</option>
      </select>

      <div className="mobilediv">
        {firebaseMobile.map((e) => {
          return location && location === e.data.city ? (
            <>
              <div className="Mapcontainer">
                <img src={e.data.url}></img>
                {e.data.city}
                <div className="info">
                  <b> {e.data.modelname}</b>
                  <h4 style={{ color: "red" }}>Price-{e.data.price}</h4>
                  <h4 style={{ color: "red" }}>Price-{e.data.Address}</h4>
                  <h4>{e.data.desc}</h4>
                  <h4 style={{ color: "green" }}>Call {e.data.mobileno}</h4>

                  <h4>{}</h4>
                </div>
              </div>
            </>
          ) : location === undefined ? (
            <>
              <div className="Mapcontainer">
                <img src={e.data.url}></img>
                {e.data.city}
                <div className="info">
                  <b> {e.data.modelname}</b>
                  <h4 style={{ color: "red" }}>Price-{e.data.price}</h4>
                  <h4>{e.data.desc}</h4>
                  <h4 style={{ color: "green" }}>Call {e.data.mobileno}</h4>

                  <h4>{}</h4>
                </div>
              </div>
            </>
          ) : (
            ""
          );
        })}

        {props.mobile.map((e) => {
          return e.city === location ? (
            <>
              <div className="Mapcontainer">
                <img src={e.image}></img>
                {e.city}
                <div className="info">
                  <b> {e.name}</b>
                  <h4 style={{ color: "red" }}>Price-{e.price}</h4>
                  <h4>{e.desc}</h4>
                  <h4 style={{ color: "green" }}>Call {e.mobileno}</h4>
                  <h4>{}</h4>
                </div>
              </div>
            </>
          ) : location === undefined ? (
            <>
              <div className="Mapcontainer">
                <img src={e.image}></img>
                {e.city}
                <div className="info">
                  <b> {e.name}</b>
                  <h4 style={{ color: "red" }}>Price-{e.price}</h4>
                  <h4>{e.desc}</h4>
                  <h4 style={{ color: "green" }}>Call {e.mobileno}</h4>
                  <h4>{}</h4>
                </div>
              </div>
            </>
          ) : (
            ""
          );
        })}
      </div>
    </div>
  );
}

export default Mobile;
