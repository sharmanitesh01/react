import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id="right" className='h-full p-5 w-2/3 flex flex-nowrap overflow-x-auto gap-10 '>
      {props.user.map(function(elem,index){
        return <RightCard img={elem.img} tag={elem.tag} index={index}/>
      })}

    </div>
  )
}

export default RightContent