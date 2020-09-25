import React from 'react';
import './Form.css';

const Form = ({ submitFn }) => (
    <div className="form__wrapper">
        <h2>Add new movie</h2>
        <form className="form__form" onSubmit={submitFn}>
            <div className="form__item">
                <input 
                    type="text"
                    name="title"
                    id="title"
                    placeholder=" " 
                    maxLength="30" 
                />
                <label htmlFor="title">Title</label>
                <div className="form__item__bar"></div>
            </div>
            <div className="form__item">
                <input 
                    type="text"
                    name="imdbLink"
                    id="imdbLink"
                    placeholder=" " 
                />
                <label htmlFor="imdbLink">Imdb link</label>
                <div className="form__item__bar"></div>
            </div>
            <div className="form__item">
                <input 
                    type="text"
                    name="image"
                    id="image"
                    placeholder=" " 
                />
                <label htmlFor="image">Image</label>
                <div className="form__item__bar"></div>
            </div>
            <div className="form__item">
                <textarea
                    type="text"
                    name="description"
                    id="description"
                    placeholder=" " 
                />
                <label htmlFor="description">Description</label>
                <div className="form__item__bar"></div>
            </div>
           
            <button className="form__button" type="submit">Add new position</button>
        </form>
    </div>
  
);

export default Form;
