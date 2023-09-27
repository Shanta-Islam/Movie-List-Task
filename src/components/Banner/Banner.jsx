import PropTypes from 'prop-types'; 
const Banner = ({handleSearchClick, setSearchVal}) => { 
    
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/6NBd5tv/Rectangle-4281.png)' }}>
            <div className="hero-overlay bg-opacity-80 bg-white"></div>
            <div className="hero-content text-center text-neutral-content"> 
                <div className="text-center">
                    <h1 className="mb-5 text-5xl font-bold text-[#0B0B0B] mt-40">I Grow By Helping People In Need</h1>
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