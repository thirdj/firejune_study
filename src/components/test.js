'use strict';

const React = require('react');

/**
- Root
  - Header
  - Content
  - Footer
*/

module.exports = React.createClass({
  helloClick: function(){
    alert('click event!!!');
  },
  render: function() {
    return (
      <div className="commentBox" onClick={this.helloClick}>
        Hello, {this.props.data}
      </div>
    );
  }
});
