var React = require('react');
var ReactSwipe = require('react-swipe');
var Item = require('./ritem.js');
var Carousel =  React.createClass({
  render:function() {
  	var data1 = this.props.data;
  	var len = Math.ceil(data1.length/8);
  	var list = [];
  	for(var i = 0; i < len; i++) {
        var t = i * 8;
        list.push(data1.slice(t, t + 8))
    }
    return (
            <div className="swipe-wrapper">
		        <ReactSwipe key={list.length} className="carousel" swipeOptions={{continuous: true,auto: 4000}}>
	               {
	                list.map(function(value, index){
	                     return (
	                        <div key={index} className="item">
	                            {
	                                value.map(function(value, index){
	                                    return <Item key={index} data2={value}></Item>        
	                                })
	                            }
	                        </div>
	                      )       
	                })
	               }
		        </ReactSwipe>
            </div>
            )
    }
})

module.exports = Carousel;
