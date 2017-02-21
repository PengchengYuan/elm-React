var React = require('react');
var NavLink = require('../../modules/navLink.js');
var IndexLink = require('react-router').IndexLink;
var Home =  React.createClass({
  render:function() {
    return (
            <div>
           	 	<h1>欢迎回来！！！</h1>
           	 	<div>
                  <IndexLink to="/" activeClassName="active">Home</IndexLink>
             	 		<NavLink to="/address">选择您所在的城市</NavLink>
             	 		<NavLink to="/rsearch">搜索地址</NavLink>
             	 		<NavLink to="/rlist">查看附近餐厅</NavLink>
             	 		<NavLink to="/cartlist">查看订餐内容</NavLink>
           	 	</div> 
              {this.props.children}
            </div>
            );
  }
});

module.exports = Home;