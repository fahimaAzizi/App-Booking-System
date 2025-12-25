import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const RoomDetails = () => {
  const {id} = useParams()
  const [room, setRoom] = useState(null)
  const [mainImage , setMainImage] = useState(unll)
  useEffect(()=>{
    
  })
  return (
    <div>
        <h1 className='pt-5'>room</h1>
    </div>
  )
}

export default RoomDetails