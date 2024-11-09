'use client';
// import Image from "next/image";
import { useState } from "react";

export default function Home() {

const [clicks , setCount] = useState(0)
function addClick(){
  setCount(clicks + 1 )
}
function lessClick(){
  setCount(clicks - 1)
}

  return (
    <main >
    <div className=" bg-lime-300 py-6">
      <div className="ml-3 px-3 text-2xl mt-3 font-semibold text-center">
        <h1>Count Hub</h1>
      </div>
     
    </div>
<h1 className="font-bold text-2xl text-center  flex-wrap mt-7">Click On the button to increase or Decrease your count</h1>
    {/* //hero section */}
    <div className="text-3xl text-center flex-wrap ">
      
        <div className="mt-36">
        <h1>Count: {clicks}</h1>
        </div>
        <button className="border px-5 py-3 rounded-lg border-lime-300 bg-lime-200 hover:bg-lime-300 mt-5 mr-5" onClick={addClick} >Increase</button>
        <button className="border px-5 py-3 rounded-lg border-lime-300 bg-lime-200 hover:bg-lime-300 mt-5 " onClick={lessClick}>Decrease</button> 
      </div>
     
    </main>
  );
}

