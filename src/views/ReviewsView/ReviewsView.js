import React from 'react';
import AppContext from '../../context';
import List from '../../components/List/List';

const ReviewsView = () => (
    <AppContext.Consumer>
        {(context) => (
            <List items={context.review}/>
        )}
    </AppContext.Consumer>
);

export default ReviewsView;