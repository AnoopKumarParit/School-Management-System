import React from 'react'
function Main({src,name}) {
  return (
    <>
    <div className='cat'>
        <img src={src} alt="" width="300px"/>
        <h3>It is {name}</h3>
    </div>
    </>
  )
}

export default Main