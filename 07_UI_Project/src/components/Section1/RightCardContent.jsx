import React from 'react'
import {MoveRight} from 'lucide-react'

const RightCardContent = (props) => {
  return (
        <div className='h-full w-full absolute top-0 left-0 p-8 flex flex-col justify-between '>
            <h2 className='bg-white rounded-full h-11 w-11 flex justify-center items-center text-xl font-semibold'>{props.index+1}</h2>
            <div>
                <p className='text-lg leading-normal mb-15 text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, ducimus iure! Animi eveniet ea odit?</p>
                <div className='flex  items-center justify-between'>
                    <button className='bg-blue-600 text-white font-medium px-8  py-2  rounded-full'>{props.tag}</button>
                    <button className='bg-blue-600 text-white font-medium px-3  py-2  rounded-full'><MoveRight strokeWidth={1} /></button>
                </div>
            </div>
        </div>
  )
}

export default RightCardContent