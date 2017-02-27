var React = require('react');
var Home =  React.createClass({
  render:function() {
    return (
            <div id="wrapper">
              {this.props.children}
            </div>
            );
  }
});
module.exports = Home;