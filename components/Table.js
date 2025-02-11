'use strict';

import React from 'react';
import Row from './Row';

export default class Table extends React.Component {
  render () {
    return (
      <table className='table' onBlur={this.props.onBlur}>
        <tbody>
          {
            this.props.table.map((value, i) =>
              <Row
                key={i}
                row={value}
                onChange={this.props.onChange.bind(null, i)}
                onFocus={this.props.onFocus.bind(null, i)}
              />
            )
          }
        </tbody>
      </table>
    )
  }
}