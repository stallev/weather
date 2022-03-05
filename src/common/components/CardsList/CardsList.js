import React from 'react';
import Button from '../Button/Button';

import './styles/cards-list.scss';

const CardsList = () => {
  return (
    <div className="cards-list">
      <div className="cards-list__tabs">
        <Button buttonText="На неделю" buttonLocation="tabs"/>
        <Button buttonText="На месяц" buttonLocation="tabs"/>
        <Button buttonText="На 10 дней" buttonLocation="tabs"/>
      </div>
    </div>
  )
}

export default CardsList;