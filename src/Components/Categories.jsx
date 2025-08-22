import { useContext } from 'react';
import { MyContext } from '../App';
import { useDispatch, useSelector } from 'react-redux';
import { updateRecentVisitedCategory } from '../redux/reducer/cartReducer'; // Adjust the import path as necessary

function Categories() {
    const dispatch = useDispatch();

    const { menuData, setCategory, FocusInput } = useContext(MyContext);
    const recentVisitedCategory = useSelector(state => state.carts.recent_visited_category)
    // console.log(recentVisitedCategory);


    return (
        <div className="sticky top-0 z-11 w-[clamp(375px,100%,1024px)] bg-primarytext">
            <div id="categories" className="mt-5">
                <p className=" font-semibold text-xl mb-2 mx-2">Categories</p>

                <div
                    id="dishes"
                    className="box-shadow w-full pb-2 flex overflow-x-auto gap-4 p-2 bg-[#fcfcfc] no-scrollbar"
                >
                    {Object.entries(menuData).map(([categoryName, items], index) => (
                        <div key={categoryName}>
                            <label className="flex flex-col items-center w-[25vw] max-w-[235px] cursor-pointer">
                                <input
                                    type='radio'
                                    name="category"
                                    value={categoryName}
                                    onChange={() => {
                                        setCategory(categoryName)
                                        dispatch(updateRecentVisitedCategory(categoryName))
                                        // console.log(categoryName);
                                        FocusInput();
                                    }}
                                    className={`${recentVisitedCategory === categoryName ? 'peer hidden' : 'peer hidden'}`}
                                />
                                <div className={`box-shadow py-2 rounded-xl flex-shrink-0 border-2 
                                    ${recentVisitedCategory === categoryName ? "border-primarytext" : "border-transparent"}`}>
                                    <img
                                        src={items.image}
                                        className="h-[23vw] w-[23vw] rounded-full object-cover p-1"
                                        alt=""
                                    />
                                    <p className="text-center text-gray-700 font-semibold">
                                        {items.name}
                                    </p>
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
