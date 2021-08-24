import React from "react";
import { Redirect } from "react-router-dom";
import { someContext } from "./App";
import { useState, useContext, useEffect } from "react";
import { firestore } from "./Firebase";
import Navbar from "./Navbar";
function Myads() {
  let props = useContext(someContext);
  let [myAds, setMyAds] = useState([]);
  useEffect(() => {
    let f = async () => {
      await firestore.collection("newposts").onSnapshot((querySnapshot) => {
        let tempArr = [];
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          if (props.user && doc.data().uid === props.user.uid) {
            tempArr.push({
              data: doc.data(),
            });
          }
        });
        setMyAds(tempArr);
      });
    };

    f();
  }, []);

  return (
    <div>
      <Navbar />
      {props.user ? (
        <div className="mobilediv">
          {myAds.map((e) => {
            return (
              <div className="Mapcontainer">
                <img src={e.data.url}></img>
                {e.data.city + " "}
                <button
                  onClick={() => {
                    firestore
                      .collection("newposts")
                      .where("modelname", "==", e.data.modelname)
                      .get()
                      .then((querySnapshot) => {
                        querySnapshot.docs[0].ref.delete();
                      });
                  }}
                >
                  Delete Ad
                </button>
                <div className="info">
                  <b> {e.data.modelname}</b>
                  <h4 style={{ color: "red" }}>Price-{e.data.price}</h4>
                  <h4 style={{ color: "red" }}>Price-{e.data.Address}</h4>
                  <h4>{e.data.desc}</h4>
                  <h4 style={{ color: "green" }}>Call {e.data.mobileno}</h4>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <Redirect to="/Login"></Redirect>
      )}
    </div>
  );
}

export default Myads;
