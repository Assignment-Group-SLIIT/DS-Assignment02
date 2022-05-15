import React from 'react'
import GoogleMapReact from 'google-map-react'
import LocationPin from './LocationPin'
import '../styles/map.styles.scss'


const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
}

const GoogleMaps = () => (
    <div className="map">
        <h2 className="map-h2">Come Visit Us At Our Campus</h2>

        <div className="google-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDJAz5Xc-ZQtQ8ZQUe9nfyZsTmAt7rT1v4' }}
                defaultCenter={location}
                defaultZoom={17}
            >
                <LocationPin
                    lat={location.lat}
                    lng={location.lng}
                    text={location.address}
                />
            </GoogleMapReact>
        </div>
    </div>
)

export default GoogleMaps