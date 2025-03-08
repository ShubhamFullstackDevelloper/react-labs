import React from "react";

 export default class SimpleJsx extends React.Component{

    render(){
         const Fruit=["Apple", "Banana", "Orange", "Mango", "Pineapple"]
        return(
        <div style={{backgroundColor:"green", padding:"20px"}}>
            <h1>{ "Fruit List"}</h1>
           <ul>

            {Fruit.map((item, index) =>(
                <li>{item}</li>
            ))}

            
           </ul>
        </div>
        )
    }
 }