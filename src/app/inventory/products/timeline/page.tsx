import React from 'react'

import Navbar from '@/components/navbar/navbar';


import InventoryNavbar from '@/components/inventory/navbar/navbar';
import InventoryProductStockTable from '@/components/inventory/product/stocks/table';
import InventoryProductAllTable from '@/components/inventory/product/producttable/allproducttable';


const InventoryTimelineProductsTable = () => {
  return (
    <>
    <Navbar/>
    <div className='w-full bg-gray-200 p-8 px-10'>
  <InventoryNavbar/>
 <InventoryProductStockTable/>
 <InventoryProductAllTable/>
     
    </div>
    </>
  )
}

export default InventoryTimelineProductsTable
