import React, { Component } from 'react';
import './SearchBox.styles.scss';

export default class SearchBox extends Component {
  render() {
    const { handleChange } = this.props;

    return (
      <input
        className='search-box monsters-search-box'
        type='search'
        placeholder='Search a Monster'
        name='search'
        onChange={handleChange}
      />
    );
  }
}
