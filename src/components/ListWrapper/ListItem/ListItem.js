import React from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';

const ListItem = ({ 
    image,
    title, 
    description, 
    link
 }) => (
    <li className="listItem__wrapper">
        <img 
            src={image} 
            className="listItem__image"
            alt={title}
        />
        <div>
            <h2 className="listItem__title">{title}</h2>
            <p className="listItem__description">{description}</p>
            <a href={link}
            className="listItem__button">visit imdb page</a>
        </div>
    </li>
);

ListItem.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    link: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
    description: 'Click Imdb button',
}

export default ListItem;