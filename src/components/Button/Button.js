import styles from './Button.module.scss';

const Button = parametr => { // parametr tutaj oznacza to samo co atrybut w HTML. Jest to równoznaczne z: const parametr = {wlasciwosc: "search"}
    return <button className={styles.button}>{parametr.children}</button>
}

export default Button;