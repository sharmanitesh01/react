import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {
  return (
    <div>
            <div className="card">
      <div>
              <div className="top">
        <img src="https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg" alt="" />
        <button>Save <Bookmark size={12} /></button>
      </div>
      <div className="center">
          <h3>{props.Company}<span>{props.psd} days ago </span></h3>
          <h2>{props.pos}</h2>
          <div className="tags">
            <h4>{props.jt}</h4>
            <h4>{props.lvl}</h4>
          </div>
      </div>
      </div>
      <div className="bottom">
        <div>
          <h3>${props.pph}/hour</h3>
          <p>{props.loc}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
    </div>
  )
}

export default Card 
