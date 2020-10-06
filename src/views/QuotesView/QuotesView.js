import React from 'react';
import AppContext from '../../context';
import List from '../../components/List/List';

const QuotesView = () => (
    <AppContext.Consumer>
        {(context) => (
            <List items={context.quote}/>
        )}
    </AppContext.Consumer>
);

export default QuotesView;