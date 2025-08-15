import React, { useEffect, useState, useContext } from 'react';
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import { FaIndianRupeeSign } from 'react-icons/fa6';
import { MyContext } from '../App';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../features/CART/cartSlice';


function Foods() {
    const { filterdMenu, isBottomSheet, toCheckIsHalf, setIsBottomSheet, setItemToCusTomize } = useContext(MyContext);
 
    const [isHalf, setIsHalf] = useState(true);
    const [isAll, setIsAll] = useState(true);
    const [isVeg, setIsveg] = useState(false);
    const [isNonVeg, setIsNonVeg] = useState(false);

    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        function filterItems() {
            if (!filterdMenu?.data) return;

            let data = filterdMenu.data;

            if (isVeg) {
                data = data.filter((item) => item.isVeg === true);
            } else if (isNonVeg) {
                data = data.filter((item) => item.isVeg === false);
            }
            setMenuData(data);
        }
        filterItems();
    }, [filterdMenu, isVeg, isNonVeg, isAll]);


    // ------------ Adding items into Cart Slice --------------
    const dispatch = useDispatch();
    function addCartHandler(id) {
        const singleItem = menuData.find((item) => {
            return item.id === id;
        })
        // console.log(singleItem);
        if (singleItem?.half) {
            setIsBottomSheet(true);
        } else {
            dispatch(addToCart(singleItem))
        }
       
    }




    return (
        <div className="mt-5 mb-5 mx-2 pb-10">
            <p className="text-primaryText font-semibold text-xl mb-2">Popular</p>

            <div className='bg-white w-full h-[75vh] overflow-scroll mb-10 rounded-2xl shadow-2xl no-scrollbar'>
                <div className='bg-secondaryBgColor flex justify-between mb-5 z-10 p-2 sticky top-0'>
                    <div className='text-primarytext font-bold'>
                        <p className='ml-5 text-lg'>{filterdMenu?.name}</p>
                    </div>
                    <div className=''>
                        <div className="inline-flex rounded-md overflow-hidden text-white">
                            <input
                                onClick={() => {
                                    setIsAll(true);
                                    setIsveg(false);
                                    setIsNonVeg(false);
                                }}
                                type="radio" name="menuFilter" id="all"
                                className="hidden peer/all" defaultChecked />
                            <label htmlFor="all"
                                className="px-3 py-1 bg-gray-400 cursor-pointer peer-checked/all:bg-green-600 text-sm text-white font-semibold">
                                All
                            </label>

                            <input
                                onClick={() => {
                                    setIsAll(false);
                                    setIsveg(true);
                                    setIsNonVeg(false);
                                }}
                                type="radio" name="menuFilter" id="veg"
                                className="hidden peer/veg" />
                            <label htmlFor="veg"
                                className="px-3 py-1 bg-gray-500 cursor-pointer peer-checked/veg:bg-green-600 text-sm text-white font-semibold">
                                Veg
                            </label>

                            <input
                                onClick={() => {
                                    setIsAll(false);
                                    setIsveg(false);
                                    setIsNonVeg(true);
                                }}
                                type="radio" name="menuFilter" id="nonveg"
                                className="hidden peer/nonveg" />
                            <label htmlFor="nonveg"
                                className="px-3 py-1 bg-gray-600 cursor-pointer peer-checked/nonveg:bg-green-600 text-sm text-white font-semibold">
                                Non-veg
                            </label>
                        </div>
                    </div>
                </div>

                {menuData.length ? menuData?.map((items, idx) => (
                    <div key={idx} className='px-2'>
                        <div className="box-shadow w-full h-fit flex gap-3 bg-white p-2 rounded-2xl shadow-2xl mb-5">
                            <div className="w-[25%]">
                                <img src={items.image} className="h-[20vw] w-[25vw] rounded-2xl" alt="" />
                            </div>
                            <div className="flex-col w-[70%] pb-2">
                                <div className="h-[70%]">
                                    <p className="font-semibold text-gray1 text-xl">{items.item}</p>
                                    <p className="font-normal text-gray-500 text-[14px] leading-[16px]">
                                        Lorem ipsum dolor sit amet
                                    </p>
                                </div>

                                <div className="w-full flex justify-between items-center">
                                    <div className="font-semibold flex items-center">
                                        <FaIndianRupeeSign />
                                        <span className="text-xl">{items.full}</span>
                                    </div>

                                    {isHalf ? (
                                        <div className='relative px-4 py-0.5 rounded-md bg-secondaryBgColor hover:text-white items-center'>
                                            <button
                                                onClick={() => {
                                                    addCartHandler(items.id);
                                                    setItemToCusTomize(items.id);
                                                }
                                                }
                                                className='font-semibold text-primarytext hover:text-white'>
                                                ADD
                                            </button>
                                            <GrFormAdd className='absolute bottom-3 left-11.5 text-primarytext' />
                                        </div>
                                    ) : (
                                        <div className="text-2xl text-gray1 flex gap-1  items-center rounded-md bg-secondaryBgColor">
                                            <div><p><GrFormSubtract className='text-primarytext' /></p></div>
                                            <span className="font-semibold text-lg text-primarytext ">0</span>
                                            <div><p><GrFormAdd className='text-primarytext' /></p></div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )) :
                    <div className=" flex justify-center items-center bg-white w-full h-[50vh] overflow-scroll mb-10">
                        <div className='flex flex-col'>
                            <div className='w-[70%] mx-auto'>
                                <img src="https://www.pngplay.com/wp-content/uploads/7/Cart-Transparent-PNG.png" alt="" />
                            </div>
                            <div className='items-center text-center'>
                                <h1 className='text-2xl items-center font-semibold '>Oops No Item Found.. !!</h1>
                                <h2>Find another items..</h2>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default Foods;
