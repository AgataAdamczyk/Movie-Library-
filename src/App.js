import React from 'react';
import './index.css';
import List from './components/List/List';
import Form from './components/Form/Form';

import inceptionImage from './assets/images/inception.jpeg';
import sevenImage from './assets/images/seven.jpg';
import suckerPunchImage from './assets/images/suckerPunch.jpg';
import runningScaredImage from './assets/images/runningScared.jpg';

const initialStateItems = [
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
]

class App extends React.Component {
  state = {
    items: [...initialStateItems]
  }

  addMovie = (e) => {
    e.preventDefault();
    
    const newItem = {
      title: e.target[0].value,
      imdbLink: e.target[1].value,
      image: e.target[2].value,
      description: e.target[3].value,
    }

    this.setState(prevState => ({
      items: [...prevState.items, newItem],
    }));

    e.target.reset();
  }

  render() {
    return (
      <div>
        < List
          items={this.state.items}
        />
        < Form submitFn={this.addMovie} />
      </div>
    )
  }
}

export default App;
