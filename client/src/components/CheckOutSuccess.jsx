import React from 'react';
import Header from './Header';
import { motion } from 'framer-motion';
import { buttonClick } from '../animations';
import { NavLink } from 'react-router-dom';
import { FaArrowLeft } from '../assets/icons';
import { Bill } from '../assets';


const CheckOutSuccess = () => {
  return (
    <main className='w-screen min-h-screen flex items-center justify-start flex-col'>
        <Header />
        <div className='flex flex-col items-center w-480 justify-center mt-20  px-6 md:px-24 2xl:px-96 gap-6 pb-24'>
            <img src={Bill} className='w-screen md:w-656' alt='' />

            <h1 className='text-[50px] text-headingColor font-bold'>
                Amount Paid Successfully 
            </h1>

            <motion.div {...buttonClick}>
                <NavLink
                   to={"/"}
                   className="flex items-center justify-center gap-4 cursor-pointer text-2xl text-textColor font-semibold px-4 py-2 rounded-md border border-gray-300 hover:shadow-md"
                >
                    <FaArrowLeft className='text-3xl text-textColor' />
                    Get back to Home
                </NavLink>
            </motion.div>
        </div>
    </main>   
  );
};

export default CheckOutSuccess