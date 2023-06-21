 "use client"
import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { BsBoxArrowRight, BsLink, BsPersonWorkspace } from 'react-icons/bs'
import { BiNotepad } from 'react-icons/bi'
import { MdContactEmergency } from 'react-icons/md'
import { GiSkills} from 'react-icons/gi'

// type SideBarOpen = boolean ;

const SideBar = () => {
  const [SideBarOpen, setSideBarOpen] = useState(false);
  
  const Menus = [
    { title: "Home",  icon: <AiOutlineHome size={22} /> }  ,
    { title: "About", icon: <BiNotepad size={22} /> }  ,
    { title: "Skills", gap: true, icon: <GiSkills size={22} /> }  ,
    { title: "Project", icon: <AiOutlineFundProjectionScreen size={22} /> }  ,
    { title: "Contact", icon: <MdContactEmergency size={22} />  }  ,
    { title: "Links", icon: <BsLink size={22} />, gap: true, }  ,
    { title: "Work", icon: <BsPersonWorkspace size={22} /> }  ,

  ]


  // BiNotepad

  return (
    <div className="flex">
    <div
      className={` ${
        SideBarOpen ? "w-72" : " w-20 "
      } bg-[#55555F] h-screen p-5  pt-8 relative duration-300`}
    >
      <BsBoxArrowRight           
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-[#55555F]
         border-2 rounded-full  ${!SideBarOpen && "rotate-180"}`}
        onClick={() => setSideBarOpen(!SideBarOpen)}
      />
      {/* <div className="flex gap-x-4 items-center">
        <img
          src="./src/assets/logo.png"
          className={`cursor-pointer duration-500 ${
            SideBarOpen && "rotate-[360deg]"
          }`}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            !SideBarOpen && "scale-0"
          }`}
        >
          Designer
        </h1>
      </div> */}      
      {/* Add Logo Here */}
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
            ${Menu.gap ? "mt-9" : "mt-2"} ${
           index === 0 && "bg-light-white"
       } `}
          >
            <div>{Menu.icon}</div>
            
            <span className={`${!SideBarOpen && "hidden"} origin-left duration-200`}>
              {Menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
    <div className="h-screen flex-1 p-7">
      <h1 className="text-2xl font-semibold ">Home Page</h1>
    </div>
  </div>
);
};

export default SideBar;
