var React = require('react');
var commonStore = require('../../store/commonStore.js');
module.exports = React.createClass({
      render:function(){
            var value = this.props.data;
            var image_path="http://fuss10.elemecdn.com/"+commonStore.imagePath(value);
            var distance=value.distance;
            distance=distance>1000?(distance/1000).toFixed(2)+'km':distance+'m';
            return (
                   <li className="item" data-id={value.id} data-lat={value.latitude} data-lon={value.longitude}>
                        <div className="left-wrap">
                              <img className="logo" src={image_path}/>
                        </div>
                        <div className="right-wrap">
                              <div className="line">
                                    <h3 className="shopname">{value.name}</h3>
                              </div>
                              <div className="line">
                                    <div className="moneylimit">
                                          <span>¥{value.float_minimum_order_amount}起送</span>
                                          <span>配送费约¥{value.float_delivery_fee}</span>
                                    </div>
                                    <div className="timedistance-wrap">
                                          <span className="distance-wrap">{distance}</span>
                                          <span className="time-wrap">{value.order_lead_time}分钟</span>
                                    </div>
                              </div>
                        </div>
                   </li>
                   )              
      }
})
