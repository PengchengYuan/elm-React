var whatwgFetch = require('whatwg-fetch');
var list = [];
var AddressStore = {
	getJson:function(text,me,flag){
		if(list.length > 0 && flag) {
			me.setState({
				list: list
			})
			return;
		}
		
		if(list.length === 0 && flag) {
			return;
		}
		var url = 'v1/pois?city_id=3&keyword='+ text +'&type=search';
		fetch(url, {
			method: 'GET'
		}).then(function(response) {
			response.json().then(function(data) {
				list = data;
				me.setState({
					list:data
				});
				console.log(me.state.list);
			});
		}).catch(function(e) {
			console.log("Oops, error");
		});
	}
};
module.exports = AddressStore;