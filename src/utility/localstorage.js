const getStoredDonationItem = ()=>{
    const storedDonationItem = localStorage.getItem('donation-items');
    if(storedDonationItem){
        return JSON.parse(storedDonationItem);

    }
    return [];
}

const saveDonationItem = id =>{
    const storedDonationItems = getStoredDonationItem();
    const exists = storedDonationItems.find(donationId=> donationId == id);
    if(!exists){
        storedDonationItems.push(id);
        localStorage.setItem('donation-items', JSON.stringify(storedDonationItems))
    }
}
export {getStoredDonationItem, saveDonationItem};   