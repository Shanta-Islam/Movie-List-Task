import SingleCategory from "../SingleCategory/SingleCategory";
import PropTypes from 'prop-types'; 

const CategoryList = ({categoriesList}) => {
    // const [categories, setCategories] = useState([]);
    // useEffect(()=>{
    //     fetch('categorylist.json')
    //     .then(res=> res.json())
    //     .then(data=> setCategories(data));
    // },[]);
    // console.log(categoriesList)
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 my-20 mx-5">
             {
                categoriesList.map(category=> <SingleCategory key={category.id} category={category} ></SingleCategory>)
             }
             
        </div>
    );
};
CategoryList.propTypes = {
    categoriesList: PropTypes.array
    
}
export default CategoryList;