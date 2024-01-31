import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';

const SingleMovie = ({singleMovie}) => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={singleMovie?.show?.image.medium} alt="img" className='w-72 h-52'/></figure>
            <div className="card-body">
                <h2 className='font-semibold text-2xl text-[#0B0B0B]'>{singleMovie?.show?.name}</h2>
                <p className='font-semibold text-base' >Language: {singleMovie?.show?.language}</p>
                <div className="card-actions">
                    <Link to={`/movie-list/${singleMovie.score}`}><button className="btn btn-sm " >View Details</button></Link>
                </div>
            </div>
        </div>
    );
};
SingleMovie.propTypes = {
    singleMovie: PropTypes.object.isRequired
}

export default SingleMovie;