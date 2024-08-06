import React, { useState } from 'react'

function Navbar() {
  const [currPage, setCurrPage] = useState(0)

  return (
    <div className='bg-[#f5f4f2] h-[60px] p-5 flex justify-around fixed bottom-0 left-0 right-0'>
      <div className={`${currPage == 0 ? "bg-[#9bfd9f]" : "bg-[#e2e2e2]"} w-[25px] h-[25px] rounded-[50%]`} onClick={() => setCurrPage(0)}></div>
      <div className={`${currPage == 1 ? "bg-[#9bfd9f]" : "bg-[#e2e2e2]"} w-[25px] h-[25px] rounded-[50%]`} onClick={() => setCurrPage(1)}></div>
      <div className={`${currPage == 2 ? "bg-[#9bfd9f]" : "bg-[#e2e2e2]"} w-[25px] h-[25px] rounded-[50%]`} onClick={() => setCurrPage(2)}></div>
      <div className={`${currPage == 3 ? "bg-[#9bfd9f]" : "bg-[#e2e2e2]"} w-[25px] h-[25px] rounded-[50%]`} onClick={() => setCurrPage(3)}></div>
      <div className={`${currPage == 4 ? "bg-[#9bfd9f]" : "bg-[#e2e2e2]"} w-[25px] h-[25px] rounded-[50%]`} onClick={() => setCurrPage(4)}></div>
    </div>
  )
}

export default Navbar
