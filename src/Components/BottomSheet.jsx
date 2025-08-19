import React, { useEffect, useState } from 'react'
import { FaXmark } from 'react-icons/fa6';
import { FaPlus } from 'react-icons/fa6';
import { RiSubtractFill } from 'react-icons/ri';
import { useContext } from 'react';
import { MyContext } from '../App';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/CART/cartSlice';
import { FaIndianRupeeSign } from 'react-icons/fa6';
import { useSelector } from 'react-redux';

function BottomSheet() {
    const carts = useSelector(state => state.carts)
    const { setIsBottomSheet, isBottomSheet, itemToCustomize, filterdMenu } = useContext(MyContext)
    const [qty, setQty] = useState(1);
    // const [itemQty , setItemQty] = useState(1);
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
        
        dispatch(addToCart(item));

    }

    function settingQnantity(id, isHalf) {
        const item = carts.find((item) => item.product_id === id && item.isHalf === isHalf);
        setQty(item ? item.quantity : 1);

    }

    useEffect(() => {
        settingQnantity(data?.id, isHalf);
        return () => (setQty(1), setIsHalf(false));

    }, [isBottomSheet]);


    return (
        <>
            <div onClick={() => setIsBottomSheet((prev) => (!prev))} className={` fixed bottom-0 left-0  w-full h-full z-20 ${isBottomSheet ? 'opacity-[1] block' : 'opacity-0 hidden'} transition-all duration-500 backdrop-blur-lg`}></div>
            <div
                className={`fixed bottom-0 left-0  w-[clamp(375px,100vw,1024px)] z-[21] ${isBottomSheet ? 'opacity-[1] h-[60dvh]' : 'opacity-0  h-0'} transition-all duration-500`}>

                <div className="w-full flex justify-center items-center">
                    <div
                        onClick={() => setIsBottomSheet((prev) => (!prev))}
                        className="w-[40px] h-[40px]  bg-primarytext rounded-[50%] flex items-center justify-center relative bottom-2">
                        <FaXmark className='text-lightBlack text- font-semibold' />
                    </div>
                </div>
                <div className="h-[100%] bg-[wheat] py-5  rounded-t-2xl border border-solid border-primayBgColor">
                    <div className="p-2">
                        <div className="flex justify-between gap-5 bg-white  box-shadow">
                            <div className="w-[30%] p-2">
                                <img src={data?.image} className="w-[100%] rounded-2xl" alt="" />
                            </div>
                            <div className='w-[72%] flex justify-start flex-col mt-auto mb-auto font-semibold mx-auto'>
                                <p className='text-xl '>{data?.item}</p>
                                <p className='text-xs text-gray-400'>{data?.itemDesc}</p>
                            </div>

                        </div>
                    </div>


                    <div className="w-full flex-col  p-5   gap-20 mt-2 text-primaryText ">
                        <div className='flex flex-col justify-center items-center '>
                            <div className="flex justify-between w-[90%] items-center p-1 border-b border-dashed">
                                <div className='w-[70%]'><p className='font-semibold'>Half :</p></div>
                                <div className=' flex items-center justify-between w-[20%] text-xl'>
                                    <FaIndianRupeeSign className='text-lg' />
                                    <span className='font-semibold'>{data?.half}</span>
                                    <input
                                        onClick={() => settingQnantity(data.id, true)}
                                        className='w-[100%] h-4'
                                        checked={isHalf === true}
                                        onChange={() => setIsHalf(true)}
                                        type="radio" name="radio" id="" />
                                </div>
                            </div>
                            <div className="flex justify-between  w-[90%] items-center p-1">
                                <div className='w-[70%]'><p className='font-semibold'>Full :</p></div>
                                <div className='flex items-center justify-between w-[20%] text-xl '>
                                    <FaIndianRupeeSign className='text-lg' />
                                    <span className='font-semibold'>{data?.full}</span>
                                    <input
                                        onClick={() => settingQnantity(data.id, false)}
                                        className='w-[100%] h-4'
                                        checked={isHalf === false}
                                        onChange={() => setIsHalf(false)}
                                        type="radio" name="radio" id="" />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between px-2 relative top-[50px] ">
                            <div className="w-[35%]  border border-solid border-primayBgColor bg-white font-bold flex justify-between items-center rounded-lg">
                                <span className=' w-1/3 bg-primarytext  flex justify-center items-center h-full'><RiSubtractFill
                                    onClick={() => setQty((qty) => qty > 1 ? qty - 1 : qty)}
                                    className='text-lightBlack font-bold ' /></span>
                                <span className='text-lightBlack w-1/3  flex justify-center items-center'>{qty}</span>
                                <span className='text-lightBlack font-bold bg-primarytext w-1/3 h-full  flex justify-center items-center'><FaPlus onClick={() => setQty((qty) => qty + 1)} /></span>
                            </div>

                            <div className="w-[60%] p-2  flex justify-center items-center rounded-lg bg-primarytext " onClick={() => addItem(data)}>
                                <div onClick={() => setIsBottomSheet((prev) => (!prev))} className='text-lightBlack font-bold' >Add item </div>
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