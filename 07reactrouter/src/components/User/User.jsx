import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {userId} = useParams()

    const toPrint = (userId) + 1;

  return (
    <div className='flex justify-center align-center max-w-screen-2xl'>
    <div className='bg-gray-600 text-white p-4 text-3xl  max-w-screen-lg '>User: {toPrint}</div>
    </div>
  )
}

export default User