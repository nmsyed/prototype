/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import MissionCard from './MissionCard';
import Loader from '../../common/loader/Loader';
import { getMissionsList } from './missionSlice';

const MissionsList = () => {
  let listData = [];
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.mission);
  if (missions.missionsList.length > 0) listData = missions.missionsList;
  if (Object.keys(missions.filterParam).length !== 0) {
    listData = listData.filter((item) => {
      let filteredFlag = true;
      if (missions.filterParam.rocketName !== undefined && missions.filterParam.rocketName !== '') {
        filteredFlag = item.rocket.rocket_name.toLowerCase().includes(missions.filterParam.rocketName.toLowerCase());
      }
      if (missions.filterParam.filterByPeriod !== undefined && missions.filterParam.filterByPeriod !== '' && filteredFlag) {
        let startDate = '';
        let endDate = '';
        if (missions.filterParam.filterByPeriod === 'lastweek') {
          startDate = moment().startOf('week').subtract(7, 'days').unix();
          endDate = moment().endOf('week').subtract(7, 'days').unix();
        } else if (missions.filterParam.filterByPeriod === 'lastmonth') {
          startDate = moment().startOf('month').subtract(30, 'days').unix();
          endDate = moment().endOf('month').subtract(30, 'days').unix();
        } else {
          startDate = moment().startOf('year').subtract(366, 'days').unix();
          endDate = moment().endOf('year').subtract(365, 'days').unix();
        }
        filteredFlag = item.launch_date_unix >= startDate && item.launch_date_unix <= endDate;
      }
      if (missions.filterParam.filterByStatus !== undefined && missions.filterParam.filterByStatus !== '' && filteredFlag) {
        filteredFlag = item.launch_success === missions.filterParam.filterByStatus;
      }
      if (missions.filterParam.filterByUpcoming !== undefined && missions.filterParam.filterByUpcoming !== '' && filteredFlag) {
        filteredFlag = item.upcoming === missions.filterParam.filterByUpcoming;
      }
      return filteredFlag;
    });
  }

  useEffect(() => {
    dispatch(getMissionsList());
  }, [dispatch]);

  return (
    <div className="row">
      {missions.loader
                    && <Loader />}
      { listData.map((record) => (
        <div className="col-md-4" key={record.mission_name}>
          <MissionCard
            mission={record}
          />
        </div>
      ))}
    </div>
  );
};

export default MissionsList;
