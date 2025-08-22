import { FaHouse } from 'react-icons/fa6';
import { FaIndianRupeeSign } from 'react-icons/fa6';
import { FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux';
import logoDark from '../assets/logo-dark.png'

function Navigation() {
    // const carts = useSelector(state => state.carts)
       const carts = useSelector(state => state.carts.carts);

    const totalPrice = useSelector(state => state.carts.totalprice)
    // console.log(totalPrice);
    


    return (
        <>
            <div id="footer" className="w-[clamp(375px,100%,1024px)] fixed bottom-0 left-0 lg:left-[calc(50%-512px)] bg-[wheat] px-5 border border-solid border-primayBgColor py-2 rounded-t-2xl z-10 text-gray1">
                <div className="flex justify-between items-center  text-2xl font-normal">
                    <div className="w-[35%] flex justify-between">
                        <img src={logoDark} alt="" className='h-[35px] w-[35px]' />
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