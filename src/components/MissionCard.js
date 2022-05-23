import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination, info } = this.props;
    return (
      <div className="mission-card">
        <p className="mission-text-name"><a href={info} target='_blank'>{ name }</a></p>
        <p className="mission-text">{ year }</p>
        <p className="mission-text">{ country }</p>
        <p className="mission-text">{ destination }</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

export default MissionCard;
