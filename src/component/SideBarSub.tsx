import React from 'react'
import { RiSmartphoneLine } from 'react-icons/ri'
import { AiOutlineEye, AiOutlineSearch } from 'react-icons/ai'
import { BiTrendingUp, BiHistory } from 'react-icons/bi'
import { GiCancel } from 'react-icons/gi'
import { FaCheck } from 'react-icons/fa'
// import { FaSearch } from 'react-icons/fa'

const SidebarSub = () => {
  return (
    <div className='w-[12.93rem] h-[25rem] bg-white  ml-[5.5rem] mt-[1.24rem] '>
      <div className='flex  items-center  bg-gray-100 border-2 border-gray-300'>
          <AiOutlineSearch size={25} className='text-gray-400 ' />
        <input
          className=' focus:outline-none text-sm h-[1.7rem] bg-gray-100  pl-[5px] box-border w-[11.93rem]'
          type='text'
          placeholder='Search'
        />
      </div>
      <nav>
        <ul className='flex  flex-col items-center  text-gray-800 '>
          <li className='text-xs  flex items-center py-[1.1rem]  justify-evenly  w-full hover:bg-gray-100 '>
            <BiTrendingUp size={25}  />
            <p>Product View</p>
          </li>
          <li className='text-xs  flex items-center py-[1.1rem] justify-evenly bg-gray-100  w-full hover:bg-gray-100 text-red-600 '>
            <RiSmartphoneLine size={25} />
            <p>Order Book</p>
          </li>
          <li className='text-xs  flex items-center py-[1.1rem] justify-evenly  w-full hover:bg-gray-100'>
            <BiHistory size={25} />
            <p>Price History</p>
          </li>
          <li className='text-xs  flex items-center py-[1.1rem] justify-evenly  w-full hover:bg-gray-100'>
            <AiOutlineEye size={25} />
            <p>Open Order</p>
          </li>
          <li className='text-xs  flex items-center py-[1.1rem] justify-evenly  w-full hover:bg-gray-100'>
            <FaCheck size={25} />
            <p>Closed Trades</p>
          </li>
          <li className='text-xs  flex items-center py-[1.1rem] justify-evenly  w-full hover:bg-gray-100'>
            <GiCancel size={25} />
            <p>Cancelled</p>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default SidebarSub
