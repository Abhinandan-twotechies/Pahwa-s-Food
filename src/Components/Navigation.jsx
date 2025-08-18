import React, { useContext } from 'react'
import { FaHouse } from 'react-icons/fa6';
import { FaClock } from 'react-icons/fa6';
import { FaIndianRupeeSign } from 'react-icons/fa6';
import { FaCartShopping } from 'react-icons/fa6';
import { Outlet, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import logo from '../assets/PK1-removebg-preview.png'
import logoDark from '../assets/logo-dark.png'

function Navigation() {
    const carts = useSelector(state => state.carts)
    const totalPrice = useSelector(state => state.totalprice)

    return (
        <>
            <div id="footer" className="w-full fixed bottom-0 left-0 bg-[wheat] px-5 border border-solid border-primayBgColor py-2 rounded-t-2xl z-10 text-gray1">
                <div className="flex justify-between items-center  text-2xl font-normal">
                    <div className="w-[35%] flex justify-between">
                        <img src={logoDark} alt="" className='h-[30px] w-[30px]' />
                        <FaHouse className='text-primarytext mr-2' />
                        
                    </div>


                    <div className="w-[35%] text-center bg-primarytext text-primaryText rounded-xl p-1  ">
                        <Link to='/cart' className='flex justify-around items-center'>
                            <span className="text-lg"><FaIndianRupeeSign className='text-lightBlack' /></span>
                            <span className="text-lg font-semibold text-lightBlack">{totalPrice}/-</span>
                        </Link>
                    </div>

                </div>

                <Link to='/cart'>
                    <div className="text-2xl fixed bottom-[3%] left-[45%] border-[5px] border-primayBgColor  w-[50px] h-[50px] rounded-[50%] bg-white shadow-5xl  flex justify-center items-center">
                        <FaCartShopping className='text-primarytext relative' />
                        <p className='absolute bottom-6 left-7 text-sm bg-[wheat] border-1 border-primayBgColor font-semibold text-lightBlack px-2.5 py-1 rounded-full'>{carts.length}</p>
                    </div>
                </Link>

            </div>
        </>
    )
}

export default Navigation