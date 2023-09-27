import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import { useState } from "react";


const Home = () => {
    const categoriesItem = useLoaderData();
    const [categoriesList, setcategoriesList] = useState(categoriesItem);
    const [searchVal, setSearchVal] = useState("");
    // const [searchResults, setsearchResults] = useState([]);
    const handleSearchClick = () => {
        if (searchVal === "") {
            setcategoriesList(categoriesItem); 
            return;
        }
        else {
            const filterBySearch = categoriesItem.filter((item) => {
                if (item.category_type.toLowerCase().includes(searchVal.toLowerCase())) {
                    // console.log(item)
                    return true;
                }
                
                
            })
           
            // console.log(searchResults)
            setcategoriesList(filterBySearch);
        }
        
        
    }

    console.log(categoriesList)
    return (
        <div>
            <Banner handleSearchClick={handleSearchClick} setSearchVal={setSearchVal}></Banner>
            <CategoryList handleSearchClick={handleSearchClick} categoriesList={categoriesList}></CategoryList>
        </div>
    );
};

export default Home;