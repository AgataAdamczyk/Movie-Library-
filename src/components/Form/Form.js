import React from 'react';
import styles from './Form.module.scss';

const Form = ({ submitFn }) => (
    <div className={styles.wrapper}>
        <h2>Add new movie</h2>
        <form className={styles.form} onSubmit={submitFn}>

            <div className={styles.formItem}>
                <input
                    className={styles.input}
                    type="text"
                    name="title"
                    id="title"
                    placeholder=" " 
                    maxLength="30" 
                />
                <label className={styles.label} htmlFor="title">Title</label>
                <div className={styles.formItemBar}></div>
            </div>

            <div className={styles.formItem}>
                <input 
                    className={styles.input}
                    type="text"
                    name="imdbLink"
                    id="imdbLink"
                    placeholder=" " 
                />
                <label className={styles.label} htmlFor="imdbLink">Imdb link</label>
                <div className={styles.formItemBar}></div>
            </div>
            <div className={styles.formItem}>
                <input 
                    className={styles.input}
                    type="text"
                    name="image"
                    id="image"
                    placeholder=" " 
                />
                <label className={styles.label} htmlFor="image">Image</label>
                <div className={styles.formItemBar}></div>
            </div>
            <div className={styles.formItem}>
                <textarea
                    className={styles.textarea}
                    name="description"
                    id="description"
                    placeholder=" " 
                />
                <label className={styles.label} htmlFor="description">Description</label>
                <div className={styles.formItemBar}></div>
            </div>
           
            <button  className={styles.button}>Add new position</button>
        </form>
    </div>
);

export default Form;
