import React from 'react';
import ListItem from './ListItem/ListItem';
import styles from './ListWrapper.module.scss';

const ListWrapper = ({ items }) => (
    <ul className={styles.listWrapper}>
       {items.map(item => (
            < ListItem key={item.title} {...item} />
       ))}
    </ul>
);

export default ListWrapper;