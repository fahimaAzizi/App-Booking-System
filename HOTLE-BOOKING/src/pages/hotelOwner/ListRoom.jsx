import React, { useState } from "react";
import Title from "../../components/Title";
import { roomsDummyData } from "../../assets/assets";

const ListRoom = () => {
  const [rooms, setRooms] = useState(roomsDummyData);

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
            {
              rooms.map(()=>(
                <tr key={index}>
                  <td className="py-3 px-4 text-gray-700 border-t border-gray-300">
                    {ClipboardItem.roomType}
                  </td>
                   <td className="py-3 px-4 text-gray-700 border-t border-gray-300
                   max-sm:hidden">
                    {item.amenities.join(', ')}
                
                  </td>
                    <td className="py-3 px-4 text-gray-700 border-t border-gray-300
                   ">
                    {item.PricePerNight}
                  </td>

                    <td className="py-3 px-4 border-t border-gray-300 text-sm text-red-500
                    text-center">
                    <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap03">
                      <input type="checbox" className="sr-oly peer" checked={item.isAvailable}
                       />
                       <div></div>
                    </label>
                  </td>



                </tr>
              ))
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListRoom;
