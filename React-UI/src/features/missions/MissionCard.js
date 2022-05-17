import React from 'react';
import PropTypes from 'prop-types';
import toDateFormat from '../../app/util';

const MissionCard = ({
  mission,
}) => (
  <div className="card mb-4 shadow-sm">
    <div className="card-header text-center">
      <h3>{mission.mission_name}</h3>
    </div>
    <div className="card-body">

      <h6 className="mb-2">Launch Details</h6>
      <ul className="list-group mb-3">
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">{mission.launch_site.site_name}</h6>
            <small className="text-muted">Launch Place</small>
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">{toDateFormat(mission.launch_date_unix)}</h6>
            <small className="text-muted">Launch Date</small>
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0"><button type="button" className={`btn ${mission.launch_success ? 'btn-outline-success' : 'btn-outline-danger'}`}>{(mission.launch_success ? 'Success' : 'Fail')}</button></h6>
            <small className="text-muted">Status</small>
          </div>
        </li>
      </ul>
      <h6 className="mb-2">Rocket Details</h6>
      <ul className="list-group mb-3">
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">{mission.rocket.rocket_name}</h6>
            <small className="text-muted">Rocket Name</small>
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">{mission.rocket.rocket_type}</h6>
            <small className="text-muted">Rocket Type</small>
          </div>
        </li>
      </ul>
      <div className="d-flex justify-content-between align-items-center">
        <div className="btn-group">
          <button type="button" className="btn btn-sm btn-outline-secondary">Youtube</button>
          <button type="button" className="btn btn-sm btn-outline-secondary">Article</button>
          <button type="button" className="btn btn-sm btn-outline-secondary">Wiki</button>
        </div>
        <small className="text-muted">{(mission.upcoming ? 'Upcoming' : '')}</small>
      </div>
    </div>
  </div>
);

MissionCard.propTypes = {
  mission: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MissionCard;