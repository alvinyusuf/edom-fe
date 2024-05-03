import React, { useState } from "react"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
export default function Home() {
  let listMataKuliah = ['Web Programming', 'Basis Data', 'Dasar Pemrograman', 'E-Bussiness', 'Pengenalan Pola', 'Jaringan Komputer dan Komunikasi Data', 'Praktikum Jaringan Komputer dan Komunikasi Data', 'PKn', 'Fiqih Ibadah', 'Kriptoggrafi', 'Cloud Computing']
  const [showQuests, setShowQuests] = useState(false)
  const handleShowQuests = () => {
    setShowQuests(!showQuests)
  }

  return (
    <div>
      <Navbar />
      <main className="flex justify-between">
        <Sidebar listMataKuliah={listMataKuliah} fnShowQuests={handleShowQuests} showQuests={showQuests} />
        <div className="flex flex-col justify-between w-full h-screen px-4 ms-80 pt-[86px]">
          <div className="h-5/6 overflow-auto no-scrollbar">
            {showQuests ? (
              <ul className="w-full grid gap-2">
              <li>
                <div className="flex flex-col justify-center items-center border-2 rounded p-4 font-bold">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, sequi.</p>
                  <div>
                    <input type="radio" name="" id="" />
                    <label htmlFor="">1</label>
                    <input type="radio" name="" id="" />
                    <label htmlFor="">2</label>
                    <input type="radio" name="" id="" />
                    <label htmlFor="">3</label>
                    <input type="radio" name="" id="" />
                    <label htmlFor="">4</label>
                    <input type="radio" name="" id="" />
                    <label htmlFor="">5</label>
                  </div>
                </div>
              </li>
            </ul>
            ) : (
              <div></div>
            )}
          </div>
          <div className="h-1/6 flex items-center justify-end">
            <button className="bg-red-500 rounded py-2 w-full">Submit</button>
          </div>
        </div>
      </main>
    </div>
  );
}
