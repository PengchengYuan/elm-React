var lat,lng;
var Store = require('./rlistStore.js');
var commonStore = {
	cache:function(nameSpace, data) {
		if(data) {
			localStorage.setItem(nameSpace, JSON.stringify(data));
			return;
		}
		return (nameSpace && JSON.parse(localStorage.getItem(nameSpace))) || null;
	},
	imagePath:function(val){
		var path = val.image_path;
		return (path.substring(0,1)+'/'+path.substring(1,3)+'/'+path.substring(3) + '.' +path.substring(32));
	},
	cacheGeo:function(text,me){
		var url = "/v2/pois/" + text;
		var q = fetch(url, {
			method: 'GET'
		}).then(function(response) {
			return response.json();
		}).catch(function(e) {
			console.log("Oops, error");
		});	
		return q; 	
	},
	setCache: function(hash, data){
		this.cache('geohash', hash);
		this.cache(hash, {
			lat: data.latitude,
			lng: data.longitude
		}); 	
	}
};
module.exports= commonStore;