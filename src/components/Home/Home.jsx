import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import { useState } from "react";


const Home = () => {
    const moviesItem = useLoaderData();
    const [moviesList, setMoviesList] = useState(moviesItem);
    const [searchVal, setSearchVal] = useState("");
    // const [searchResults, setsearchResults] = useState([]);
    const handleSearchClick = () => {
        if (searchVal === "") {
            setMoviesList(moviesItem); 
            return;
        }
        else {
            const filterBySearch = moviesItem.filter((item) => {
                if (item.show.name.toLowerCase().includes(searchVal.toLowerCase())) {
                    // console.log(item)
                    return true;
                }
                
                
            })
           
            // console.log(searchResults)
            setMoviesList(filterBySearch);
        }
        
        
    }

    console.log(moviesList)
    return (
        <div>
            <Banner handleSearchClick={handleSearchClick} setSearchVal={setSearchVal}></Banner>
            <CategoryList handleSearchClick={handleSearchClick} moviesList={moviesList}></CategoryList>
        </div>
    );
};

export default Home;