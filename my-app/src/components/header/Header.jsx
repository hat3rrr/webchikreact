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

            <main className={styles.main}>
                <div className={styles.image}>
                    {/* Здесь разместите изображение вашего университета */}
                    <img src="https://smapse.ru/storage/2023/08/smapse-filial-protvino-8.jpg" alt="Dubna University" />
                </div>
                <div className={styles.description}>
                    <h2>About Dubna University</h2>
                    <p>Государственный университет «Дубна» — высшее учебное заведение в технополисе
                        Дубна Московской области. Университет основан при участии
                        Российской академии естественных наук, Объединённого института ядерных
                        исследований, администрации города Дубны. 
                        Первоначальный учредитель — правительство Московской области.
                        С 2001 года обладает статусом губернаторского университета</p>
                </div>
            </main>

            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <p>© 2024 Dubna University</p>
                    <div className={styles.links}>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Header;
