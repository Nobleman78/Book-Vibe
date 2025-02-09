import { useLoaderData, useParams } from "react-router-dom";
import './Bookdetails.css'
import { addToReadList, storeWhiteList } from "../../assets/utility/book";
const BookDetail = () => {
    const { bookId } = useParams();
    const data = useLoaderData();
    const id = parseInt(bookId);
    const book = data.find(book => book.bookId === id);
    const { bookId: currentBookId, image, bookName, author, category, tags, rating,
        yearOfPublishing, publisher, totalPages, review } = book;
    const handleMarkAsRead = (id) => {
        addToReadList(id)


    }
    const handleMarkAsWhite = (id) => {
        storeWhiteList(id);
    }
    return (
        <div className="bookdetails-container">
            <div className="bookdetails-book">
                <img className="book-id" src={image} alt="" />
            </div>
            <div className="book-details">
                <div className="b-detail">
                    <h2 className="bookname">{bookName}</h2>
                    <p className="author">By : {author}</p>
                    <hr />
                    <p className="catagory">{category}</p>
                    <hr />
                    <p className="review-text">Review : {review}</p>
                    <div className='flex  gap-4'>
                        <h2>Tags</h2>
                        {
                            tags.map((tag, idx) => <button key={idx} className='btn-btn-xs rounded p-1 mb-4 bg-green-400'>{tag}</button>)
                        }
                    </div>
                    <hr />

                    <h2 className="total-pages">Number of Pages <span className="ml-[65px]"> {totalPages}</span></h2>
                    <h2 className="mb-3" >Publisher <span className="ml-[121px] ">{publisher}</span></h2>
                    <h2 className="mb-3">Year of Publishing <span className="ml-[59px]">{yearOfPublishing}</span></h2>
                    <h2 className="mb-4">Rating <span className="ml-[140px]"> {rating}</span></h2>

                    <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-outline mr-4 btn-accent">Mark as read</button>
                    <button onClick={() => handleMarkAsWhite(bookId)} className="btn btn-accent">Add to Whitelist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetail ;