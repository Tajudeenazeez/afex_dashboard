import React from 'react';
import {FaMoon, FaSun} from 'react-icons/fa'

interface Props {
  onClick: () => void;
  checked: boolean;
}

const DarkModeToggle: React.FC<Props> = ({ onClick, checked }) => {
  return (
    <button
      className="w-[3.87rem] bg-gray-100 text-gray-500  h-[1.94rem]  rounded-lg p-[2px]"
      onClick={onClick}
    >
      {checked ? (<><FaMoon className='ml-[25px]' size={12} /><p className=' text-[0.4rem] mt-[-10px] mr-[25px]'>dark</p></>) : (<><FaSun size={12} /><p className=' text-[0.4rem] mt-[-10px] ml-[10px]'>light</p></>)}

    </button>
  );
};

export default DarkModeToggle;
