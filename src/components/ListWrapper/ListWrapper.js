import React from 'react';
import ListItem from './ListItem/ListItem';
import './ListWrapper.css';

const ListWrapper = ({ items }) => (
    <ul className="listWrapper__wrapper">
       {items.map(item => (
            < ListItem key={item.title} {...item} />
       ))}
    </ul>
);

export default ListWrapper;