import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getBooksList } from "../../assets/utility/book";

const Listedbook = () => {
    const [readlist, setReadList] = useState([]);
    const allBooks = useLoaderData();
    useEffect(() => {
        const storeBookList = getBooksList();
        const storedRead = storeBookList.map(id => parseInt(id))

        const readList = allBooks.filter(book => storedRead.includes(parseInt(book.bookId)))
        setReadList(readList)
        console.log(readList, storedRead, allBooks)
    }, [])


    const [activeTab, setActiveTab] = useState('readBooks');

    const handleReadBookButton = () => {
        setActiveTab('readBooks');

    }
    const handleWishListButton = () => {
        setActiveTab(' wishlistBooks');

    }

    return (
        <div>
            <h2 className="text-4xl text-center mx-auto mb-[140px] border border-gray-100 rounded-md p-4 font-bold bg-gray-100 ">Books</h2>
            <div>
                <nav className="mx-auto rounded-md">
                    <div className="flex ">
                        <div className="pr-4">
                            <button className="" onClick={handleReadBookButton}>Read Books</button>
                        </div>
                        <button onClick={handleWishListButton}>Wishlist Books</button>
                    </div>

                    {
                        activeTab === 'readBooks' && (
                            <div>
                                {/* Read Books List */}
                                {
                                    readlist.map(book => <div className='mx-auto px-4 my-3 border py-2  rounded flex items-center gap-5' key={book.bookId}>
                                        <div>
                                            <img src={book.image} alt="Book Image" />
                                        </div>
                                        <div>
                                            <h1>{book.bookName}</h1>
                                            <h1>By:{book.author}</h1>
                                        </div>
                                    </div>)
                                }
                            </div>
                        )
                    }

                    {
                        activeTab === 'wishlistBooks' && (
                            <div>
                                {/* Wishlist book list */}
                            </div>
                        )
                    }
                </nav>
            </div>
        </div>
    );
};

export default Listedbook;