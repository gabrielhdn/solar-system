import React from 'react';
import { Header, SolarSystem, Missions, Footer } from './components';

class App extends React.Component {
  render() {
    return (
      <div className='body-div'>
        <Header />
        <SolarSystem />
        <Missions />
        <Footer />
      </div>
    );
  }
}

export default App;
