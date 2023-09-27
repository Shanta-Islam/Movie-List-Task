import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import { useState } from "react";

const Home = () => {
    const categoriesItem = useLoaderData();
    const [categories, setcategories] = useState(categoriesItem);
    const [searchVal, setSearchVal] = useState("");
    const [searchResults, setsearchResults] = useState([]);
    function handleSearchClick() {
        if (searchVal === "") { 
            setcategories(categoriesItem); 
            return; 
        }
        const filterBySearch = categoriesItem.filter((item) => {
            if (item.category_type.toLowerCase().includes(searchVal.toLowerCase())) { 
                return setsearchResults(item); 
            }
            // console.log(item.category_type.toLowerCase().includes(searchVal.toLowerCase()));
            console.log(item)
        })
        setcategories(filterBySearch);
    }
    return (
        <div>
            <Banner handleSearchClick={handleSearchClick} setSearchVal={setSearchVal}></Banner>
            <CategoryList handleSearchClick={handleSearchClick}></CategoryList>
        </div>
    );
};

export default Home;