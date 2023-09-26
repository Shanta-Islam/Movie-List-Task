import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';

const SingleDonation = ({singleDonate}) => {
    // console.log(singleDonate)
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={singleDonate.image} alt="img" className='w-96 h-52'/></figure>
            <div className="card-body">
                <p className="">{singleDonate.category_type}</p>
                <h2>{singleDonate.title}</h2>
                <p>{singleDonate.price}</p>
                <div className="card-actions">
                    <Link to={`/category-list/${singleDonate.id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};
SingleDonation.propTypes = {
    singleDonate: PropTypes.object.isRequired
}

export default SingleDonation;