import React from 'react';
import { menuData } from '../menu';
import { useContext } from 'react';
import { MyContext } from '../App';
function Categories() {

    const { menuData, setCategory } = useContext(MyContext)

    // console.log(menuData);

    return (
        <div className='sticky top-0 z-11 bg-primayBgColor' >
            <div id="categories" className="mt-5 ">
                <p className="text-gray1 font-semibold text-xl mb-2 mx-2">Categories</p>

                {/* Scrollable container with hidden scrollbar */}
                <div
                    id="dishes"
                    className="box-shadow  w-full pb-2 flex overflow-x-auto gap-4  p-2 bg-[#fcfcfc] no-scrollbar">

                    {Object.entries(menuData).map(([category, items]) => (
                        <div key={category} >
                            <label className="flex flex-col items-center min-w-[25vw] cursor-pointer">
                                <input
                                    type="radio"
                                    name="category"
                                    value={category}
                                    onChange={() => setCategory(category)}
                                    className="peer hidden"
                                />
                                <div className="box-shadow py-2 rounded-xl flex-shrink-0 peer-checked:border border-primarytext transition-colors">
                                    <img
                                        src={items.image}
                                        className="h-[23vw] w-[23vw] rounded-full object-cover p-1"
                                        alt=""
                                    />
                                    <p className="text-center  text-gray1 font-semibold">{items.name}</p>
                                </div>
                            </label>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default Categories;
