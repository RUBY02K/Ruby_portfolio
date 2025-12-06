import React from 'react'
import Experience from './data/experience.json'
const experience = () => {
  return (
   <>
    <div className="container exp " id='Experience' data-aos = "zoom-in"
      data-aos-duration = "1000">
    <h1>EXPERIENCE</h1>
    {
Experience.map((data)=>
{ return(
<>
<div key={data.id} className='exp-items text-center'>
  <div className="left">
    <img src = {`/assets/${data.imgsrc}`} alt=" no image" />
  </div>
  <div className="right">
    <h2>{data.role}</h2>
   <span style={{color:"yellowgreen"}}> <h4>{data.startdate}{" - "} {data.enddate} {" "}</h4></span>
    <span style={{color:"yellow"}}><h4>{data.location}</h4></span>
    <span style={{color:"yellow"}}>
      <h5>{data.experiences}</h5>
    <h5>{data.keylearnings[0]}</h5>
    <h5>{data.keylearnings[1]}</h5>
    <h5>{data.keylearnings[2]}</h5>
    <h5>{data.TechStack}</h5>
    </span>
  </div>
</div>
  </>
)
  
})
    }
   </div></>
  )
}

export default experience