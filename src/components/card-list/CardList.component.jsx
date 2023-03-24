import React, { Component } from 'react';
import Card from '../card/Card.component';
import './CardList.styles.scss';

export default class CardList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.props = props;
  // }

  render() {
    const { filtered } = this.props;
    return (
      <div className='card-list'>
        {filtered?.length > 0
          ? filtered.map((monster) => (
              <Card key={monster.id} monster={monster} />
            ))
          : 'loading'}
      </div>
    );
  }
}
