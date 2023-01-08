import React from 'react'


const Buttonstyle = () => {
  return (
   <>
     <div className='flex gap-1 m-2' >
       <button className='bg-red-600 rounded-full text-white text-xs p-2'>x-Traded</button>
       <button className='bg-[#fbfcfd] rounded text-black text-xs p-2'>OTC</button>
       <button className='bg-[#fbfcfd] rounded text-black text-xs p-2'>FI</button>
       <button className='bg-[#fbfcfd] rounded text-black text-xs p-2'>Derivatives</button>
    </div>
      <div className='flex gap-1 m-2' >
      <button className='bg-red-600 rounded-xl text-white text-xs w-[45px] p-2'>All</button>
      <button className='bg-[#fbfcfd] rounded text-black text-xs p-2'>SMAZ</button>
      <button className='bg-[#fbfcfd] rounded text-black text-xs p-2'>SBBS</button>
      <button className='bg-[#fbfcfd] rounded text-black text-xs p-2'>SPRL</button>
      <button className='bg-[#fbfcfd] rounded text-black text-xs p-2'>SGNG</button>
      <button className='bg-[#fbfcfd] rounded text-black text-xs p-2'>FETC</button>
      <button className='bg-[#fbfcfd] rounded text-black text-xs p-2'>SCOC</button>
   </div>
   </>
  )
}

export default Buttonstyle