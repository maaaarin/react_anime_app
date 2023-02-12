import { removeFavorite } from '../../app/store';
import { useDispatch } from 'react-redux';

const FavoriteItem = ( { favorite } ) => {    

    const dispatch = useDispatch();

    return (
        <div className='favoriteItem'>
            <div className="favoriteInformation">
                <span id='favoriteTitle'>{favorite.title.english ? favorite.title.english : favorite.title.romaji}</span>
            </div>
            <div className="favoriteRemove" onClick={() => {dispatch(removeFavorite(favorite.id))}}>
                <svg id='favoriteRemoveIcon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8.931.586 7 3l1.5 4-2 3L8 15C22.534 5.396 13.757-2.21 8.931.586ZM7.358.77 5.5 3 7 7l-1.5 3 1.815 4.537C-6.533 4.96 2.685-2.467 7.358.77Z"/>
                </svg>
            </div>
            <img className='favoriteBanner' src={favorite.bannerImage ? favorite.bannerImage : favorite.coverImage.extraLarge} alt=""/>
        </div>
    )
}

export default FavoriteItem