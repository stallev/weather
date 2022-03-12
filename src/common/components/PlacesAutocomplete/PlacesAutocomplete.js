import React, { useState, useEffect } from 'react';
import Autocomplete from 'react-google-autocomplete';

import './styles/places-autocomplete.scss';

const PlacesAutocomplete = ({
  setInitialCoords
}) => {
  const MAP_API_KEY = 'AIzaSyDlSty_Xsc67E2ZWy5QyTOQVXt8cZ17DjU';
  const [suggestLocation, setSuggestLocation] = useState([null, null]);

  const getLatLong = ({
    geometry: {
      location: { lat, lng }
    }
  }) => ({
    lat: lat(),
    lon: lng()
  });

  useEffect(() => {
    setInitialCoords(suggestLocation);
  }, [suggestLocation]);

  return (
    <div className="places-autocomplete">
      <Autocomplete
        apiKey={MAP_API_KEY}
        language="ru"
        placeholder="Выбрать местоположение"
        onPlaceSelected={(place) => {
          if (place.name === '') {
            console.log('Please, enter address', place.name);
            return;
          }
          if(Object.keys(place).length>2) {
            setSuggestLocation(getLatLong(place))
          } else {
            alert("It is wrong address");
            return;
          }
        }}
        options={{
          types: ['(regions)']
        }}
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default PlacesAutocomplete;