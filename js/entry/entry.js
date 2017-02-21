(function(){
	//自执行函数， 目的是不污染全局环境
	//console.log('进行自适应布局的根元素大小的设置');

	//怎么动态的计算不同设备下，根元素的字体大小？
	//第一步，获取不同设备下的设备的宽度
	var clientWidth = document.documentElement.clientWidth;

	//第二步， 为不同设备设置不同的根元素的字体大小
	document.documentElement.style.fontSize =  clientWidth * (20/320) + 'px';

	//至此，移动端的自适应布局
	})();
var React = require('react'); 
var render = require('react-dom').render;

import Home from '../components/veiw/page/home/containner.js';
import Address from '../components/veiw/page/address/containner.js';
import Rlist from '../components/veiw/page/rlist/containner.js';
import Rsearch from '../components/veiw/page/rsearch/containner.js';
import CartList from '../components/veiw/page/cartlist/containner.js';

var Router = require('react-router').Router; //最外层路由组件，只能写在最外面
var Route = require('react-router').Route; //子路由组件
var hashHistory = require('react-router').hashHistory; //监听hash值的改变
var browserHistory = require('react-router').browserHistory; //
var IndexRoute = require('react-router').IndexRoute; //s

render((
    <Router history={browserHistory}>
    	<Route path="/" component={Home}>
    		<IndexRoute to="/" activeClassName="active" component={Address}/>
	    	<Route path="/address" component={Address}/>
	    	<Route path="/rlist" component={Rlist}/>
	    	<Route path="/rsearch" component={Rsearch}/>
	    	<Route path="/cartlist" component={CartList}/>
	    </Route>
     </Router>
        ), document.getElementById('app'));    
