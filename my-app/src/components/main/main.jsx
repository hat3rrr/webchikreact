import styles from './main.module.scss';
// import logouni from './file:///C:/Users/я/Downloads/logounidubna.svg

const Header = () => {
    return (
            <main className={styles.main}>
                <div className={styles.image}>
                    {/* Здесь разместите изображение вашего университета */}
                    <img src="https://smapse.ru/storage/2023/08/smapse-filial-protvino-8.jpg" alt="Dubna University" />
                </div>
                <div className={styles.description}>
                    <h2>Немного об университете</h2>
                    <p>Государственный университет «Дубна» — высшее учебное заведение в технополисе
                        Дубна Московской области. Университет основан при участии
                        Российской академии естественных наук, Объединённого института ядерных
                        исследований, администрации города Дубны. 
                        Первоначальный учредитель — правительство Московской области.
                        С 2001 года обладает статусом губернаторского университета
                        Университет образован 1 октября 1994 года при активном участии администрации г. Дубны, Российской академии естественных наук, руководства Объединенного института ядерных исследований (ОИЯИ). Первым ректором стал президент РАЕН профессор Олег Леонидович Кузнецов, учредитель университета – правительство Московской области. Мы считаемся вузом областного значения и нацелены на подготовку кадров для нужд региона. Специфика университета в том, что он готовит специалистов для важных наукоемких и высокотехнологичных проектов, реализуемых в Подмосковье рядом организаций.

К ним относятся ОИЯИ, Особая экономическая зона «Дубна», Институт физики высоких энергий имени А.А. Логунова НИЦ «Курчатовский институт» в Протвино. У нас есть очень крупные партнеры (например, международный аэропорт Шереметьево, Мосэнерго, ИТ-компании, предприятия ОПК). Растет значимость университета как центра, на базе которого в рамках федерального проекта «Учитель будущего» проходят курсы повышения педагогического мастерства учителя подмосковных школ.</p>
                </div>
                
            </main>
        
    );
}

export default Header;
