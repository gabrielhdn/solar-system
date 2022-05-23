import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    const missionsSorted = missions.sort((a, b) => a.name.charCodeAt() - b.name.charCodeAt());
    return (
      <section className="missions-title">
        <Title headline="Missions" />
        <div className='missions'>
          {missionsSorted.map((mission) => {
            const { name, year, country, destination, info } = mission;
            return (<MissionCard
              key={ name }
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
              info={ info }
            />);
          })}
        </div>
      </section>
    );
  }
}

export default Missions;
