import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Filter extends Component {
  render() {
    const { setNameFilter, setTrunfoFilter, setRareFilter, filterTrunfo } = this.props;
    return (
      <div>
        <label htmlFor="nameFilter">
          <input
            name="nameFilter"
            type="text"
            data-testid="name-filter"
            onChange={ setNameFilter }
            disabled={ filterTrunfo }
          />
        </label>
        <label htmlFor="searchTrunfo">
          <input
            type="checkbox"
            name="searchTrunfo"
            data-testid="trunfo-filter"
            onClick={ setTrunfoFilter }
          />
        </label>
        <label htmlFor="rareFilter">
          <select
            name="rareFilter"
            data-testid="rare-filter"
            onChange={ setRareFilter }
            disabled={ filterTrunfo }
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  filterTrunfo: PropTypes.bool.isRequired,
  setNameFilter: PropTypes.func.isRequired,
  setRareFilter: PropTypes.func.isRequired,
  setTrunfoFilter: PropTypes.func.isRequired,
};
