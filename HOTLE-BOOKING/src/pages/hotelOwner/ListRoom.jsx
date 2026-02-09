import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import { roomsDummyData } from "../../assets/assets";
import toast from "react-hot-toast";
import { useAppContext } from "../../conext/AppContext";

const ListRoom = () => {
  const [rooms, setRooms] = useState(roomsDummyData);
  const [loading, setLoading] = useState(false);
  const {axios , getToken , user} = useAppContext();

  // fetch rooms of the hotel owner
 const fetchRooms = async () => {
   setLoading(true);
   try {
     const { data } = await axios.get(
       "/api/room/owner",
       {
         headers: {
           Authorization: `Bearer ${await getToken()}`
         }
       }
     );

     if (data.success) {
       setRooms(data.rooms);
     } else {
       toast.error(data.message);
     }
   } catch (error) {
     toast.error(error.message);
   } finally {
     setLoading(false);
   }
 };

 const ToggleAvailibilty = async (roomId)=>{
   setLoading(true);
   try {
     const {data} = await axios.post('/api/room/toggle-availability', {roomId},
       {headers : {Authorization : `Bearer ${await getToken()}`}}
     ) 
     if (data.success) {
      toast.success(data.message)
      fetchRooms()
     }else{
      toast.error(data.message)
     }
   } catch (error) {
     toast.error(error.message)
   } finally {
     setLoading(false);
   }
 }
 useEffect(()=>{
   if(user){
     fetchRooms()
   }
 },[user])


  return (
    <div>
      <Title
        align="left"
        font="outfit"
        title="Room Listings"
        subTitle="View, edit, or manage all listed rooms. Keep the information up-to-date to provide the best experience for users."
      />

      <p className="text-gray-500 mt-8">All Rooms</p>

      <div className="w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll mt-3">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-gray-800 font-medium">Name</th>
              <th className="py-3 px-4 text-gray-800 font-medium max-sm:hidden">
                Facility
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium text-center">
                Price / night
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {loading ? (
              <tr>
                <td colSpan="4" className="py-8 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-gray-500">Loading...</span>
                  </div>
                </td>
              </tr>
            ) : (
              rooms.map((item, index) => (
                <tr key={index}>
                  <td className="py-3 px-4 text-gray-700 border-t border-gray-300">
                    {item.roomType}
                  </td>

                  <td className="py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden">
                    {Array.isArray(item.amenities) ? item.amenities.join(", ") : Object.keys(item.amenities).join(", ")}
                  </td>

                  <td className="py-3 px-4 text-gray-700 border-t border-gray-300 text-center">
                    ${item.pricePerNight}
                  </td>

                  <td className="py-3 px-4 border-t border-gray-300 text-center">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input onChange={()=> ToggleAvailibilty(item._id)}
                        type="checkbox"
                        className="sr-only peer"
                        checked={item.isAvailable}
                        readOnly
                      />
                      <div className="w-10 h-5 bg-gray-300 rounded-full peer peer-checked:bg-primary after:content-[''] after:absolute after:left-1 after:top-1 after:bg-white after:h-3 after:w-3 after:rounded-full after:transition-all peer-checked:after:translate-x-5"></div>
                    </label>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
    
   );
};

export default ListRoom;
