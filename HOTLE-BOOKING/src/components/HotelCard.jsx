import React from 'react'

const HotelCard = ({room , index}) => {
  return (
    <Liink to={'/room' +room._id} onClick={()=> scrollTo(0.0)} key={room_id} >
      <image src ={room.images[0]} alt='' />
      <div>
        
      </div>
    </Liink>
  )
}
 
export default HotelCard