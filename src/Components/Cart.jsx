import React, { useContext, useEffect } from 'react'
import { MdDelete } from "react-icons/md";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, updateQuantity, updateTotalPrice } from '../features/CART/cartSlice';
import { FaIndianRupeeSign } from 'react-icons/fa6';
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import { MyContext } from '../App';


function Cart() {

    const dispatch = useDispatch();
    const carts = useSelector(state => state.carts)
    const totalPrice = useSelector(state => state.totalprice)

    // function to increase Quantity  
    function increaseQuantity(id) {
        dispatch(updateQuantity({ id, type: 'increase' }));
    }

    // function to decrease quantity 
    function descreseQuantity(id) {
        const item = carts.find((item) => item.id === id);
        if (item.quantity === 1) {
            dispatch(removeFromCart(id));
        }
        else{
            dispatch(updateQuantity({ id, type: 'decrease' }));
        }
    }


    function calcToltalPrice() {
        const totalPrice = carts.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        return totalPrice;
    }
    useEffect(() => {
        dispatch(updateTotalPrice(calcToltalPrice()))
    }, [carts])
    // function to send detals on Whatsapp;
    function sendDetailsOnWhatsApp() {
        const phone = '7765826262';
        const greeting = 'Thanks for shopping with us! 🛍️\n\nHere are your order details:\n';

        const cartDetails = carts.map((item, index) => {
            return `${index + 1}. ${item.isHalf?item.title+"-half":item.title} : ${item.quantity}`;
        }).join('\n');

        console.log(cartDetails);

        const message = `${greeting}${cartDetails}`;
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${phone}?text=${encodedMessage}`;

        window.open(url, '_blank');
    }


    return (
        <>

            <div className="w-full h-[100vh]">
                <div className="mb-[100px] shadow-2xl w-full h-[100%]  bg-primarytext p-2">
                   <Link to='/'>
                    <div className="flex items-center">
                        <div
                            className="text-2xl  w-[20px] h-[20px] rounded-[50%] flex justify-center items-center m-3 text-gray1">

                            
                                <IoChevronBackCircleSharp />
                            
                        </div>
                        <span className=" font-semibold text-xl">Cart</span>
                    </div>
                    </Link>

                    <div className="w-full">

                        <table className="text-gray1 w-full bg-white">
                            <thead>
                                <tr className="w-full text-[15px] ">
                                    <th className="w-[20%] p-2 py-3  border-b border-r">Item</th>
                                    <th className="w-[20%] p-2 border-b border-r">Title</th>
                                    <th className="w-[10%] p-2 border-b border-r">Price</th>
                                    <th className="w-[16%] p-2 border-b border-r">Quantity</th>
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
                                                    {
                                                        item.isHalf?<td className="text-center p-1 font-semibold leading-[16px] text-[14px]">{item.title}<span className='text-[13px] text-gray-400'> Half</span></td> : 
                                                        <td className="text-center  p-1 font-semibold leading-[16px] text-[14px]">{item.title}</td>
                                                    }
                            
                                                <td className="text-center p-1 ">{item.price}</td>
                                                <td className="text-center">
                                                    <div className='ml-2 mr-2 py-0.5 text-gray1  items-center rounded-md bg-secondaryBgColor'>
                                                        <GrFormSubtract
                                                            onClick={() => descreseQuantity(item.id)}
                                                            className='inline font-semibold  text-red-500 text-lg' />
                                                        <span className="font-semibold px-1 text-sm ">{item.quantity}</span>
                                                        <GrFormAdd
                                                            onClick={() => increaseQuantity(item.id)}
                                                            className="inline font-semibold   text-green-500 text-lg" />
                                                    </div>

                                                </td>
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
                                            <div className="w-90 h-60 mx-auto flex flex-col items-center justify-center gap-2">
                                                <img src="https://www.pngplay.com/wp-content/uploads/7/Cart-Transparent-PNG.png" className='w-[200px] ml-10' alt="" />
                                                <span className="text-gray-500">No items added</span>
                                                <Link to='/'>
                                                    <span className='bg-primarytext px-4 py-1.5 rounded-md cursor-pointer font-semibold text-lightBlack text-sm  '>Add items</span>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                )}

                            </tbody>

                        </table>


                        <div className="bg-[wheat] mt-10 rounded">
                            <div className="px-3 py-3 text-primaryBg">
                                <div className="border-b mt-2 mb-2pb-1 border-primaryBg w-full flex justify-between ">
                                    <div className='w-[70%]'>
                                        <p className='text-xl p-1 font-semibold'>Total</p>
                                    </div>
                                    <div className='flex items-center w-[30%] justify-end '>
                                        <span><FaIndianRupeeSign /></span>
                                        <span>{totalPrice}/-</span>
                                    </div>
                                </div>

                                <div className="border border-green-500 bg-green-500 mt-4 mb-4 p-3 rounded-lg flex items-center justify-center hover:bg-green-50 transition">
                                    <button
                                        onClick={() => sendDetailsOnWhatsApp()}
                                        className="flex items-center gap-2 text-white font-medium">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="w-5 h-5"
                                        >
                                            <path d="M12.04 0C5.39 0 0 5.4 0 12.08c0 2.13.55 4.19 1.6 6.01L0 24l6.15-1.6c1.74.93 3.71 1.42 5.9 1.42 6.66 0 12.04-5.4 12.04-12.07C24 5.4 18.7 0 12.04 0zm0 22.06c-1.82 0-3.6-.5-5.15-1.44l-.37-.22-3.65.95.97-3.56-.24-.37A9.87 9.87 0 0 1 2.16 12c0-5.44 4.43-9.87 9.88-9.87s9.88 4.43 9.88 9.87-4.44 9.88-9.88 9.88zm5.39-7.42c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15-.18.29-.73.93-.9 1.12-.16.2-.34.22-.63.08-.29-.15-1.22-.45-2.33-1.43-.86-.76-1.44-1.7-1.61-1.99-.17-.3-.02-.45.13-.6.13-.13.29-.34.44-.5.15-.17.2-.28.3-.47.1-.18.05-.34-.02-.48-.07-.15-.63-1.51-.86-2.07-.23-.56-.46-.49-.64-.5h-.55c-.18 0-.48.07-.73.34s-.96.94-.96 2.3.98 2.66 1.12 2.84c.15.19 1.93 2.96 4.7 4.15.66.29 1.17.47 1.57.6.66.21 1.26.18 1.74.11.53-.08 1.7-.7 1.94-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34z" />
                                        </svg>
                                        Send order via WhatsApp
                                    </button>
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