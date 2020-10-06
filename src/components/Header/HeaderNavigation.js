import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './HeaderNavigation.module.scss';

const HeaderNavigation = () => (
    <nav>
        <ul className={styles.wrapper}>
            <li className={styles.navItem}>
                <NavLink exact
                activeClassName={styles.navItemLinkActive}
                className={styles.navItemLink} 
                to="/">WatchList</NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink 
                activeClassName={styles.navItemLinkActive}
                className={styles.navItemLink} 
                to="/reviews">Reviews</NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink
                activeClassName={styles.navItemLinkActive}
                className={styles.navItemLink} 
                to="/quotes">Quotes</NavLink>
            </li>
        </ul>
    </nav>
);

export default HeaderNavigation;