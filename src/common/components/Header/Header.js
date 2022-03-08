import React from 'react';
import Text from '../Text/Text';

import './styles/header.scss';

const Header = () => {
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
    </div>
  )
}

export default Header;