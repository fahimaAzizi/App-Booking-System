import React from 'react'
import { roomsDummyData } from '../assets/assets'

const AllRoom = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row itmes-start  justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32'>
        <div>

          {roomsDummyData.map((room)=(
            <div>
              <img onClick={()=> navigator(`/rooms/${rooms_id}`)} src={room.images[0]} alt="hotel-img" title='Viw Room Detalis ' 
              className='max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer' />
              <div>
                <p>
                  {room.hotel.city}
              
                </p>
                <p>{room.hotel.name}</p>
              </div>
            </div>
          ))}

        </div>
        {/* filters */}

        <div>
            
        </div>

    </div>
  )
}

export default AllRoom