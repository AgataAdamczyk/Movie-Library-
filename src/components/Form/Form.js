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
    movie: 'Movie',
    review: 'Review',
    quote: 'Quote',
};

class Form extends React.Component {
    state = {
        activeOption: types.movie,
        title: "",
        imdbLink: "",
        image: "",
        description: "",
    };

    handeRadioButtonChange = (type) => {
        this.setState({
            activeOption: type,
        });
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render() {

        const { activeOption } = this.state;

        return (
            <AppContext.Consumer>
                {(context) => (
                    <div className={styles.wrapper}>
                    <Title>Add new {descriptions[activeOption]}</Title>
                    <form 
                        autoComplete="off" 
                        className={styles.form} 
                        onSubmit={(e) => context.addItem(e, this.state)}
                    >
                        <div className={styles.formOptions}>
                            <Radio
                                id={types.movie}
                                checked={activeOption === types.movie}
                                changeFn={() => this.handeRadioButtonChange(types.movie)}
                            >
                                Movies
                            </Radio>
                            <Radio
                                id={types.review}
                                checked={activeOption === types.review}
                                changeFn={() => this.handeRadioButtonChange(types.review)}
                            >
                                Reviews
                            </Radio>
                            <Radio
                                id={types.quote}
                                checked={activeOption === types.quote}
                                changeFn={() => this.handeRadioButtonChange(types.quote)}
                            >
                                Quotes
                            </Radio>
                        </div>
                
                        <Input 
                            onChange={this.handleInputChange}
                            value={this.state.title}
                            name="title"
                            label={activeOption === types.movie ? "Movie title" : "Title"}
                            maxLength={30}
                        />
                        {activeOption !== types.quote? (
                        <Input 
                            onChange={this.handleInputChange}
                            value={this.state.imdbLink}
                            name="imdbLink"
                            label={activeOption === types.movie ? "Twitter link" : "Imdb link"}
                        />
                        ) : null}
                        {activeOption === types.movie ? (
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
                            label="Description"
                        />
            
                        <Button>Add new position</Button>
                    </form>
                </div>
                )}
            </AppContext.Consumer>
        )
    }
};

export default Form;
