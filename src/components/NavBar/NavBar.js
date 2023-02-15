import styles from './NavBar.module.scss';
import Container from '../Container/Container';

const NavBar = () => {

    return (
        <nav className={styles.nav}>
            <Container>
                <section className={styles.navi}>
                    <span className={styles.icon + ' fa fa-tasks'} />
                    <li className={styles.list}>
                        <a href='/' className={styles.link}>Home</a>
                        <a href='/favorite' className={styles.link}>Favorite</a>
                        <a href='/about' className={styles.link}>About</a>
                    </li>
                </section>    
            </Container>
        </nav>
    )
}

export default NavBar;