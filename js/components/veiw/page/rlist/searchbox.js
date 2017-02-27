var React = require('react');
var Searchbox =  React.createClass({
	getInitialState:function(){
		return {
			text:''
		}	 	
	},
	submit:function(){
		console.log('我提交了');
	},
	change:function(event){
		this.setState({
			text:event.target.value
		})	 	
	},
  	render:function() {
    	return  (
        		<form onSubmit={this.submit}>
    	    		 <div className="item item-input-inset" style={{border:"0",paddingBottom:"10px",background:"#0E80FA"}}>
    		    		<label className="item-input-wrapper">
    		    		    <input type="text" placeholder="搜索商家、商品" onChange={this.change} value={this.state.text}/>
    		    		</label>
    	    		</div>
        		</form>
                )
  }
})

module.exports = Searchbox;