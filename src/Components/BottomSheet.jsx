import React, { useEffect, useState } from 'react'
import { FaXmark } from 'react-icons/fa6';
import { FaPlus } from 'react-icons/fa6';
import { RiSubtractFill } from 'react-icons/ri';
import { useContext } from 'react';
import { MyContext } from '../App';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/CART/cartSlice';
import { Link } from 'react-router-dom';
function BottomSheet() {

    const { setIsBottomSheet, isBottomSheet, itemToCustomize, filterdMenu } = useContext(MyContext)
    const [qty, setQty] = useState(1);
    const [isHalf, setIsHalf] = useState(false);
    const categoryData = filterdMenu.data;
    const dispatch = useDispatch();

    const data = categoryData?.find((item) => item.id === itemToCustomize)
    const addItem = (data) => {
        const item = {
            isHalf: isHalf,
            ...data,
            currentQty: qty
        }
        console.log(dispatch(addToCart(item)));

    }

    if (!data) return null;


    return (
        <>
            <div className={` fixed bottom-0 left-0  w-full h-full z-20 ${isBottomSheet ? 'opacity-[1] block' : 'opacity-0 hidden'} transition-all duration-500 backdrop-blur-lg`}></div>
            <div
                className={`fixed bottom-0 left-0  w-[clamp(375px,100%,1024px)] z-[21] ${isBottomSheet ? 'opacity-[1] h-[50dvh]' : 'opacity-0  h-0'} transition-all duration-500`}>

                <div className="w-full flex justify-center items-center">
                    <div
                        onClick={() => setIsBottomSheet((prev) => (!prev))}
                        className="w-[30px] h-[30px]  bg-primayBgColor rounded-[50%] flex items-center justify-center relative bottom-2">
                        <FaXmark className='text-secondaryBgColor' />
                    </div>
                </div>
                <div className="h-[100%] bg-thirdBgColor py-5  rounded-t-2xl">
                    <div className="p-2">
                        <div className="flex justify-between gap-5 bg-white  box-shadow">
                            <div className="w-[30%] p-2">
                                <img src={data.image} className="w-[100%] rounded-2xl" alt="" />
                            </div>
                            <div className='w-[72%] flex justify-start flex-col mt-auto mb-auto font-semibold mx-auto'>
                                <p className='text-xl '>{data.item}</p>
                                <p className='text-sm'>Lorem ipsum dolor sit</p>
                            </div>

                        </div>
                    </div>


                    <div className="flex-col p-5 justify-center gap-20 mt-2 text-primaryText mx-auto">
                        <div className="flex justify-between w-full">
                            <p>Half : </p>
                            <div>
                                <i className="fa-solid fa-indian-rupee-sign"><span></span></i>
                                <span>{data.half}/-</span>
                                <input
                                    checked={isHalf === true}
                                    onChange={() => setIsHalf(true)}
                                    type="radio" name="radio" id="" />
                            </div>
                        </div>


                        <div className="flex justify-between w-full">
                            <p>Full</p>
                            <div>
                                <i className="fa-solid fa-indian-rupee-sign"></i>
                                <span>{data.full}/-</span>
                                <input
                                    checked={isHalf === false}
                                    onChange={() => setIsHalf(false)}
                                    type="radio" name="radio" id="" />
                            </div>
                        </div>

                        <div className="flex justify-between px-2 relative top-[80px] ">
                            <div className="w-[35%] bg-secondaryBgColor font-bold flex justify-evenly items-center rounded-lg">
                                <span><RiSubtractFill
                                    onClick={() => setQty((qty) => qty >= 0 ? qty - 1 : qty)}
                                    className='text-primarytext font-bold' /></span>
                                <span className='text-primarytext'>{qty}</span>
                                <span className='text-primarytext font-bold'><FaPlus onClick={() => setQty((qty) => qty + 1)} /></span>
                            </div>

                            <div className="w-[60%] p-2  flex justify-center items-center rounded-lg bg-secondaryBgColor" onClick={() => addItem(data)}>
                                <Link to='/cart'>
                                    <div className='text-primarytext font-bold' >Add item </div>
                                </Link>
                            </div>
                        </div>


                    </div>


                </div>
                {/* </div> */}
            </div>
        </>
    )
}

export default BottomSheet