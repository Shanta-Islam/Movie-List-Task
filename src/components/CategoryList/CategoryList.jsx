import SingleCategory from "../SingleCategory/SingleCategory";
import PropTypes from 'prop-types'; 

const CategoryList = ({moviesList}) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 my-20 mx-5">
             {
                moviesList.map(movies=> <SingleCategory key={movies.score} movies={movies} ></SingleCategory>)
             }
             
        </div>
    );
};
CategoryList.propTypes = {
    moviesList: PropTypes.array
    
}
export default CategoryList;