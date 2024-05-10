import React, { useState } from 'react';
import { Box, BottomNavigation, BottomNavigationAction, Icon } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import InfoIcon from '@mui/icons-material/Info';
import GetAppIcon from '@mui/icons-material/GetApp';
import styles from './Header.module.scss';

const Header = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const links = [
        { label: 'Home', icon: HomeIcon, href: '/' },
        { label: 'Список курсов', icon: ListIcon, href: '/catalog' },
        { label: 'About', icon: InfoIcon, href: '/about' },
        { label: 'Список с Api', icon: GetAppIcon, href: '/catalogapi' },
    ];

    return (
        <div>
            <header className={styles.header}>
            <div className={styles.logo}>
                <img src="https://www.svgrepo.com/show/533462/university.svg" alt="Dubna University Logo" />
                <h2>Dubna University</h2>
            </div>
            </header>
            <nav className = {styles.nav}>
                <Box sx={{ width: 500 }}>
                    <BottomNavigation value={value} onChange={handleChange} showLabels>
                        {links.map((link, index) => (
                            <BottomNavigationAction
                                key={index}
                                label={link.label}
                                icon={<link.icon />}
                                href={link.href}
                                sx={{ color: 'black', '&:hover': { backgroundColor: 'transparent' } }}
                            />
                        ))}
                    </BottomNavigation>
                </Box>
            </nav>
    </div>);
};


export default Header;