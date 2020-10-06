import React from 'react';
import '../../index.css';
import AppContext from '../../context';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WatchList from '../WatchList/WatchList';
import ReviewsView from '../ReviewsView/ReviewsView';
import QuotesView from '../QuotesView/QuotesView';
import Header from '../../components/Header/Header';

import inceptionImage from '../../assets/images/inception.jpeg';
import sevenImage from '../../assets/images/seven.jpg';
import suckerPunchImage from '../../assets/images/suckerPunch.jpg';
import runningScaredImage from '../../assets/images/runningScared.jpg';
import Modal from '../../components/Modal/Modal';


class Root extends React.Component {
  state = {
    twitter: [
        {
    image: inceptionImage,
    title: 'Inception',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    imdbLink: 'https://www.imdb.com/title/tt1375666/',
  },
  {
    image: sevenImage,
    title: 'Se7en',
    // description: 'Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.',
    imdbLink: 'https://www.imdb.com/title/tt0114369/?ref_=fn_al_tt_1',
  },
  {
    image: suckerPunchImage,
    title: 'Sucker Punch',
    description: 'A young girl institutionalized by her abusive stepfather retreats to an alternative reality as a coping strategy and envisions a plan to help her escape.',
    imdbLink: 'https://www.imdb.com/title/tt0978764/?ref_=fn_al_tt_1',
  },
  {
    image: runningScaredImage,
    title: 'Running Scared',
    description: 'A low-ranking thug is entrusted by his crime boss to dispose of a gun that killed corrupt cops, but things get out of control when the gun ends up in wrong hands.',
    imdbLink: 'https://www.imdb.com/title/tt0404390/?ref_=nv_sr_srsg_0',
  },
    ],
    article: [],
    note: [],
    isModalOpen: false,
  };

  addItem = (e, newItem) => {
    e.preventDefault();

    this.setState(prevState => ({
      [newItem.type]: [...prevState[newItem.type], newItem],
    }));
    this.closeModal();
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;
    const contextElements = {
      ...this.state,
      addItem: this.addItem
    }

    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          < Header openModalFn={this.openModal} />
          <Switch>
            <Route exact path="/" component={WatchList} />
            <Route exact path="/articles" component={ReviewsView} />
            <Route exact path="/notes" component={QuotesView} />
          </Switch>
          { isModalOpen && < Modal closeModalFn={this.closeModal} /> }
        </AppContext.Provider>
      </BrowserRouter>
    )
  }
};

export default Root;
