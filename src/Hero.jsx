import React from 'react'

const Hero = ({heroData, setShow}) => {
  return (
    <div className='character'>
      <img src={heroData.thumbnail.path + "." + heroData.thumbnail.extension} alt=''  />
      <h4>{heroData.name}</h4>
      <p>{heroData.description}</p>
      <button onClick={()=>{setShow(false)}} className='btn btn-danger'>Back</button>

    </div>
  )
}

export default Hero
