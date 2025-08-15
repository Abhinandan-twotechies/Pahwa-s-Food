import React from 'react';
import { menuData } from '../menu';
import { useContext } from 'react';
import { MyContext } from '../App';
function Categories() {

    const { menuData, setCategory } = useContext(MyContext)

    // console.log(menuData);

    return (
        <div>
            <div id="categories" className="mt-5">
                <p className="text-gray1 font-semibold text-xl mb-2 mx-2">Categories</p>

                {/* Scrollable container with hidden scrollbar */}
                <div
                    id="dishes"
                    className="box-shadow w-full pb-2 flex overflow-x-auto gap-4  p-2 bg-white no-scrollbar"
                >
                    {/* <div>
                        <div
                            // onClick={() => setCategory(category)}
                            className="min-w-[25vw] shadow-2xl py-2 rounded-xl flex-shrink-0">
                            <img
                                // src={items.image}
                                className="h-[25vw] w-[25vw] rounded-full object-cover"
                                alt=""
                            />
                            <p className="text-center pt-2 text-gray1 font-semibold">All</p>
                        </div>
                    </div> */}
                    {Object.entries(menuData).map(([category, items]) => (
                        <div key={category}>
                            <div
                                onClick={() => setCategory(category)}
                                className="min-w-[25vw] shadow-2xl py-2 rounded-xl flex-shrink-0">
                                <img
                                    src={items.image}
                                    className="h-[25vw] w-[25vw] rounded-full object-cover"
                                    alt=""
                                />
                                <p className="text-center pt-2 text-gray1 font-semibold">{items.name}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default Categories;
