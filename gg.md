import React from 'react';
import { connect } from 'react-redux'

class Position extends React.Component{
  componentWillMount(){
    var BMap = window.BMap
    var map = new BMap.Map("root");
    var longitude, latitude;
    navigator.geolocation.getCurrentPosition(function (position) {
        longitude = position.coords.longitude;
        latitude = position.coords.latitude;
    });
    this.interval=setInterval(() => {
      console.log(longitude, latitude);
      if(longitude && latitude){
        clearInterval(this.interval)
        var gpsPoint = new BMap.Point(longitude, latitude);
        BMap.Convertor.translate(gpsPoint, 0, point => {
            var geoc = new BMap.Geocoder();
            geoc.getLocation(point, rs => {
                var addComp = rs.addressComponents;
                var position = `${addComp.province},${addComp.city},${addComp.district},${addComp.street},${addComp.streetNumber}`
                this.props.dispatch({type:'POSITION',position})
            })
        })

      }
    }, 200);
  }
  render(){
    let current = this.props.current
    return (
      <div>
        {current ? current : '正在获取定位中...'}
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  current:state.position
})
export default connect(mapStateToProps)(Position)
