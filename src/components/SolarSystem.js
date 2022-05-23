import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <section className="solar-system">
        <Title headline="Planets" />
        <div className='planets'>
          {planets.map((planet) => (<PlanetCard
            planetName={ planet.name }
            planetImage={ planet.image }
            key={ planet.name }
          />))}
        </div>
      </section>
    );
  }
}

export default SolarSystem;
