var whatwgFetch = require('whatwg-fetch');

var AddressStore = {
	getJson:function(me){
		var url = 'v1/pois?city_id=3&keyword=1&type=search';
		fetch(url, {
			method: 'GET'
		}).then(function(response) {
			response.json().then(function(data) {
				me.setState({
					list:data
				});
			});
		}).catch(function(e) {
			console.log("Oops, error");
		});
	}
};
module.exports = AddressStore;