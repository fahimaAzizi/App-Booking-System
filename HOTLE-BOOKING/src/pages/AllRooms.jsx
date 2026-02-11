import React, { useCallback, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import StarRating from '../components/StarRating'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../conext/AppContext'

// Memoized CheckBox component
const CheckBox = React.memo(({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
      <input
        type='checkbox'
        checked={selected}
        onChange={(e) => onChange(e.target.checked, label)}
      />
      <span className='font-light select-none'>{label}</span>
    </label>
  )
})

// Memoized RadioButton component
const RadioButton = React.memo(({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
      <input
        type='radio'
        name='sortOption'
        checked={selected}
        onChange={(e) => onChange(e.target.checked, label)}
      />
      <span className='font-light select-none'>{label}</span>
    </label>
  )
})

// Memoized RoomCard component
const RoomCard = React.memo(({ room, navigate }) => {
  const handleClick = useCallback(() => {
    navigate(`/rooms/${room._id}`)
    window.scrollTo(0, 0)
  }, [navigate, room._id])

  return (
    <div className='flex flex-col md:flex-row gap-6'>
      <img
        onClick={handleClick}
        src={room.images[0] || assets.roomImg1}
        alt="hotel-img"
        className='max-h-64 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer'
      />

      <div className='md:w-1/2 flex flex-col gap-2'>
        <p className='text-gray-500'>{room.hotel?.city || 'Unknown City'}</p>
        <p className='text-gray-800 text-3xl font-playfair'>
          {room.hotel?.name || 'Hotel Name'}
        </p>

        <div className='flex items-center gap-2'>
          <StarRating />
          <p>200+ reviews</p>
        </div>

        <div className='flex items-center gap-2 text-gray-600'>
          <img src={assets.locationIcon} alt="location" />
          <span>{room.hotel?.address || 'Address'}</span>
        </div>
        
        <div className='flex items-center gap-2 text-gray-600 mt-2'>
          <span className='font-medium'>Room Type:</span>
          <span>{room.roomType}</span>
        </div>
        
        <div className='flex items-center gap-2 text-primary font-medium mt-2'>
          <span className='text-xl'>${room.pricePerNight}</span>
          <span className='text-sm'>/night</span>
        </div>
      </div>
    </div>
  )
})

// Static data moved outside component
const roomTypes = [
  "Single Bed",
  "Double Bed",
  "Luxury Room",
  "Family Suite",
]

const priceRanges = [
  "0 to 500",
  "500 to 1000",
  "1000 to 2000",
  "2000 to 3000",
]

const sortOptions = [
  "Price Low to High",
  "Price High to Low",
  "Newest First",
]

const AllRooms = () => {
  const navigate = useNavigate()
  const [openFilters, setOpenFilters] = useState(false)
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState(true)
  const { axios } = useAppContext()

  const toggleFilters = useCallback(() => {
    setOpenFilters(prev => !prev)
  }, [])

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const { data } = await axios.get('/api/room')
        if (data.success) {
          setRooms(data.rooms)
        }
      } catch (error) {
        console.error('Error fetching rooms:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchRooms()
  }, [axios])

  return (
    <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-36 px-4 md:px-16 lg:px-24 xl:px-32'>

      {/* ROOMS */}
      <div className='flex flex-col gap-10 w-full lg:w-2/3'>
        {loading ? (
          <div className='flex items-center justify-center py-20'>
            <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-primary'></div>
          </div>
        ) : rooms.length === 0 ? (
          <p className='text-gray-500 text-center py-20'>No rooms available</p>
        ) : (
          rooms.map((room) => (
            <RoomCard key={room._id} room={room} navigate={navigate} />
          ))
        )}
      </div>

      {/* FILTERS */}
      <div className='bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 lg:mt-16 p-4'>
        <div className='flex justify-between items-center'>
          <p className='text-base font-medium text-gray-800 pb-2'>FILTERS</p>
          <span
            className='text-xs cursor-pointer lg:hidden'
            onClick={toggleFilters}
          >
            {openFilters ? "HIDE" : "SHOW"}
          </span>
          <span className='hidden lg:block text-xs cursor-pointer'>CLEAR</span>
        </div>

        <div
          className={`${
            openFilters ? "h-auto" : "h-0 lg:h-auto"
          } overflow-hidden transition-all duration-700`}
        >
          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Popular filters</p>
            {roomTypes.map((room, i) => (
              <CheckBox key={i} label={room} />
            ))}
          </div>

          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Price Range</p>
            {priceRanges.map((range, i) => (
              <CheckBox key={i} label={`$ ${range}`} />
            ))}
          </div>

          <div className="px-5 pt-5 pb-7">
            <p className="font-medium text-gray-800 pb-2">Sort By</p>
            {sortOptions.map((opt, i) => (
              <RadioButton key={i} label={opt} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(AllRooms)
