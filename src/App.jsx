import { useEffect, useState } from 'react'
import './App.css'
import Home from './Components/Home'
import Categories from './Components/Categories'
import { createContext } from 'react';
import Foods from './Components/Foods';
import { menuData } from './menu';
import Navigation from './Components/Navigation';
import BottomSheet from './Components/BottomSheet';
import Cart from './Components/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { updateTotalPrice } from './features/CART/cartSlice';
import logoDark from './assets/logo-dark.png';



export const MyContext = createContext();

function App() {

  const carts = useSelector(state => state.carts)
  const [filterdMenu, setFilteredMenu] = useState([]);
  const [category, setCategory] = useState('Main Course');
  const [isBottomSheet, setIsBottomSheet] = useState(false);
  const [itemToCustomize, setItemToCusTomize] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setFilteredMenu(menuData?.[category] || []);
  }, [category]);

  // Function to Calculate Price
  function calcToltalPrice() {
    const totalPrice = carts.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    return totalPrice;

  }

  useEffect(() => {
    dispatch(updateTotalPrice(calcToltalPrice()))
  }, [carts])

  // On bottom sheet handling bottomsheet hidden
  useEffect(() => {
    document.body.style.overflow = isBottomSheet ? "hidden" : "";
  }, [isBottomSheet])

  // Loader
  useEffect(() => {
    if (menuData && Object.keys(menuData).length > 0) {
      setLoading(false);
    }
  }, []);


  if (loading) {
    return (
      <div className="relative h-screen w-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-primarytext/60"></div>

        <div className="relative z-10 flex flex-col items-center">
          <img src={logoDark} alt="logo" className='w-[25%] h-[25%] relative' />
          <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin absolute top-12"></div>
          <p className=" text-white text-lg font-semibold">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className=' no-scrollbar bg-primarytext w-[clamp(375px,100%,1024px)] mx-auto' >
        <MyContext.Provider value={{ menuData, setCategory, filterdMenu, isBottomSheet, setIsBottomSheet, itemToCustomize, setItemToCusTomize }}>
          <Home />
          <Categories />
          <Foods />
          <Navigation />
          <BottomSheet />
        </MyContext.Provider>
      </div>

    </>
  )
}

export default App
