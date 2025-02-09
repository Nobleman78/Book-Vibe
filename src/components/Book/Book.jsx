import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const Book = ({ book }) => {
    const {bookId, image, bookName, tags, author, category } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card w-94 shadow-sm bg-white p-5 ">
                <figure className='bg-blue-300 py-8 rounded-2xl' >
                    <img
                        src={image}
                        className='h-[200px] w-[150px]'
                        alt={image} />
                </figure>
                <div className="card-body">
                    <div className='flex  gap-4'>
                        {
                            tags.map((tag, idx) => <button key={idx} className='btn-btn-xs rounded p-1 bg-green-400'>{tag}</button>)
                        }
                    </div>
                    {/* <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Responsive</button> */}
                    <h2 className="card-title text-black">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p className='text-black'>By : {author}</p>
                    <div className='border-t-2 border-dashed'></div>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline-black p-4">{category}</div>

                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="1 star" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="2 star" defaultChecked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="3 star" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="4 star" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="5 star" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>

    );
};
Book.propTypes = {
    book: PropTypes.object
}

export default Book;