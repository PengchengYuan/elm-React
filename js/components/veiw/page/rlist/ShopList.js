var React = require('react');
var commonStore = require('../../../store/commonStore.js');
var Shop = require('../../common/singleShop.js');
var Waypoint = require('react-waypoint');
var Rsearch =  React.createClass({
	render:function() {
		var list = this.props.data3;
		//console.log(list);
	return (
	        <div>
		        <div style={{height:"40px",lineHeight:"40px",background:"#4677F5",paddingLeft:"10px",color:"#fff"}}>附近商家
		        </div>
		        <ul className="shoplist1" id="shoplist">
		        	{
		        		list.map(function(value,index){
		            	    return <Shop data={value} key={index}></Shop>
		        		})
		        	}
		        	<Waypoint onEnter={this.scrollHandle}></Waypoint>
		        </ul>
		    </div>
	        )
	},
	scrollHandle:function(){
		console.log('到底了');
		this.props.onloadmore();				 	
	}
})

module.exports = Rsearch;