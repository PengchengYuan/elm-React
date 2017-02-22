var React = require('react');

var AddressStore = require('../../../store/addressStore.js');

var Address =  React.createClass({
    getInitialState:function(){
        return  {
            text:'',
            list:[]
        };        
    },
    change:function(event){
        this.setState({
            text: event.target.value
        })   
    },
    click:function(){
       AddressStore.getJson(this);
       console.log(this.state.list)
    },
    render:function() {
        return (
            <div>
            	<div className="bar bar-header bar-positive">
            	 	  <h1 className="title">地址搜索页</h1>
            	</div>
            	<div className="list list-inset">
	            	  <label className="item item-input" style={{marginTop:"41px"}}>
		            	    <i className="icon ion-search placeholder-icon"></i>
		            	    <input type="text" placeholder="Search" onChange={this.change} value={this.state.text}/>
	            	  </label>
	            	  <button className="button button-full button-positive" onClick={this.click}>搜索</button>
            	</div>
            </div>
        )
    }
})

module.exports = Address;