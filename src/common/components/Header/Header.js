import React from 'react';
import Text from '../Text/Text';
import PlacesAutocomplete from '../PlacesAutocomplete/PlacesAutocomplete';

import './styles/header.scss';

const Header = ({
  setInitialCoords
}) => {
  return (
    <div className="header">
      <Text
        className="header__logo"
        prefixIcon="logo"
        color="blue"
        iconPrefixClassName="header__logo-icon"
      >
        React weather
      </Text>
      <div className="header__search">
        <PlacesAutocomplete
          setInitialCoords={setInitialCoords}
        />
      </div>
    </div>
  )
}

export default Header;