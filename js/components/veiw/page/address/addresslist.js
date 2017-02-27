var React = require('react');
var Link = require('react-router').Link;
var AddressList =  React.createClass({
  render:function() {
    return (
            <div>{
             	this.props.data.map(function(value, index){
             	var geohash = value.geohash;
             	var path = '/rlist/' + geohash;
             	return (<div className="item" key={index}>
             	            <Link to={path}>
                            {value.name}
                             <p className="address">{value.address}</p>
                            </Link>
                           
             	        </div>)       
             	}) 
            }</div>
            );
  }
});
module.exports = AddressList;