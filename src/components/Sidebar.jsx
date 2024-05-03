import React, { useState } from 'react'
import ButtonCourse from './ButtonCourse'

export default function Sidebar({ listMataKuliah, fnShowQuests, showQuests }) {

  return (
    <aside className='w-80 flex flex-col justify-between fixed pt-[86px] h-screen left-0 p-4'>
        <p className='text-center bg-gray-600 rounded py-2 w-full text-white font-bold'>List Mata Kuliah</p>
        <div className='w-full h-full my-4 overflow-auto no-scrollbar'>
          <ul className='grid gap-1'>
            {listMataKuliah.map((matkul) => (
              <li>
                <ButtonCourse />
              </li>
            ))}
          </ul>
        </div>
        <button className='bg-red-500 rounded py-2 w-full font-bold text-white'>Submit</button>
    </aside>
  )
}
