import React, { Component } from 'react';
import uid from 'uid';

export default class ItemList extends Component {
  render() {
    if (this.props.data.length === 0) {
      return null;
    }

    return (
      <div className='item-list'>
        {this.buildRows()}
      </div>
    );
  }

  buildRows() {
    return this.props.data.map((item) => {
      const key = item.id || uid();
      return React.createElement(this.props.itemComponent, {...item, key});
    });
  }
}