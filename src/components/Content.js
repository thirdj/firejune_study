'use strict';

const React = require('react');

module.exports = class extends React.Component {
  render() {
    return (
      <section>
        {this.props.idx}: {this.props.data}
      </section>
    );
  }
};
