const getStoredItem = ()=>{
    const storedItem = localStorage.getItem('stored-items');
    if(storedItem){
        return JSON.parse(storedItem);

    }
    return [];
}

const saveItem = id =>{
    const storedItems = getStoredItem();
    const exists = storedItems.find(donationId=> donationId == id);
    if(!exists){
        storedItems.push(id);
        localStorage.setItem('stored-items', JSON.stringify(storedItems))
    }
}
export {getStoredItem, saveItem};   