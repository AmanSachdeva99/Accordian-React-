import React, { useState } from 'react'

const Questions = ({d}) => {

    const [status,setStatus]=useState(false)
  return (
    <article className='question'>
        <header>
            <h4>{d.question}</h4>
       <button  className='btn' onClick={()=>{setStatus(!status)}}>{!status?<b>+</b>:<b>-</b>}</button>
     
      </header>
      {status && <p style={{color:'green'}}>{d.correctAnswer}</p>}
    </article>
  )
}

export default Questions
