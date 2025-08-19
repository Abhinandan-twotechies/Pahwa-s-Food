import React, { useEffect, useState, useContext } from 'react';
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import { FaIndianRupeeSign } from 'react-icons/fa6';
import { MyContext } from '../App';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, updateQuantity } from '../features/CART/cartSlice';


function Foods() {
    const { filterdMenu, setIsBottomSheet, setItemToCusTomize } = useContext(MyContext);
    const carts = useSelector(state => state.carts)

    const [isHalf, setIsHalf] = useState(true);
    const [isAll, setIsAll] = useState(true);
    const [isVeg, setIsveg] = useState(false);
    const [isNonVeg, setIsNonVeg] = useState(false);
    const [qty, setQty] = useState(1);

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


    function increaseQuantity(id, actionType) {
        const itemInCart = carts.filter((item) => item.product_id == id)
        dispatch(updateQuantity({
            id: itemInCart[0].id,
            type: actionType
        }));
    }

    function decreaseQuantity(id, actionType) {
        const itemInCart = carts.find((item) => item.product_id === id);
        if (itemInCart.quantity < 1) {
            dispatch(removeFromCart(id));
        }
        else {
            dispatch(updateQuantity({
                id: itemInCart.id,
                type: actionType
            }));

        }

    }


    return (
        <div className="mt-5 mb-5 mx-2 pb-10">
            <p className="text-primaryText font-semibold text-xl mb-2">Popular</p>

            <div className='bg-[#fcfcfc] w-full h-auto overflow-scroll mb-10 rounded-2xl  no-scrollbar'>
                <div className='bg-[wheat] flex justify-between mb-5 z-10 p-2 sticky top-0'>
                    <div className='text-lightBlack font-bold'>
                        <p className='ml-5 text-lg'>{filterdMenu?.name}</p>
                    </div>
                    <div className='overflow-hidden'>
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
                                className="px-3 py-1 bg-white border border-solid border-primayBgColor cursor-pointer peer-checked/all:bg-primarytext  text-sm text-gray-800 font-semibold">
                                Both
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
                                className="px-3 py-1 bg-white border border-solid border-primayBgColor cursor-pointer peer-checked/veg:bg-primarytext text-sm text-gray-800 font-semibold">
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
                                className="px-3 py-1 bg-white border  border-solid border-primayBgColor cursor-pointer peer-checked/nonveg:bg-primarytext text-sm text-gray-800 font-semibold">
                                Non-veg
                            </label>
                        </div>
                    </div>
                </div>

                {menuData.length ? menuData?.map((items, idx) => (
                    <div key={idx} className='px-2'>
                        <div className="box-shadow w-full h-fit flex gap-3 bg-white p-2 rounded-2xl  mb-5">
                            <div className="w-[25%]">
                                <img src={items.image} className="h-[20vw] w-[25vw] rounded-2xl" alt="" />
                            </div>
                            <div className="flex-col w-[70%] pb-2">
                                <div className="h-[70%]">
                                    <p className="font-semibold text-gray1 text-xl">{items.item}</p>
                                    <p className="font-normal text-gray-500 text-[12px] ">
                                        {items.itemDesc || "No description available."}
                                    </p>
                                </div>

                                <div className="w-full flex justify-between items-center">
                                    <div className="font-semibold flex items-center">
                                        <FaIndianRupeeSign />
                                        <span className="text-xl">{items.full}</span>
                                    </div>

                                    {carts?.find((item) => (item.product_id == items.id))?.isHalf ? (
                                        <div className="relative px-4 py-0.5 rounded-md bg-primarytext text-lightBlack items-center">
                                            <button
                                                onClick={() => {
                                                    addCartHandler(items.id);
                                                    setItemToCusTomize(items.id);
                                                }}
                                                className="font-semibold text-lightBlack hover:text-white"
                                            >
                                                ADD
                                            </button>

                                            <GrFormAdd className="absolute bottom-3 left-11.5 text-lightBlack" />
                                        </div>
                                    ) : (
                                        (carts?.find((item) => (item.product_id == items.id))?.quantity >= 1 ? (
                                            <div className="min-w-[25%] rounded-sm max-h-[30px] bg-primarytext text-xl text-gray1 flex justify-between items-center border border-solid border-primayBgColor  ">
                                                <div className='w-1/3 items-center flex-1  bg-primarytext'>
                                                    <GrFormSubtract
                                                        onClick={() => decreaseQuantity(items.id, 'decrease')}
                                                        className="text-lightBlack w-full h-full"
                                                    />
                                                </div>
                                                <span className="font-semibold text-lg text-lightBlack w-1/3 text-center ">
                                                    <div className='w-full h-full bg-white border border-solid border-primayBgColor '>
                                                        {carts.find((item) => item.product_id === items.id)?.quantity}
                                                    </div>
                                                </span>
                                                <div className='w-1/3 items-center  bg-primarytext flex-1 '>
                                                    <GrFormAdd
                                                        onClick={() => {
                                                            // increaseQuantity(items.id, 'increase')
                                                            setIsBottomSheet(true);
                                                            setItemToCusTomize(items.id);

                                                        }
                                                        }
                                                        className="text-lightBlack w-full h-full "
                                                    />
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="relative px-4 py-0.5 rounded-md bg-primarytext text-lightBlack items-center">
                                                <button
                                                    onClick={() => {
                                                        addCartHandler(items.id);
                                                        setItemToCusTomize(items.id);
                                                    }}
                                                    className="font-semibold text-lightBlack hover:text-white"
                                                >
                                                    ADD
                                                </button>

                                                <GrFormAdd className="absolute bottom-3 left-11.5 text-lightBlack" />
                                            </div>
                                        ))

                                    )
                                    }
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



























