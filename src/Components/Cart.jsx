import React, { useContext, useEffect } from 'react'
import { IoAddCircle } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, updateQuantity, updateTotalPrice } from '../features/CART/cartSlice';


function Cart() {

    const carts = useSelector(state => state.carts)

    const totalPrice = useSelector(state => state.totalprice)

    // console.log(carts, "hello from cart como", totalPrice);


    const dispatch = useDispatch();

    // function to increase Quantity  
    function increaseQuantity(id) {
        dispatch(updateQuantity({ id, type: 'increase' }));
    }

    // function to decrease quantity 
    function descreseQuantity(id) {
        dispatch(updateQuantity({ id, type: 'decrease' }));
    }


    function calcToltalPrice() {
        const totalPrice = carts.reduce((acc, item) => acc + (item.full * item.quantity), 0);
        return totalPrice;

    }

    useEffect(() => {
        // console.log(carts,"ssssssssniwasehiehri");
        dispatch(updateTotalPrice(calcToltalPrice()))
    }, [carts])

    return (
        <>

            <div className="w-full">
                <div className="mb-[100px] shadow-2xl w-full h-screen  bg-secondaryBgColor p-2">
                    <div className="flex items-center">
                        <div
                            className="text-xl  w-[20px] h-[20px] rounded-[50%] flex justify-center items-center m-3 text-gray1">

                            <Link to='/'>
                                <IoChevronBackCircleSharp />
                            </Link>
                        </div>
                        <span className=" font-semibold text-[16px]">Cart</span>
                    </div>
                    <div className="w-full">

                        <table className="text-gray1 w-full bg-white">
                            <thead>
                                <tr className="w-full text-[15px] ">
                                    <th className="w-[20%] p-2 py-3  border-b border-r">Item</th>
                                    <th className="w-[20%] p-2 border-b border-r">Title</th>
                                    <th className="w-[10%] p-2 border-b border-r">Price</th>
                                    <th className="w-[16%] p-2 border-b border-r">Quantity</th>
                                    {/* <th className="w-[12%] p-2 border-b border-r">Total</th> */}
                                    <th className="w-[12%] p-2 border-b">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {carts && carts.length > 0 ? (
                                    carts.map((item) => {
                                        return (

                                            <tr className="text-[14px] " key={item.id}>
                                                <td className="text-center  p-1 py-1 flex items-center justify-center"><img src={item.image}
                                                    className="h-[clamp(40px,10.6vw,80px)] w-[clamp(40px,10.6vw,80px)]" alt="" /></td>
                                                <td className="text-center  p-1 font-semibold leading-[16px] text-[14px]">{item.item}
                                                </td>
                                                <td className="text-center p-1 ">{item.full}</td>
                                                <td className="text-center">
                                                    <FaCircleMinus
                                                        onClick={() => descreseQuantity(item.id)}
                                                        className='inline font-semibold  text-red-500 text-lg' />
                                                    <span className="font-semibold px-1 ">{item.quantity}</span>
                                                    <FaCirclePlus
                                                        onClick={() => increaseQuantity(item.id)}
                                                        className="inline font-semibold   text-green-500 text-lg" />
                                                </td>
                                                {/* <td className="text-center p-1  ">{item.full}</td> */}
                                                <td className="text-center  p-1 text-red-600">
                                                    <MdDelete onClick={() => {
                                                        dispatch(removeFromCart(item.id))
                                                    }} className='inline text-lg' /></td>
                                            </tr>


                                        )
                                    })
                                ) : (
                                    <tr  >
                                        <td colSpan={6} >
                                            <span className='items-center'>
                                                No items added
                                            </span>
                                        </td>
                                    </tr>
                                )}

                            </tbody>

                        </table>


                        <div className="bg-white mt-10 rounded-2xl">
                            <div className="px-3 py-3 text-primaryBg">
                                <div className="border-b pb-1 border-primaryBg w-full flex justify-between ">
                                    <p>Total</p>
                                    <p>
                                        <span><i className="fa-solid fa-indian-rupee-sign"></i></span>
                                        <span>{totalPrice}/-</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart