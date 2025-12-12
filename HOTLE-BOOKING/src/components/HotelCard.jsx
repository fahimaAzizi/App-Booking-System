import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const HotelCard = ({room , index}) => {
  return (
    <Link to={'/room' +room._id} onClick={()=> scrollTo(0.0)} key={room_id} >
      <image src ={room.images[0]} alt='' />
      <p>Best seller</p>
      <div>
        <div>
            <p className='font-playfair text-xl fontmedium text-gray-800'>{room.hotel.name}</p>
            <div className='flex items-center gap-1'>
                <img src={assets.starIconFilled} alt=" star-icon" />
            </div>
        </div>

      </div>
    </Link>
  )
}
 
export default HotelCard