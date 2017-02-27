var whatwgFetch = require('whatwg-fetch');
var commonStore = require('./commonStore.js');
var lat,lng,url,offset = 0,list=[],arr=[];
var RlistStore = {
	getCarouselData:function(hash,me){
		var url = "/v2/index_entry?geohash="+ hash +"&group_type=1&flags[]=F";
		fetch(url, {
			method: 'GET'
		}).then(function(response) {
			response.json().then(function(data) {
				me.setState({
					carouselData:data
				});
			});
		}).catch(function(e) {
			console.log("Oops, error");
		});
	},
	sendListData:function(){
		var url = '/shopping/restaurants?latitude='+ lat +'&longitude='+ lng +'&offset='+ offset +'&limit=20&extras[]=activities&terminal=h5';
		var t = fetch(url, {
			method: 'GET'
		}).then(function(response) {
			offset += 20;
			return response.json();
		}).catch(function(e) {
			console.log("Oops, error");
		});
		return t;	 	
	},
	getItemList:function(text,me){
		var that = this;
		if(list.length > 0) {
			//进行数据的缓存
			me.setState({
				list: list
			});
			return;
		}
	    commonStore.cacheGeo(text,me).then(function(data) {
	    	var oUl = document.getElementById('shoplist');
			commonStore.setCache(text,data);
			lat = commonStore.cache(text).lat;
			lng = commonStore.cache(text).lng;
			that.sendListData().then(function(data) {
				data.length === 20 ? oUl.className='shoplist1' : oUl.className='shoplist0';
				list = data;
				me.setState({
					listData:data
				});
			}).catch(function(e) {
				console.log("Oops, error");
			});
		});
	},
	loadmoreList:function(me){
		if(!lat || !lng) {
			return;
		}
		this.sendListData().then(function(data){
			list = list.concat(data);
			console.log(list);
			me.setState({
				listData: list //拼接数组
			});
		});	 	
	}
};
module.exports = RlistStore;