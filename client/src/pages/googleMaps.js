import React from 'react'
import GoogleMapReact from 'google-map-react'
import LocationPin from './LocationPin'
import '../styles/map.styles.scss'




const GoogleMaps = (props) => (
    <div className="map">
        <h4 className="mb-4">Find the location on Google map</h4>

        <div className="google-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDJAz5Xc-ZQtQ8ZQUe9nfyZsTmAt7rT1v4' }}
                defaultCenter={props}
                defaultZoom={17}
            >
                <LocationPin
                    lat={props.lat}
                    lng={props.lng}
                    text={props.address}
                />
            </GoogleMapReact>
        </div>
    </div>
)

export default GoogleMaps