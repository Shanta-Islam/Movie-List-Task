import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonationItem } from "../../utility/localstorage";
import SingleDonation from "../SingleDonation/SingleDonation";

const Donation = () => {
    const donationCatList = useLoaderData();
    const [donation, setDonation] = useState([]);
    const[isShow, setIsShow] = useState(false);
    
    useEffect(() => {
        const storedCatIds = getStoredDonationItem(); 
        if (donationCatList.length > 0) {
            const donationItems = [];
            for (const id of storedCatIds) {
                const donationItem = donationCatList.find(donationItem => donationItem.id === id);
                if (donationItem) {
                    donationItems.push(donationItem);
                }
            }
            setDonation(donationItems);
            
        }
        
    }, [donationCatList])
    return (
        <div className="py-32">
            <div className="py-32 px-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
                {
                   isShow ? donation.map(singleDonate => <SingleDonation key={singleDonate.id} singleDonate={singleDonate}></SingleDonation>)
                   : donation.slice(0,4).map(singleDonate => <SingleDonation key={singleDonate.id} singleDonate={singleDonate}></SingleDonation>)
                }
            </div>
            {
                donation.length > 4 ? <button onClick={()=>setIsShow(!isShow)} className="mx-auto">See All</button> : ''
            }
        </div>

    );
};

export default Donation;