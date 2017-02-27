var React = require('react');

var AddressStore = require('../../../store/addressStore.js');
var AddressList = require('./addresslist.js');

var Link = require('react-router').Link;
 
var Address =  React.createClass({
    getInitialState:function(){
        return  {
            text:'',
            list:[]
        };        
    },
    componentDidMount: function(){
        if(this.state.text){
            AddressStore.getJson(this.state.text, this, true);  
        }
    },
    change:function(event){
        this.setState({
            text: event.target.value
        })   
    },
    click:function(){
       AddressStore.getJson(this.state.text,this);
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
                <div className="list addresslist">
                    <div className="listwrap" data={this.state.list}>
                        <AddressList data={this.state.list}></AddressList>
                    </div>
                </div>
            </div>
        )
    }
})

module.exports = Address;