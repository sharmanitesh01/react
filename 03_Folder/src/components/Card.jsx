import React from 'react'

const Card = (props) => {
  return (
    <div>
        <div className="cards">
        <img src="https://images.unsplash.com/photo-1772528205622-c525adf905ed?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1>{props.user || "unknown user"}</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <button>View Profile</button>
      </div>
    </div>
  )
}

export default Card