import React from 'react';
import AppContext from '../../context';
import List from '../../components/List/List';

const WatchList = () => (
    <AppContext.Consumer>
        {(context) => (
            <List items={context.movie}/>
        )}
    </AppContext.Consumer>
);

export default WatchList;