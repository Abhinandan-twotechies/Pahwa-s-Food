import React, { useEffect, useState } from 'react';
import logo from '../assets/PK1-removebg-preview.png'



function Home() {
    const imgData = [
        {
            id: 1,
            img: 'https://media.istockphoto.com/id/1370926806/photo/fried-thin-pancakes-crepe-stuffed-potato-with-herring-fish-in-plate.jpg?s=612x612&w=0&k=20&c=BzjR-G_AALo-E8ODdIvGXoVMphTgl0RHuVxd4BQaZxs='
        },
        {
            id: 2,
            img: 'https://img.freepik.com/premium-photo/fresh-healthy-vegetables-food-salad-assortment-various-vegetables_1236927-3882.jpg'
        },
        {
            id: 3,
            img: 'https://media.istockphoto.com/id/637214434/photo/pasta-ingredients.jpg?s=612x612&w=0&k=20&c=5uxNuKI137BMTVL3oBC0DjF4Yu8rxVKSldUfk9bV8QM='
        },
        {
            id: 4,
            img: 'https://img.freepik.com/premium-photo/pan-food-with-red-pepper-it_1086760-105327.jpg'
        },
        {
            id: 5,
            img: 'https://img.freepik.com/premium-photo/mexican-food-right-side-tabletop_23-2147740725.jpg'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === imgData.length - 1 ? 0 : prevIndex + 1
            );
        }, 2000);

        return () => clearInterval(interval);
    }, [imgData.length]);


    return (
        <div>
            
            <div id="homePage" className="relative">
                <div
                    id="homePageSlider"
                    className="rounded-br-md overflow-hidden w-full h-[25vh] sm:h-[350px] md:h-[400px] flex   relative transition-all duration-700"
                    style={{
                        backgroundImage: `url(${imgData[currentIndex].img})`,
                        backgroundRepeat:'no-repeat',
                        backgroundSize:'cover',
                        backgroundPosition:'center',
                    }}
                >
                    <img src={logo} className='absolute top-[5%] left-4 z-10 w-[12%] rounded-full' alt="fads"  />
                    <p className="text-white relative top-[78%] left-5 text-3xl h-fit w-fit z-10 font-bold">
                        PAHWA'S 
                        <span> KITCHEN </span>
                    </p>
                
                </div>

                <div className=" w-full h-[25vh] sm:h-[350px] md:h-[400px]  opacity-30 absolute top-0 bg-gradient-to-t from-black via-red-950 to-yellow-50"></div>
            </div>
        </div>
    );
}

export default Home;
