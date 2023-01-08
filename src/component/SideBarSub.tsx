import React from 'react'
import { RiSmartphoneLine } from 'react-icons/ri'
import { AiOutlineEye, AiOutlineSearch } from 'react-icons/ai'
import { BiTrendingUp, BiHistory } from 'react-icons/bi'
import { GiCancel } from 'react-icons/gi'
import { FaCheck } from 'react-icons/fa'
// import { FaSearch } from 'react-icons/fa'

const SidebarSub = () => {
  return (
    <div className='w-[190px] h-[390px] bg-white  '>
      <div className='flex items-center m-2  bg-gray-100 border-2 border-gray-300'>
          <AiOutlineSearch size={20} className='text-gray-400' />
        <input
          className=' focus:outline-none text-sm h-[32px] bg-gray-100  pl-[5px] box-border w-full'
          type='text'
          placeholder='Search'
        />
      </div>
      <nav>
        <ul className='flex flex-col  text-gray-800 '>
          <li className='text-xs py-4 flex items-center justify-evenly'>
            <BiTrendingUp size={20}  />
            <p>Product View</p>
          </li>
          <li className='text-xs py-4 flex items-center justify-evenly bg-gray-100 text-red-600'>
            <RiSmartphoneLine size={20} />
            <p>Order Book</p>
          </li>
          <li className='text-xs py-4 flex items-center justify-evenly'>
            <BiHistory size={20} />
            <p>Price History</p>
          </li>
          <li className='text-xs py-4 flex items-center justify-evenly'>
            <AiOutlineEye size={20} />
            <p>Open Order</p>
          </li>
          <li className='text-xs py-4 flex items-center justify-evenly'>
            <FaCheck size={20} />
            <p>Closed Trades</p>
          </li>
          <li className='text-xs py-4 flex items-center justify-evenly'>
            <GiCancel size={20} />
            <p>Cancelled</p>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default SidebarSub
