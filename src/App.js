// import axios from "axios";
import Header from "./component/Header";
import Services from "./component/Services";
import { useState,useEffect } from "react";
import Button from "./component/Button";


const App =()=> {
const [services, setServices]=useState([
  {
    "id":"1",
    "logo":"",
    "title":"Product Design",
    "description":"Let me help you fucus on the core of web. validate the design solution,collect your wn data, understand your users, and do not copy your competitor"
  },
  {
    "id":"2",
    "logo":"",
    "title":"Front-end Engineering",
    "description":"Let me help you fucus on the core of web. validate the design solution,collect your wn data, understand your users, and do not copy your competitor"
  },
  {
    "id":"3",
    "logo":"",
    "title":"Teaching",
    "description":"Let me help you fucus on the core of web. validate the design solution,collect your wn data, understand your users, and do not copy your competitor"
  }
])
// this is for the db.json part
// useEffect(()=>{
//   axios.get(' http://localhost:4000/services').then(response=>{
//     setServices(response.data)
//   })
// },[])
 
  return ( 
    <div className="App">
    
      <Header mainLogo={'Services'} subLogo={'My core special services'}/>
      <Services services={services}/>
      
      <Button text1={'Learn More'} text2={'Hire Me'} optionKey={'or'}/>
    </div>
  );
}

export default App;
