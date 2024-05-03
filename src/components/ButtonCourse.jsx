import React, { useState } from 'react'

export default function ButtonCourse() {
  const [click, setClick] = useState(false)
  return (
    <button className={`p-2 rounded w-full font-bold ${click ? 'bg-green-500 border border-green-500 text-white' : 'border border-slate-400'}`} onClick={handleClick}>{matkul}</button>
  )
}
