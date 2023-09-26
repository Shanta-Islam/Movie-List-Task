import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SingleCategory = ({ category }) => {
    return (
        <div>
            <Link to={`/category-list/${category.id}`}>
                <div className="card card-compact shadow-xl my-5 h-80" style={{backgroundColor: category.color.card_bg}}>
                    <figure><img src={category.image} alt="img" className='w-96 h-60' /></figure>
                    <div className='card-body' >
                        <p className='badge rounded-none p-3 font-medium text-sm' style={{backgroundColor: category.color.category_bg, color: category.color.primary_color}}>{category.category_type}</p>
                        <h2 className="card-title font-semibold text-xl" style={{color: category.color.primary_color}}>{category.title}</h2>
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