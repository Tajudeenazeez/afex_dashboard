import React from 'react'
import Buttons from './Buttons'
import StickyHeadTable from './TableData'
import TableDataSell from './TableDataSell'
import TradeLog from './TradeLog'


const ContainerTable = () => {
  
  return (
    <>
        <div className='grid grid-cols-2 grid-rows-3 gap-2 '>
            <div className='col-span-2 '>
                <div >
                    <Buttons />
                </div>
                <div></div>
            </div>
            <StickyHeadTable />
           <TableDataSell/>
           <div className='col-span-2 '>
            <TradeLog/>
           </div>
        </div>
    </>
  )
}

export default ContainerTable