var React = require('react');
var Ritem = require('./ritem.js');
var Searchbox = require('./searchbox.js');
var Carousel = require('./carousel.js');
var List = require('./ShopList.js');
var Store = require('../../../store/rlistStore.js');
var commonStore = require('../../../store/commonStore.js');
var Rlist =  React.createClass({
	getInitialState:function(){
		return { 
			carouselData:[],
			listData:[]
		}
	},
	componentDidMount: function(){
		var geohash = this.props.params.geohash;    //获取路由参数
	    Store.getCarouselData(geohash,this);       //得到轮播图列表
	    Store.getItemList(geohash,this);
	},
	changeList:function(){
	    Store.loadmoreList(this);
	},
	render:function() {
	    return (
	    		<div>
	    			<Searchbox></Searchbox>
	    			<Carousel data={this.state.carouselData}  style={{height:"8rem"}}></Carousel>
	    			<List onloadmore={this.changeList} data3={this.state.listData}></List>
	    		</div>
	    		)
	}
})

module.exports = Rlist;


