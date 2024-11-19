import { useState } from 'react'
import {puppyList} from './data.js'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null); 
  const featuredPup = puppies.find((pup)=> pup.id === featPupId);
  
  function handleClick() {
    
  }
  
  
  console.log(featuredPup)
  

  return (

      <div className="App"> 
      {featPupId && (
    <div>
      <h2>{featuredPup.name}</h2>
      <ul>
        <li>Age: {featuredPup.age}</li>
        <li>Email: {featuredPup.email}</li>
      </ul>
    </div>
  )}
        {puppies.map((puppy) => {
     return (
      <div onClick={()=>{ setFeatPupId(puppy.id)}} key={puppy.id}>
      {puppy.name}
      </div>
      
     );
   })}
   
</div>
      
    
  );
}

export default App
