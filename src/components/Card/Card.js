import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { removeCard, toggleCardFavorite } from '../../redux/cardsRedux';


const Card = props => {

    const dispatch = useDispatch();
    const [isFavorite, setIsFavorite] = useState(props.isFavorite);
    const cardId = props.cardId;

    const toggleFavorite = e => {
        e.preventDefault();
        dispatch(toggleCardFavorite(cardId));
        setIsFavorite(!isFavorite);
    }

    const cardRemove = e => {
        e.preventDefault();
        dispatch(removeCard(cardId))
    }

    return (
        <li className={styles.card}>
            {props.title}
            <div className={styles.button}>
                <button 
                className={clsx(styles.icon, isFavorite && styles.isFavorite)} 
                onClick={toggleFavorite}>
                    <i className='fa fa-star-o'></i>
                </button>
                <button 
                className={clsx(styles.icon)} 
                onClick={cardRemove}>
                    <i className='fa fa-trash'></i>
                </button>
            </div>
        </li>
        
    );
};


export default Card;