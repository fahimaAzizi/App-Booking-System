import React from 'react'

const Sidebar = () => {
  return (
    <div>
        const sidebarLinks = [
    { name: "Dashboard", path: "/owner", icon: assets.dashboardIcon },
    { name: "Add Room", path: "/owner/add-room", icon: assets.addIcon },
    { name: "List Room", path: "/owner/list-room", icon: assets.listIcon },
  ];
    return (
    <div className="md:w-64 w-16 border-r h-full text-base border-gray-300 pt-4
                    flex flex-col transition-all duration-300">

      {sidebarLinks.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 hover:bg-gray-100 ${
              isActive ? "bg-gray-200 font-semibold" : ""
            }`
          }
        ></NavLink>
    </div>
  )
}

export default Sidebar