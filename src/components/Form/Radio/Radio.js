import React from 'react';
import styles from './Radio.module.scss';

const Radio = ({
    id,
    checked,
    changeFn,
    children
 }) => (
    <label for={id} className={styles.radio}>
        <input
            id={id}
            type="radio"
            checked={checked}
            onChange={changeFn}
        />
        <div className={styles.radioButton} /> {children}
    </label> 
);

export default Radio;