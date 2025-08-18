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



export const MyContext = createContext();

function App() {

  const carts = useSelector(state => state.carts)
  console.log(carts);


  // console.log(carts, "ssss");
  const [filterdMenu, setFilteredMenu] = useState([]);
  const [category, setCategory] = useState('Main Course');
  const [isBottomSheet, setIsBottomSheet] = useState(false);
  const [itemToCustomize, setItemToCusTomize] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  // console.log(itemToCustomize);



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



  // function to increase Quantity  
  // function increaseQuantity(id) {
  //     dispatch(updateQuantity({ id, type: 'increase' }));
  // }

  // // function to decrease quantity 
  // function descreseQuantity(id) {
  //     dispatch(updateQuantity({ id, type: 'decrease' }));
  // }



  //  Show loader for 1 sec initially
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="relative h-screen w-screen flex items-center justify-center">
      <img 
        src="https://static.vecteezy.com/system/resources/previews/000/464/411/non_2x/kitchen-utensils-seamless-pattern-for-wallpaper-or-print-on-wrapping-paper-and-napkin-vector.jpg"   
        alt="Loading background"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Loader spinner */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-white text-lg font-semibold">Loading...</p>
        <p className='text-xl text-white font-semibold'>Pahwa's Kitchen</p>
      </div>
    </div>
    )
  }





  return (
    <>
      <div className=' no-scrollbar bg-primayBgColor' >
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
