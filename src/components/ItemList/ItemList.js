import React, { Component } from 'react';
import uid from 'uid';
import PropTypes from 'prop-types';

import './ItemList.css';

class ItemList extends Component {
  render() {
    if (this.props.data.length === 0) {
      return null;
    }

    return (
      <div className={`item-list item-list-${this.props.orientation}`}>
        {this.buildRows()}
      </div>
    );
  }

  buildRows() {
    const data = this.prepareData();
    return data.map((item) => {
      const key = item.id || uid();
      return React.createElement(this.props.itemComponent, {...item, key, ...this.props.injectProps});
    });
  }

  prepareData() {
    let data = this.props.data;

    if (Object.keys(this.props.sortBy).length === 0) {
      return data;
    }

    let sortField = this.props.sortBy.field;

    if (this.props.sortBy.type === 'asc') {
      data = data.sort((a, b) => a[sortField] - b[sortField]);
    }

    if (this.props.sortBy.type === 'desc') {
      data = data.sort((a, b) => b[sortField] - a[sortField]);
    }

    return data;
  }
}

ItemList.defaultProps = {
  sortBy: {},
  orientation: 'vertical',
  injectProps: {},
}

ItemList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  itemComponent: PropTypes.func.isRequired,
  injectProps: PropTypes.object,
  sortBy: PropTypes.objectOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      field: PropTypes.string.isRequired,
    })
  ),
}

export default ItemList;