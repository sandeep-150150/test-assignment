import React from 'react';
import image from "./image.jpg";

const Main = () => {
  return (
    <>
       <div style ={{display:"flex",justifyContent:"center",alignItems:"center"}}>
           <img src={image} alt="pic" />
       </div>
    </>
  );
}

export default Main;
