import React from 'react'

function Invite(props) {
  return (
    <div className="Invite">
        <h1>{props.name}</h1>
        <p>Branch{props.branch}</p>
        <p>Marks:{props.marks}</p>
    </div>
  )
}

export default Invite