import styles from './Card.module.scss';
import Button from '../Button/Button';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { toggleCardFavorite } from '../../redux/store';


const Card = props => {

    const dispatch = useDispatch();
    const [isFavorite, setIsFavorite] = useState(props.isFavorite);
    const cardId = props.cardId;

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(toggleCardFavorite(cardId));
        setIsFavorite('');
    }

    return (
        <li className={styles.card}>
            {props.title}
            <Button 
            className={clsx(styles.favoriteIcon, isFavorite && styles.isFavorite)} 
            onClick={handleSubmit}>
                <i className='fa fa-star-o'></i>
            </Button>
        </li>
        
    );
};


export default Card;