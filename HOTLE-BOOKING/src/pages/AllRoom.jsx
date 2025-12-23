import React from 'react'
import { assets, roomsDummyData } from '../assets/assets'
import StarRating from '../components/StarRating'

const AllRoom = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row itmes-start  justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32'>
        <div>

          {roomsDummyData.map((room)=>(
            <div>
              <img onClick={()=> {navigator(`/rooms/${rooms_id}`), scrollTo(0,0)}} src={room.images[0]} alt="hotel-img" title='Viw Room Detalis ' 
              className='max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer' />
              <div className='md:w-1/2 flex flex-col gap-2'>
                <p className='text-gray-500'>
                  {room.hotel.city}
              
                </p>
                <p className='text-gary-800 text-3xl font-plyfair cursor-pointer'>{room.hotel.name}</p>
                <div className='flex items-center'>
                  <StarRating/>
                  <p>200 + reviews</p>
                </div>
              </div>
              <img src={assets.locationIcon} alt="location-icon" />
              <span>{room.hotel.address}</span>
            </div>
          ))}

        </div>
        {/* filters */}
        <div className='bg-white w-80 border-gray-300 text-gray-300 text-gray-600 
        mmax-lg:mb-8 min-lg:mt-16'>
          <div>
            <p className='text-base font-medium text-gray-800'>FILTERS</p>
            <div className='text-xs cursor-ponter'>
              <span className="lg:hidden"> HIDE</span>
              <span className='hidden lg:block'> CLEAR</span>
            </div>
          </div>

        </div>

        <div>
            
        </div>

    </div>
  )
}

export default AllRoom