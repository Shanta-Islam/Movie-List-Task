import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredItem } from "../../utility/localstorage";
import SingleMovie from "../SingleMovie/SingleMovie";

const BookedList = () => {
    const movieCatList = useLoaderData();
    const [movie, setMovie] = useState([]); 
    const[isShow, setIsShow] = useState(false);
    
    useEffect(() => {
        const storedCatIds = getStoredItem(); 
        if (movieCatList.length > 0) {
            const noviesItems = [];
            for (const id of storedCatIds) {
                const movieItem = movieCatList.find(movieItem => movieItem.score == id);
                if (movieItem) {
                    noviesItems.push(movieItem);
                }
            }
            setMovie(noviesItems);
            
        }
        console.log(storedCatIds)
        
    }, [movieCatList])
    
    return (
        <div className="py-32">
            <div className=" px-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
                {
                   isShow ? movie.map(singleMovie => <SingleMovie key={singleMovie.score} singleMovie={singleMovie}></SingleMovie>)
                   : movie.slice(0,4).map(singleMovie => <SingleMovie key={singleMovie.score} singleMovie={singleMovie}></SingleMovie>)
                }
            </div>
            {
                movie.length > 4 && !isShow ? <button onClick={()=>setIsShow(!isShow)} className="mx-auto mt-10  flex justify-center btn bg-[#009444] hover:bg-green-800 text-white">See All</button> : ''
            }
           
        </div>

    );
};

export default BookedList;