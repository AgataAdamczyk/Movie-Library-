import React from 'react';
import ListItem from './ListItem';
import styles from './List.module.scss';

const List = ({ items }) => (
    <ul className={styles.listWrapper}>
       {items.map(item => (
            < ListItem key={item.title} {...item} />
       ))}
    </ul>
);

export default List;