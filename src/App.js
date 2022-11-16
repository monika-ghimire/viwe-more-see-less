import React from 'react'
import './App.css'
export default function App() {

  let colorList=[{color:"black"},{color:"black"},{color:"black"}]
  let viewMore=[{color:"red"},{color:"red"},{color:"red"},{color:"red"},]


  let viewMoreColor=()=>{
    let x=document.getElementById('viewMore')
    let seeMore=document.getElementById('viewMoreBtn')
  let seeLess=document.getElementById('seeLess')
  if (x.style.display === "none") {
    x.style.display = "block";
    seeMore.style.display='none'
    seeLess.style.display='block'
  } else {
    x.style.display = "none";

  }


  }

  const seeLessBtn=()=>{
    let x=document.getElementById('viewMore')
    let seeMore=document.getElementById('viewMoreBtn')
  let seeLess=document.getElementById('seeLess')
      if (seeLess.style.display === "block") {
        seeLess.style.display = "none";
        seeMore.style.display='block';
        x.style.display = "none";
      }
      
  }
  return (
  <>
  <div className='container'>
    <div className='row'>
      <div className='col-2'>
      <ul>
       {colorList.map((x)=>(
          <li>{x.color}</li>
        ))} 
        
        
        
       
        </ul>
     
          <ul id='viewMoreBtn'>
          <li>
        <button className='btns' onClick={viewMoreColor}>
           <i class='fas fa-angle-down'></i>  see more
          </button>
        </li></ul>
        
       
        <ul id='viewMore'>
        
        {viewMore.map((x)=>(
           <li>
           { x.color}
           </li>
        ))} 
        <li>
          <button id="seeLess" onClick={seeLessBtn}><i class='fas fa-angle-up'></i>  see less</button>
          </li> 
        </ul>
      </div>
    </div>

  </div>



  
  </>
  )
}
