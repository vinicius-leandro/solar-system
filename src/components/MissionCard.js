import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    const yearPhrase = `Ano: ${year}`;
    const countryPhrase = `Pais: ${country}`;
    const destinationPhrase = `Destino: ${destination}`;
    return (
      <div data-testid="mission-card" className="missions">
        <p data-testid="mission-name" className="missionName">
          {name}
        </p>
        <hr />
        <p data-testid="mission-year">
          {yearPhrase}
        </p>
        <p data-testid="mission-country">
          {countryPhrase}
        </p>
        <p data-testid="mission-destination">
          {destinationPhrase}
        </p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
