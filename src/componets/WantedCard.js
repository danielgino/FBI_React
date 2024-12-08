
import React from "react";
import  './WantedCard.css';
function WantedCard( props){


    return(
<div className="wanted-card" >
<div className="card-text">
    <h1>{props.name}</h1>
  <p>Reward: {props.reward || "No reward available"} </p>
    <p className="card-date">Publication date: {props.date}</p>
    </div>
    <div className="card-image">

    <img src={props.picture} alt={props.name}/>
    </div>

</div>

    )

}

export default WantedCard