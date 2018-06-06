import React from 'react'

export default class UserMap extends React.Component {

    componentDidMount() {
        UserMap.initMap();
    }

    static initMap() {
        let {google} = window;
        new google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
        });
    }

    render() {
        return (
            <div className="card" style={{height:"100%"}}>
                <div className="card-header">
                    Zoom In / Out the Map
                </div>
                <div className="card-body" style={{height:"100%"}}>
                    <div id="map" style={{height:"100%"}}></div>
                </div>
            </div>
        )
    }
}
