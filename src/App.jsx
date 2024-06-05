import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";


const App = () => (

  <>
  
  <h1 className = "heading_style"> List of top 5 Netflix Series in 2020 </h1>
  
  {Sdata.map((val,index) => {
      console.log(index);
      return(
  <Card 
  key={val.id}
  imgsrc={val.imgscr}
  title = {val.title}
  sname = {val.sname}
  links= {val.links}
  />
  );
  
  })}
  
  </>

  );

  export default App;