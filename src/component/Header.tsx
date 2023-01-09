import DarkModeToggle from './DarkModeToggle'
import { FaGreaterThan } from 'react-icons/fa'
import { TypeProps } from '../App'
import { RiArrowDropDownFill } from 'react-icons/ri'


const Header = ({darkMode, handleDarkModeToggle}:TypeProps) => {
  
  return (
        <div className=''>
            <div  className='flex z-30  justify-evenly w-full h-[3rem] items-center bg-white   fixed top-0 left-0 right-0'>
            <div className='flex grow justify-between px-4 h-[40px] items-center text-[0.5rem] border-r-2 border-gray-100  '>
                    <img className='h-[40px] w-[55px] ' src="./commx.png" alt="comX"/>
                    <DarkModeToggle onClick={handleDarkModeToggle} checked={darkMode} />
            </div>
            <div className='flex z-30 justify-evenly w-[240px]  text-[0.5rem] h-[40px] items-center border-r-2 border-gray-100 '>
                <FaGreaterThan size={5}/>
                <div className='flex  justify-evely items-center '>
                    <p className='text-gray-800 text-[0.4rem] px-2 '>CASH BALANCE <br/><strong className='text-black text-[0.7rem] '>N8,374,763</strong></p>
                    <p className='text-gray-800 text-[0.4rem] px-2 '>SECURITIES VALUE <br/><strong className='text-black text-[0.7rem] '>N8,374,763</strong></p>
                    <p className='text-gray-800 text-[0.4rem] px-2'>LOAN BALANCE <br/><strong className='text-black text-[0.7rem] '>N8,374,763</strong></p>
                </div>
            </div>
            <div className='flex z-30 w-[60px] justify-evenly  text-[0.5rem]  h-[40px] items-center  '>
                <button className=' bg-black text-white text-[0.5rem] w-[30px] h-[15px]'>DEMO</button>
                <RiArrowDropDownFill/>
            </div>
        </div>
        </div>
  )
}

export default Header