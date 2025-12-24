import React from 'react'
import { assets, roomsDummyData } from '../assets/assets'
import StarRating from '../components/StarRating'
import { useNavigate } from 'react-router-dom'

const ChekBox = ({label, selected = false, onChange = () =>{}})=>{
  return(
    <label className='flex gap-3 items-center cursor-ponter mt-2 text-sm'>
      <input type='chekbox' checked={selected}onChange={(e)=>onChange(e.target.checked, label)}/>
      <span className='font-light select-noe'>{label}</span>

    </label>
  )
  
}

const RadioButton =({label, selecte = false,onChange =()=>{}})=>{
   return(
    <label className='flex gap-3 items-center cursor-ponter mt-2 text-sm'>
      <input type='radio ' name='sortOption' checked={selected}onChange={(e)=>onChange(e.target.checked, label)}/>
      <span className='font-light select-noe'>{label}</span>

    </label>
  )
}

const AllRooms = () => {

  const navigate = useNavigate()
    const [openFilters, setOpenFilters] = useState(false);

  const roomTypes = [
    "Single Bed",
    "Double Bed",
    "Luxury Room",
    "Family Suite",
  ];

  const priceRanges = [
    "0 to 500",
    "500 to 1000",
    "1000 to 2000",
    "2000 to 3000",
  ];

  const sortOptions = [
    "Price Low to High",
    "Price High to Low",
    "Newest First",
  ];

  return (
    <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-36 px-4 md:px-16 lg:px-24 xl:px-32'>

      {/* ROOMS */}
      <div className='flex flex-col gap-10 w-full lg:w-2/3'>
        {roomsDummyData.map((room) => (
          <div key={room._id} className='flex flex-col md:flex-row gap-6'>

            <img
              onClick={() => {
                navigate(`/rooms/${room._id}`)
                window.scrollTo(0, 0)
              }}
              src={room.images[0]}
              alt="hotel-img"
              title='View Room Details'
              className='max-h-64 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer'
            />

            <div className='md:w-1/2 flex flex-col gap-2'>
              <p className='text-gray-500'>{room.hotel.city}</p>

              <p className='text-gray-800 text-3xl font-playfair cursor-pointer'>
                {room.hotel.name}
              </p>

              <div className='flex items-center gap-2'>
                <StarRating />
                <p>200+ reviews</p>
              </div>

              <div className='flex items-center gap-2 text-gray-600'>
                <img src={assets.locationIcon} alt="location-icon" />
                <span>{room.hotel.address}</span>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* FILTERS */}
      <div className='bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 lg:mt-16 p-4'>
        <div className='flex justify-between items-center'>
          <p className='text-base font-medium text-gray-800'>FILTERS</p>
          <div className='text-xs cursor-pointer'>
            <span className="lg:hidden">HIDE</span>
            <span className='hidden lg:block'>CLEAR</span>
          </div>
        </div>
         {/* FILTER BODY (THIS IS THE PART IN YOUR SCREENSHOT) */}
        <div
          className={`${
            openFilters ? "h-auto" : "h-0 lg:h-auto"
          } overflow-hidden transition-all duration-700`}
        >
           <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">
              Popular filters
            </p>

            {roomTypes.map((room, index) => (
              <CheckBox key={index} label={room} />
            ))}
          </div>

          {/* PRICE RANGE */}
          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">
              Price Range
            </p>

            {priceRanges.map((range, index) => (
              <CheckBox key={index} label={`$ ${range}`} />
            ))}
          </div>

          {/* SORT OPTIONS */}
          <div className="px-5 pt-5 pb-5">
            <p className="font-medium text-gray-800 pb-2">
              Sort By
            </p>

            {sortOptions.map((sort, index) => (
              <CheckBox key={index} label={sort} />
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default AllRooms
