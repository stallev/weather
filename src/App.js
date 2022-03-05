import React from 'react';
import Container from './common/components/Container/Container';
import Header from './common/components/Header/Header';
import FullInfo from './common/components/FullInfo/FullInfo';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Container>
        <Header></Header>
        <FullInfo/>
      </Container>
    </div>
  );
}

export default App;
