"use client"

import React , { useState} from "react";

const About = () => {
   const [title, settitle] = useState("");
   const [desc, setdesc] = useState("");

  //  const submitHandler = (e)=>{
  //   e.preventDefault()
  //   console.log(title)
  //   console.log(desc)
  //  }
  return (
   <><div>
    <h1 >Personal Information</h1>
    <form >
      <input type="text" />
    </form>
   </div>
   
   <div>About</div>
   </>
    
 )}
export default About