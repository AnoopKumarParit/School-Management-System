import React from 'react'

// function Box(props) {
//     console.log(props)
//   return (
//     <div className='adam'>
//         <h1>{props.name}</h1>
//         <h1>This is my webpage</h1>
//     </div>
   
//   )
// }

function Box({name="ABCD",proffesion="Web Dev"}) {
  return (
    <div className='adam'>
        <h1>{name}</h1>
        <h1>{proffesion}</h1>
    </div>
   
  )
}

export default Box