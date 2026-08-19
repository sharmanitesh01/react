import React from 'react'

import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-80 rounded-4xl overflow-hidden relative shrink-0 '>
        <img className='h-full w-full object-cover' src={props.img} alt="" />
        <RightCardContent tag={props.tag} index={props.index}/>
    </div>
  )
}

export default RightCard