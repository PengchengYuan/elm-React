var React = require('react');
var RlistStore = require('../../../store/rlistStore.js');
var Ritem =  React.createClass({
  render:function() {
  	var item = this.props.data2;
  	if(item){
  		var title = item.title;
  		var path = "//fuss10.elemecdn.com/" + item.image_url;
  	}
    return (
            
            	<a href="">
            		<div className="container">
            			<img src={path}/>
            		</div>
            		<span className="title">{title}</span>
            	</a>
           
            );
  }
});
module.exports = Ritem;