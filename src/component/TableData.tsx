import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

interface Column {
  id: 'product' | 'quantity' | 'bidPrice' | 'getBuy';
  label?:string;
  minWidth?: number;
  align?: 'right';
}

const columns: readonly Column[] = [
  { id: 'product', label: 'Product', minWidth: 40 },
  { id: 'quantity', label: 'Quantity', minWidth: 40 },
  {
    id: 'bidPrice',
    label: 'Bid Price',
    minWidth: 75,
    align: 'right',
  },
  { id: 'getBuy', minWidth: 40 },
];

interface Data {
  product: string;
  quantity: number;
  bidPrice: number;
  getBuy : React.ReactElement<any>

}

function createData(
  product: string,
  quantity: number,
  bidPrice: number,
  getBuy: React.ReactElement
): Data {
  // const density = population / size;
  return { product, quantity, bidPrice , getBuy};
}
const getBuy = (buy:string)=> {
  return (
  <>
   <button className='w-[4rem] h-[1.5rem] text-xs  border-2 border-[#67a372] text-[#67a372]'>{buy}</button>

  </>
)}

const rows = [
  createData('Soybeans (SSBS)', 2003, 1736.92, getBuy("buy")),
  createData('Paddy Rice (SPRL)', 11293, 3627.00,getBuy("buy")),
  createData('Maize(SMAZ)', 1832, 8294.01,getBuy("buy")),
  createData('Sorghum (SSGM)', 29102, 8192.00,getBuy("buy")),
  createData('Fair Trade', 3212, 1736.92,getBuy("buy")),
  createData('Fair Trade(FETC)', 3212, 1736.92,getBuy("buy")),
];

export default function StickyHeadTable() {

  return (
    <Paper className='hideme1 w-[100]'>
      <TableContainer sx={{ 
                            maxHeight: 300,
                            "&::-webkit-scrollbar":{width:6,},
                            "&::-webkit-scrollbar-track":{backgroundColor:'white'},
                            "&::-webkit-scrollbar-thumb":{backgroundColor:'gray', borderRadus:2}
                          }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow sx={{color:'#ff0000' }}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, i) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={i} >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <>
                          <TableCell key={column.id} align={column.align} className='text-[red]'>
                          {value}
                        </TableCell>
                        </>
                      );
                    }
                    )
                  }
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
   
    </Paper>
  );
}
