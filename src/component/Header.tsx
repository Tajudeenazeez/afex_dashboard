import React from 'react'
import DarkModeToggle from './DarkModeToggle'




const Header = () => {
    const [darkMode, setDarkMode] = React.useState(false);

    const handleDarkModeToggle = () => {
      setDarkMode(!darkMode);
    };

  return (
    <div  className='flex justify-evenly w-full h-[40px] items-center mb-2 bg-white'>
        <div className='flex justify-between w-[45%]   items-center text-[0.5rem] '>
            <img className='h-[40px] w-[55px] ' src="./commx.png" alt="comX" />
            <DarkModeToggle onClick={handleDarkModeToggle} checked={darkMode} />
        </div>
        <div className='flex justify-between w-[45%]  text-[0.5rem] items-center'>
            <div>&#62;</div>
            <div className='flex  justify-evenly items-center w-2/3'>
                <p className='text-gray-800 text-[0.4rem] '>CASH BALANCE <br/><strong className='text-black text-[0.5rem] '>N8,374,763</strong></p>
                <p className='text-gray-800 text-[0.4rem]'>SECURITIES VALUE <br/><strong className='text-black text-[0.5rem]'>N8,374,763</strong></p>
                <p className='text-gray-800 text-[0.4rem]'>LOAN BALANCE <br/><strong className='text-black text-[0.5rem]'>N8,374,763</strong></p>

            </div>
            <button className=' bg-black text-white text-[0.5rem] w-[30px] h-[15px]'>DEMO</button>
        </div>
    </div>
  )
}

export default Header