import DarkModeToggle from './DarkModeToggle'
import { FaGreaterThan } from 'react-icons/fa'
import { TypeProps } from '../App'
import { RiArrowDropDownFill } from 'react-icons/ri'


const Header = ({darkMode, handleDarkModeToggle}:TypeProps) => {
  
  return (
        <div className=''>
            <div  className='flex justify-evenly w-full h-[3.99rem] items-center bg-white  fixed top-0 border-2 border-b-gray-100'>
            <div className='flex grow justify-between px-4 h-[40px] items-center  border-r-2 border-gray-100  '>
                    <img className='h-[3.68rem] w-[7rem] ' src="./commx.png" alt="comX"/>
                    <DarkModeToggle onClick={handleDarkModeToggle} checked={darkMode} />
            </div>
            <div className='flex z-10 justify-evenly w-[29.25rem]  text-[0.5rem] h-[3.93rem] items-center border-r-2 border-gray-100 '>
                <FaGreaterThan size={10}/>
                <div className='flex  justify-evely items-center '>
                    <p className='text-gray-800 text-[0.6rem] px-2 '>CASH BALANCE <br/><strong className='text-black text-[1.1rem] '><small>₦</small>8,374,763</strong></p>
                    <p className='text-gray-800 text-[0.6rem] px-2 '>SECURITIES VALUE <br/><strong className='text-black text-[1.1rem] '><small>₦</small>8,374,763</strong></p>
                    <p className='text-gray-800 text-[0.6rem] px-2'>LOAN BALANCE <br/><strong className='text-black text-[1.1rem] '><small>₦</small>8,374,763</strong></p>
                </div>
            </div>
            <div className='flex z-10 w-[9.9rem] justify-evenly  text-[0.5rem]  h-[3.93rem] items-center  '>
                <button className=' bg-black text-white text-[.7rem] w-[2.94rem] h-[1.25rem]'>DEMO</button>
                <RiArrowDropDownFill/>
            </div>
        </div>
        </div>
  )
}

export default Header