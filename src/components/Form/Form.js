import React from 'react';
import AppContext from '../../context';
import styles from './Form.module.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Title from '../Title/Title';
import Radio from './Radio/Radio';

const types = {
    movie: 'movie',
    review: 'review',
    quote: 'quote',
};

const descriptions = {
    movie: 'movie to WatchList',
    review: 'Your review',
    quote: 'best quote',
};

class Form extends React.Component {
    state = {
        type: types.movie,
        title: "",
        imdbLink: "",
        image: "",
        description: "",
    };

    handeRadioButtonChange = type => {
        this.setState({
            type: type,
        });
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render() {
        const { type } = this.state;

        return (
            <AppContext.Consumer>
                {(context) => (
                    <div className={styles.wrapper}>
                    <Title>Add new {descriptions[type]}</Title>
                    <form 
                        autoComplete="off" 
                        className={styles.form} 
                        onSubmit={(e) => context.addItem(e, this.state)}
                    >
                        <div className={styles.formOptions}>
                            <Radio
                                id={types.movie}
                                checked={type === types.movie}
                                changeFn={() => this.handeRadioButtonChange(types.movie)}
                            >
                                Movies
                            </Radio>
                            <Radio
                                id={types.review}
                                checked={type === types.review}
                                changeFn={() => this.handeRadioButtonChange(types.review)}
                            >
                                Reviews
                            </Radio>
                            <Radio
                                id={types.quote}
                                checked={type === types.quote}
                                changeFn={() => this.handeRadioButtonChange(types.quote)}
                            >
                                Quotes
                            </Radio>
                        </div>
                
                        <Input 
                            onChange={this.handleInputChange}
                            value={this.state.title}
                            name="title"
                            label="Movie title"
                            maxLength={30}
                        />
                        {type !== types.quote? (
                        <Input 
                            onChange={this.handleInputChange}
                            value={this.state.imdbLink}
                            name="imdbLink"
                            label="Imbd link"
                        />
                        ) : null}
                        {type === types.movie ? (
                        <Input 
                            onChange={this.handleInputChange}
                            value={this.state.image}
                            name="image"
                            label="Image"
                        /> 
                        ) : null}
                        <Input 
                            onChange={this.handleInputChange}
                            value={this.state.description}
                            tag="textarea"
                            name="description"
                            label={type === types.quote ? "Quote" : "Description"}
                        />
            
                        <Button>Add position</Button>
                    </form>
                </div>
                )}
            </AppContext.Consumer>
        )
    }
};

export default Form;
