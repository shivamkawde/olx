
import Home from "./Home";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Navbar from "./Navbar";
import { createContext, useState, useEffect } from "react";
import Mobile from "./Mobile";
import Login from "./Login";
import Sell from "./Sell";
import Bike from "./Bike";
import Car from "./Car";
import Myads from "./Myads";
import CreateAc from "./CreateAc"
let someContext = createContext();
function App() {
  let [user, setUser] = useState(null);
  let [car, setCar] = useState([]);
  let [bike, setBike] = useState([]);
  let [mobile, setMobile] = useState([]);

  let checkOnline = (user) => setUser(user);

  useEffect(() => {
    fetch("Car.json")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setCar(json);
      });
  }, []);

  useEffect(() => {
    fetch("Bike.json")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setBike(json);
      });
  }, []);

  useEffect(() => {
    fetch("Mobile.json")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setMobile(json);
      });
  }, []);

console.log(bike)
  return (
    <div className="">
      <Router>
        <Switch>
          <someContext.Provider
            value={{
              car: car,
              bike: bike,
              mobile: mobile,
              user: user,
              checkOnline: checkOnline,
            }}
          >
            <Route exact path="/Navbar">
              <Navbar />
            </Route>
            <Route exact path="/Mobile">
              <Mobile />
            </Route>
            <Route exact path="/Login">
              <Login />
            </Route>

            <Route exact path="/Sell">
              <Sell />
            </Route>
            <Route exact path="/CreateAc">
              <CreateAc />
            </Route>
            <Route exact path="/Car">
              <Car />
            </Route>
            <Route exact path="/Myads">
              <Myads />
            </Route>

            <Route exact path="/Bike">
              <Bike />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </someContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
export { someContext };
