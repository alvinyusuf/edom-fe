import React from 'react'
import { MdExitToApp } from "react-icons/md"

export default function Navbar() {
  return (
    <nav className="fixed z-20 w-full h-[70px] top-0 bg-blue-500 py-1 flex justify-around items-center text-white font-bold">
      <div className="flex items-center">
        <img src="./img/logo.png" alt="University Logo" height={60} width={60} className="mr-4"/>
        <div className=''>
          <h1 className="text-xl">MODEM</h1>
          <p className="text-sm">Monitoring Dosen Oleh Mahasiswa</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center px-4">
          <p className="mr-4">Jhon Doe</p>
        </div>

        <button className="flex items-center px-4">
          <MdExitToApp size={30} />
          <span>Exit</span>
        </button>
      </div>


    </nav>
  )
}
