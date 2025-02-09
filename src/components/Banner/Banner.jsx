import bannerImage from '../../assets/Book.avif'
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner-container">
            <div className='banner-description '>
                <p className='banner-text'>Books to freshen up your bookshelf</p>
                <button className='banner-button'>View The List</button>
            </div>
            <div>
                <img className='banner-image' src="dating-bg.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;