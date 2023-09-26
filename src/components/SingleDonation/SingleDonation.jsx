import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';

const SingleDonation = ({singleDonate}) => {
    // console.log(singleDonate)
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl" style={{backgroundColor: singleDonate.color.card_bg}}>
            <figure><img src={singleDonate.image} alt="img" className='w-72 h-full'/></figure>
            <div className="card-body">
                <p className="badge rounded-none p-3 font-normal text-sm" style={{backgroundColor: singleDonate.color.category_bg, color: singleDonate.color.primary_color}}>{singleDonate.category_type}</p>
                <h2 className='font-semibold text-2xl text-[#0B0B0B]'>{singleDonate.title}</h2>
                <p className='font-semibold text-base' style={{color: singleDonate.color.primary_color}}>${singleDonate.price}.00</p>
                <div className="card-actions">
                    <Link to={`/category-list/${singleDonate.id}`}><button className="btn btn-sm text-white" style={{backgroundColor: singleDonate.color.primary_color}}>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};
SingleDonation.propTypes = {
    singleDonate: PropTypes.object.isRequired
}

export default SingleDonation;