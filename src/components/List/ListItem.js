import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.module.scss';
import Button from '../Button/Button';
import Title from '../Title/Title';

const ListItem = ({ 
    image,
    title, 
    description, 
    imdbLink
 }) => {

    const ImageTag = image ? "img" : "div";

    return(
        <li className={styles.wrapper}>
        <ImageTag 
            src={image} 
            className={image ? styles.image : styles.imageNone}
            alt={title}
        />
        <div>
            <Title>{title}</Title>
            <p className={styles.description}>{description}</p>
            <Button href={imdbLink}>Imdb page</Button>
        </div>
    </li>
    )
 };

ListItem.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    imdbLink: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
    image: null,
    description: 'Click Imdb button',
}

export default ListItem;