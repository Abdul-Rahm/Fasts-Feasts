import React from 'react'
import { Route, Routes } from 'react-router-dom'
import{ DBHome, DBOrders, DBItems, DBNewItem, DBUsers, DBHeader } from '../components'

const DBRightSection = () => {
  return (
    <div className='flex flex-col py-12 px-12 flex-1 h-full'>
        <DBHeader />
        <div className='flex flex-col flex-1 overflow-y-scroll scrollbar-none'>
            <Routes>
                <Route path="/home" element={<DBHome />} />
                <Route path="/orders" element={<DBOrders />} />
                <Route path='/items' element={<DBItems />} />
                <Route path="/newItem" element={<DBNewItem />} />
                <Route path="/users" element={<DBUsers />} />
            </Routes>
        </div>
    </div>
  )
}

export default DBRightSection