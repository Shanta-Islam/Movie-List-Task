import PropTypes from 'prop-types'; 
const Banner = ({handleSearchClick, setSearchVal}) => { 
    
    return (
        <div className="hero min-h-screen bg-gray-700">
            <div className="hero-content text-center text-neutral-content"> 
                <div className="text-center">
                    <h1 className="mb-5 text-5xl font-bold text-white mt-40">Unlimited movies, tv shows and more</h1>
                    <div className="flex justify-center overflow-hidden ">
                        <input onChange={(e) => setSearchVal(e.target.value)} type="text" placeholder="Search here...." className="input input-bordered w-full max-w-xs rounded-md rounded-r-none focus:outline-none text-black" />
                        <button onClick={handleSearchClick} className="btn bg-[#FF444A] text-white rounded-md rounded-l-none">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {
    handleSearchClick: PropTypes.func,
    setSearchVal : PropTypes.func
}
export default Banner;