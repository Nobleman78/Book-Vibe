import { toast } from "react-toastify";

const getBooksList =()=>{
    //We are getting the book-list from the local storage as a string.
    const listStr = localStorage.getItem('read-list');

    // If we get read-book-list from the local storage then we will convert 
    // it into as a Object.
    if(listStr){
        const storeListObject = JSON.parse(listStr);
        return storeListObject;
    }
    // If not found any read-list then it return an empty array.
    else{
        return [];

    }
}
const addToReadList =(id)=>{
    const getBook = getBooksList();
    if(getBook.includes(id)){
        console.log(id,'This book is already in the list')
    } 
    else{
        getBook.push(id);
        const storeListStr = JSON.stringify(getBook);
        localStorage.setItem('read-list',storeListStr);
        toast.success('Added to the read-list', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            
            });
    }
}


const getStoreWhiteList =()=>{
    const getWhitelist = localStorage.getItem('white-list');
    if(getWhitelist){
        const storeWhiteList = JSON.parse(getWhitelist);
        return storeWhiteList
    }
    else{
        return [];
    }
}

const storeWhiteList =(id)=>{
    const getList = getStoreWhiteList();
    if(getList.includes(id)){
        console.log(id,'This is already in the list.')
    }
    else{
        getList.push(id);
        const whiteListStr = JSON.stringify(getList);
        localStorage.setItem('white-list',whiteListStr);
        toast.success('Added to the white-list', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            
            });
        
    }
}
export {addToReadList,getBooksList,storeWhiteList}
