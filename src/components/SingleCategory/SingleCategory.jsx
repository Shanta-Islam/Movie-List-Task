import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SingleCategory = ({ movies }) => {
    return (
        <div>
            <Link to={`/movie-list/${movies.score}`}>
                <div className="card card-compact shadow-xl my-5 h-80">
                    <figure><img src={movies?.show?.image?.medium} alt="img" className='w-96 h-60' /></figure>
                    <div className='card-body' >
                        <p className='badge rounded-none p-3 font-medium text-sm' >{movies.show.name}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

SingleCategory.propTypes = {
    movies: PropTypes.object.isRequired
}

export default SingleCategory;