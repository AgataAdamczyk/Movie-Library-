import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Title from '../Title/Title';
import styles from './Form.module.scss';

const Form = ({ submitFn }) => (
    <div className={styles.wrapper}>
        <Title>Add new movie</Title>
        <form autoComplete="off" className={styles.form} onSubmit={submitFn}>
            <Input 
                name="name"
                label="Title"
                maxLength={30}
            />
             <Input 
                name="imdbLink"
                label="Imdb link"
            />
             <Input 
                name="image"
                label="Image"
            />
             <Input 
                tag="textarea"
                name="description"
                label="Description"
            />

            <Button>Add new position</Button>
        </form>
    </div>
);

export default Form;
