import React from 'react'
import Buttons from './Buttons'
import StickyHeadTable from './TableData'
import TableDataSell from './TableDataSell'
import TradeLog from './TradeLog'


const ContainerTable = () => {
  
  return (
    <>
        <div className='grid gap-2'>
            <div className='col-span-2 '>
                <div >
                    <Buttons />
                </div>
            </div>
            <StickyHeadTable />
            <TableDataSell/>
           <div className='col-span-2 '>
            <p className='text-gray-600'>TradeLog</p>
            <TradeLog/>
           </div>
        </div>
    </>
  )
}

export default ContainerTable