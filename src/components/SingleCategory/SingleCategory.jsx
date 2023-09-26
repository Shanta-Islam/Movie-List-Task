import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SingleCategory = ({ category }) => {
    return (
        <div>
            <Link to={`/category-list/${category.id}`}>
                <div className="card card-compact bg-base-100 shadow-xl my-5">
                    <figure><img src={category.image} alt="img" className='w-96 h-60' /></figure>
                    <div className="card-body">
                        <p className='badge'>{category.category_type}</p>
                        <h2 className="card-title">{category.title}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

SingleCategory.propTypes = {
    category: PropTypes.object.isRequired
}

export default SingleCategory;