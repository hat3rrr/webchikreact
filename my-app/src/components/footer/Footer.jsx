import styles from './footer.module.scss';
// import logouni from './file:///C:/Users/я/Downloads/logounidubna.svg

const Header = () => {
    return (
       

            <footer className={styles.footer}>
                <div className={styles.footer}>
                    <p>© 2024 Dubna University</p>
                    <div className={styles.links}>
                        <a href="#">Vk</a>
                        <a href="#">Tg</a>
                        <a href="#">Wiki</a>
                    </div>
                </div>
            </footer>
    );
}

export default Header;
