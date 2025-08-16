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
  const [itemToCustomize, setItemToCusTomize] = useState([])
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
