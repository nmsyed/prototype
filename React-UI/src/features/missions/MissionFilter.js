import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilterData } from './missionSlice';

const MissionFilter = () => {
  const [filter, setFilter] = useState({});
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const filterObj = { ...filter };
    switch (name) {
      case 'rocketName':
        filterObj.rocketName = value;
        break;
      case 'filterByPeriod':
        filterObj.filterByPeriod = value;
        break;
      case 'filterByStatus':
        if (value === '') filterObj.filterByStatus = '';
        else filterObj.filterByStatus = (value === 'true');
        break;
      case 'filterByUpcoming':
        setChecked(!checked);
        if (checked) filterObj.filterByUpcoming = '';
        else filterObj.filterByUpcoming = !checked;
        break;
      default:
        break;
    }
    setFilter(filterObj);
    console.log(filterObj);
    dispatch(setFilterData(filterObj));
  };

  // const dispatch = useDispatch();
  return (
    <div className="row mt-5 mb-5">
      <div className="col-md-4 mb-2">
        <input type="text" className="form-control" name="rocketName" placeholder="Rocket Name" onChange={handleChange} />
      </div>
      <div className="col-md-4 mb-2">
        <select name="filterByPeriod" className="form-control" defaultValue="" onChange={handleChange}>
          <option value="">Choose...</option>
          <option value="lastweek">Last Week</option>
          <option value="lastmonth">Last Month</option>
          <option value="lastyear">Last Year</option>
        </select>
      </div>
      <div className="col-md-2 mb-2">
        <select name="filterByStatus" className="form-control" defaultValue="" onChange={handleChange}>
          <option value="">Choose Status</option>
          <option value="true">Success</option>
          <option value="false">Failure</option>
        </select>
      </div>
      <div className="col-md-2 mb-2">
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <input type="checkbox" checked={checked} name="filterByUpcoming" aria-label="Upcoming" onChange={handleChange} />
&nbsp;&nbsp;Upcoming

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionFilter;
