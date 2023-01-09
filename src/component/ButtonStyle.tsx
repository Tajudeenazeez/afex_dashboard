import React from 'react'


const Buttonstyle = () => {
  return (
   <>
   <div className='relative'>
    <div className='flex flex-col pl-4 w-full h-[7.2rem] justify-center gap-2 fixed bg-white top-[3.99rem] z-8 '>
        <div className='flex gap-6  items-center ' >
          <p>Broad</p>
          <button className='bg-[#D71E0E] rounded-full text-white text-[0.88rem] leading-4 p-[0.6rem] w-[5.6rem] h-[2.25rem] '>x-Traded</button>
          <button className='bg-gray-100 rounded-full text-black text-[0.88rem] leading-4 p-[1rem]  w-[3.87] h-[2.25]'>OTC</button>
          <button className='bg-gray-100 rounded-full text-black text-[0.88rem] leading-4 p-[1rem] w-[3.13] h-[2.25]'>FI</button>
          <button className='bg-gray-100 rounded-full text-black text-[0.88rem] leading-4 p-[1rem] w-[6.2] h-[2.25]'>Derivatives</button>
        </div>
        <div className='flex gap-6 items-center' >
          <p>Product</p>
          <button className='bg-[#D71E0E] rounded-full text-white text-[0.88rem] leading-4  w-[4.25rem] h-[2.25rem]  p-[0.6rem]'>All</button>
          <button className='bg-gray-100 rounded-full text-black text-[0.88rem] leading-4 w-[4.25rem] h-[2.25rem] p-[0.6rem]'>SMAZ</button>
          <button className='bg-gray-100 rounded-full text-black text-[0.88rem] leading-4 w-[4.25rem] h-[2.25rem] p-[0.6rem]'>SBBS</button>
          <button className='bg-gray-100 rounded-full text-black text-[0.88rem] leading-4 w-[4.25rem] h-[2.25rem] p-[0.6rem]'>SPRL</button>
          <button className='bg-gray-100 rounded-full text-black text-[0.88rem] leading-4 w-[4.25rem] h-[2.25rem] p-[0.6rem]'>SGNG</button>
          <button className='bg-gray-100 rounded-full text-black text-[0.88rem] leading-4 w-[4.25rem] h-[2.25rem] p-[0.6rem]'>FETC</button>
          <button className='bg-gray-100 rounded-full text-black text-[0.88rem] leading-4 w-[4.25rem] h-[2.25rem] p-[0.6rem]'>SCOC</button>
      </div>
      </div>
   </div>
   </>
  )
}

export default Buttonstyle