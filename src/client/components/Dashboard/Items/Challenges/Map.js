import React from 'react';

/* global google */
class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: { lat: 36.1699, lng: -115.1398 }, 
      map: null,
      markers: []
    };
    // functions to initializa map, add markers, and mover markers
    this.initMap = this.initMap.bind(this);
    this.addMarker = this.addMarker.bind(this);
    this.moveMarkers = this.moveMarkers.bind(this);
  }

  componentDidMount() {
    this.initMap();
  }

  // initialize map and listeners
  initMap() {
    // initialize google maps
    const loc = this.state.location;
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 36.1699, lng: -115.1398 },
      zoom: 10,
      styles: [{"elementType":"geometry","stylers":[{"hue":"#ff4400"},{"saturation":-68},{"lightness":-4},{"gamma":0.72}]},{"featureType":"road","elementType":"labels.icon"},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"hue":"#0077ff"},{"gamma":3.1}]},{"featureType":"water","stylers":[{"hue":"#00ccff"},{"gamma":0.44},{"saturation":-33}]},{"featureType":"poi.park","stylers":[{"hue":"#44ff00"},{"saturation":-23}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"hue":"#007fff"},{"gamma":0.77},{"saturation":65},{"lightness":99}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"gamma":0.11},{"weight":5.6},{"saturation":99},{"hue":"#0091ff"},{"lightness":-86}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"lightness":-48},{"hue":"#ff5e00"},{"gamma":1.2},{"saturation":-23}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"saturation":-64},{"hue":"#ff9100"},{"lightness":16},{"gamma":0.47},{"weight":2.7}]}]
    });

    map.addListener('click', event => {
      this.addMarker(event.latLng);
    });

    // mechanism to update locations on map
    setInterval(this.moveMarkers.bind(this), 500);
    this.setState({ map });
  }

  // Adds a marker to the map and push to the array.
  addMarker(location) {
    // random avatar generated
    const num = Math.floor(Math.random() * 2) + 2;
    const image = {
      url: `../../assets/images/avatars/av${num}.png`
    };
    const marker = new google.maps.Marker({
      position: location,
      map: this.state.map,
      icon: image
    });
    this.state.markers.push(marker);
  }  

  moveMarkers() {
    const markers = this.state.markers;
    for (let i = 0; i < markers.length; i++) {
      // move positions of each avatar
      const newPos = markers[i].getPosition();
      const newLat = newPos.lat() + 0.0005;
      const newLng = newPos.lng();

      const latlng = new google.maps.LatLng(newLat, newLng);
      console.log('latlng, ', latlng);
      markers[i].setPosition(latlng);
    }
  }

  render() {
    return (
      <div className="map-container">
        <div id="map"></div>
      </div>
    );
  }

}

export default Map;
