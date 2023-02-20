import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getFavorite } from '../../redux/cardsRedux';
import Card from '../Card/Card';
import { Navigate } from 'react-router-dom';

const Favorite = () => {

  const favoriteCards = useSelector(getFavorite);

  if(favoriteCards.length === 0) return <Navigate to="/" />

  return (
    <div className={styles.hero}>
      <PageTitle>Favorite</PageTitle>
        <article className={styles.column}>
            <ul className={styles.cards}>
                {favoriteCards.map(card => 
                <Card 
                  key={card.id}
                  cardId={card.id} 
                  title={card.title}
                  isFavorite={card.isFavorite} />)}
            </ul>
        </article>
    </div>
  );
};

  export default Favorite;