import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import WantedCard from './componets/WantedCard';
function App() {

  const [data,setData]=useState([])
  const[loading,setLoading]=useState(true)
 useEffect (()=>{
  const fetchData= async()=>{
    try{
      const response=await fetch("https://api.fbi.gov/wanted/v1/list?page=1&per_page=30")
      const data= await response.json()
      console.log(data.items);
      const formatWantedCard=data.items.map(person =>({
        name: person.title,
        reward: person.reward_text,
        date: person.publication,
        picture:person.images[0]?.large

      }))
      setData(formatWantedCard)
      setLoading(false);

    }catch(error){
      console.log(error)
      setLoading(false);

    }
  }
  fetchData()
    },[]);

  return (
    <div className="App">
         {loading ? (
        <p>Loading...</p>
      ) : (
        data.map((person, index) => (
          <WantedCard
            key={index}
            name={person.name}
            reward={person.reward}
            date={person.date}
            picture={person.picture}
          />
        ))
      )}
    </div>
  )
}

export default App;
