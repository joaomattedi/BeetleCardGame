import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Filter extends Component {
  render() {
    const { setNameFilter } = this.props;
    return (
      <input type="text" data-testid="name-filter" onChange={ setNameFilter } />
    );
  }
}

Filter.propTypes = {
  setNameFilter: PropTypes.func.isRequired,
};
