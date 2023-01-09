import React from 'react'
import Buttonstyle from './ButtonStyle'
import StickyHeadTable from './TableData'
import TableDataSell from './TableDataSell'
import TradeLog from './TradeLog'


const ContainerTable = () => {
  
  return (
    <>
        <div className='grid gap-1 '>
            <div className='col-span-2 '>
                <div >
                    <Buttonstyle />
                </div>
            </div>
            <div className='mt-[4.8rem]'>
              <StickyHeadTable />
            </div>
            <div className='mt-[4.8rem]'>
            <TableDataSell/>
            </div>
           <div className='col-span-2 '>
            <p className='text-gray-600'>TradeLog</p>
            <TradeLog/>
           </div>
        </div>
    </>
  )
}

export default ContainerTable