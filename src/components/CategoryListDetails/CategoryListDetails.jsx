import {  useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { saveItem } from "../../utility/localstorage";


const CategoryListDetails = () => {
    const movieList = useLoaderData();
    const { id } = useParams();
    const singleMovieList = movieList.find(singleMovieList => singleMovieList.score == id);
    console.log(singleMovieList)
    const handleTicket = () => {
        saveItem(id);
        toast('But Ticket successfully');
    }
    return (
        <div className="py-32">
            <div className="card w-3/4 bg-base-100 shadow-xl mx-auto rounded-lg">
                <figure className="relative"><img src={singleMovieList?.show?.image?.medium} alt="" className="w-full" />
                    <div className="absolute bottom-0 left-0 right-0 px-4 py-2 ">
                        <button className="btn text-black font-bold" onClick={() => window.review_modal.showModal()}>Buy Ticket</button>
                    </div>
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl font-bold text-[#0B0B0B]">{singleMovieList?.show?.name}</h2>
                    <div className="flex">
                        <p className="text-base font-normal">Language: {singleMovieList?.show?.language}</p>
                        <p className="text-base font-normal">Premiered: {singleMovieList?.show?.premiered}</p>
                    </div>
                    <p className="text-base font-normal">{singleMovieList?.show?.summary}</p>
                </div>
            </div>
            <ToastContainer />
            <>
                <dialog id="review_modal" type="checkbox" className="modal modal-bottom sm:modal-middle">
                    <form method="dialog" className="modal-box" onSubmit={handleTicket}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Movie Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" name="username" defaultValue={singleMovieList?.show?.name} className="input input-bordered" />
                        </div> 
                        <div className="modal-action" htmlFor="review_modal">
                            <button  className="btn">Buy</button>
                        </div>
                    </form>
                </dialog>
            </>
        </div>

    );
};

export default CategoryListDetails;