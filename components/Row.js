'use strict';

import React from 'react';
import Cell from './Cell';

export default class Row extends React.Component {
  render () {
    return(
      <tr className="row">
        { this.props.map((value, i) =>
          <Cell
            key={i}
            rcell={value}
            onChange={this.props.onChange.bind(null, i)}
            onFocus={this.props.onFocus.bind(null, i)}
          />
        )}
      </tr>
    )
  }
}
