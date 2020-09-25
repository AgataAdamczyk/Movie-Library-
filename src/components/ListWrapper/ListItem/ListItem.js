import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.module.scss';

const ListItem = ({ 
    image,
    title, 
    description, 
    imdbLink
 }) => (
    <li className={styles.wrapper}>
        <img 
            src={image} 
            className={styles.image}
            alt={title}
        />
        <div>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            <a href={imdbLink}
            target="_blank" rel="noopener noreferrer"
            className={styles.button}>visit imdb page</a>
        </div>
    </li>
);

ListItem.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    imdbLink: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
    description: 'Click Imdb button',
}

export default ListItem;