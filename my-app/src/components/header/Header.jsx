import styles from './Header.module.scss';
// import logouni from './file:///C:/Users/я/Downloads/logounidubna.svg

const Header = () => {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img src="https://www.svgrepo.com/show/533462/university.svg" alt="Dubna University Logo" />
                    <h2>Dubna University</h2>
                </div>
            </header>
        </div>
    );
}

export default Header;
