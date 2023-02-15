import styles from './PageNotFound.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const PageNotFound= () => {
  return (
    <div className={styles.hero}>
      <PageTitle>Error: 404 not found</PageTitle>
    </div>
  );
};

  export default PageNotFound;