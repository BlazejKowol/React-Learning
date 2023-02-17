import styles from './NavBar.module.scss';
import Container from '../Container/Container';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    return (
        <nav className={styles.nav}>
            <Container>
                <section className={styles.navi}>
                    <span className={styles.icon + ' fa fa-tasks'} />
                    <li className={styles.list}>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink></li>
                    </li>
                </section>    
            </Container>
        </nav>
    )
}

export default NavBar;

