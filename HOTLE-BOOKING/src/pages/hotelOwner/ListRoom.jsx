import React, { useState } from 'react'
import Title from '../../components/Title'
import { roomsDummyData } from '../../assets/assets'

function ListRoom() {

  const [rooms , setRooms] = useState(roomsDummyData)

  return (
    <div>
      <Title/>
    </div>
  )
}

export default ListRoom