import styles from './Header.module.scss';
const Header = () => {
    return (
        <div>

            <header calssName = {styles.header}>
                <h1>
                    Dubna university
                </h1>
                
        </header>
        <nav className = {styles.nav}>
            <a href = "#"> One </a>
        </nav>
    
            
        </div>

    );
}

export default Header