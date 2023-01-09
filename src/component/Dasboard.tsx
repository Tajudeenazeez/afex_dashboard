// import axios from 'axios'
// import axios from 'axios'
// import React, { useEffect } from 'react'
import ContainerTable from '../component/ContainerTable'
import Sidebar from './SideBar'
import SidebarSub from './SideBarSub'
const Dasboard = () => {

  // useEffect(()=>{
  //   const headers:any = {
  //     'Content-Type':'application/json',
  //     'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`
  //   }
  //    axios.get('https://comx-sand-api.afexnigeria.com/api/securities/boards', headers)
  //     .then(response=>{console.log(response.data)})

  // },[])
  return (
    <div className='flex gap-2 mt-[42px]  border-2 border-gray-100'>
        <Sidebar/>
        <SidebarSub/>
      <div className='grow'>
        <ContainerTable/>
      </div>
    
    </div>
  )
}

export default Dasboard