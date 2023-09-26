import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { saveDonationItem } from "../../utility/localstorage";


const CategoryListDetails = () => {
    const categoryList = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const singleCategoryList = categoryList.find(singleCategoryList => singleCategoryList.id == idInt);
    const handleDonate = ()=>{
        saveDonationItem(idInt);
        toast('You have donate successfully');
    }
    return (
        <div className="py-32">
            <div className="card w-3/4 bg-base-100 shadow-xl mx-auto rounded-lg">
                <figure className="relative"><img src={singleCategoryList.image} alt="" className="w-full" />
                    <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 bg-opacity-70">
                        <button className="btn text-white font-bold" style={{backgroundColor: singleCategoryList.color.primary_color}} onClick={handleDonate}>Donate ${singleCategoryList.price}</button>
                    </div>
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl font-bold text-[#0B0B0B]">{singleCategoryList.title}</h2>
                    <p className="text-base font-normal">{singleCategoryList.description}</p>
                </div>
            </div>
            <ToastContainer />
        </div>
        
    );
};

export default CategoryListDetails;