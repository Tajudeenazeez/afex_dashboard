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
            <div className='mt-[8.1rem] border-2 mb-4 '>
              <StickyHeadTable />
            </div>
            <div className='mt-[8.1rem] border-2 mb-4'>
            <TableDataSell/>
            </div>
           <div className='col-span-2 '>
            <TradeLog/>
           </div>
        </div>
    </>
  )
}

export default ContainerTable