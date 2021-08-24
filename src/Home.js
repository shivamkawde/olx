import React from 'react'
import Navbar from './Navbar'
import {someContext} from "./App"
import {useContext} from "react"
import "./Home.css"
function Home() {

    let props=useContext(someContext)
    console.log(props.car)
    return (
        <div className="maindiv">
            <Navbar/>
             <h3>Cars</h3>
            <div className="carcontainer">
             <h1></h1>
                {props.car.map((e)=>{
                           
                  return(
                    <div className="card"> 
                         <img src={e.image} ></img>
                         <b>{e.compnay} {e.carname}</b>
                         <p>{e.price}Rs <span style={{color:"green"}}> Call-{e.mobileno}</span>  </p>
                         
                    </div>   
  
                  )

                })
            }
                </div>

                <h3>Bike</h3>
                  <div className="carcontainer">
          
                {props.bike.map((e)=>{
                           
                  return(
                    <div className="card"> 
                         <img src={e.image} ></img>
                         <b>{e.compnay} {e.name}</b>
                         <p>{e.price}Rs   <span style={{color:"green"}}> Call-{e.mobileno}</span>   </p>
                  
                    </div>   
  
                  )

                })
            }
                </div> 






                  <h3>Mobile</h3>
                  <div className="carcontainer">
          
                {props.mobile.map((e)=>{
                           
                  return(
                    <div className="card"> 
                         <img src={e.image} ></img>
                         <b>{e.compnay} {e.name}</b>
                         <p >{e.price}Rs  <span style={{color:"green"}}> Call-{e.mobileno}</span></p>
                  
                    </div>   
  
                  )

                })
            }
                </div>            
        

        </div>
    )
}
export default Home
