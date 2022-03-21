import React from 'react'
import PropTypes from 'prop-types';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const MapContainer = props => {
    const { style, initialMapCenter, markerPosition } = props

    return (

        <Map
            google={props.google}
            zoom={8}
            style={style}
            initialCenter={initialMapCenter}
        >
            <Marker position={markerPosition} />
        </Map>
    )
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyBZjxxF9LN5uQ8ekUPYRcc2qjAUAR2Gfas'
})(MapContainer);

MapContainer.prototype = {
    style: PropTypes.object,
    initialMapCenter: PropTypes.shape({
        lat: PropTypes.number,
        lng: PropTypes.number,
    }).isRequired,
    markerPosition: PropTypes.shape({
        lat: PropTypes.number,
        lng: PropTypes.number,
    }).isRequired,
}
