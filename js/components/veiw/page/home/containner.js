var React = require('react');
var NavLink = require('../../modules/navLink.js');
var IndexLink = require('react-router').IndexLink;
var Home =  React.createClass({
  render:function() {
    return (
            <div>
              {this.props.children}
            </div>
            );
  }
});

module.exports = Home;