/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes/Routes';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import MissionsList from './features/missions/MissionsList';
// import MissionFilter from './features/missions/MissionFilter';

// import './App.css';

function App() {
  return (
    <>

      {/* <!-- start of content --> */}
      <BrowserRouter>
        {/* <div className="content" /> */}
        <div className="main-container">
        <AppLoading />
        </div>
      </BrowserRouter>
      {/* <!-- end of content --> */}
      {/* <!-- start of footer --> */}

      {/* <!-- end of footer --> */}

    </>
  // <div classNameName="container">
  //   <MissionFilter />
  //   <MissionsList />
  // </div>
  );
}

function AppLoading() {
  // if (props.loading === true) {
  //   return (<Loader />);
  // }
  // if (props.maintainceMode === true) {
  //   return (<Maintaince />);
  // }
  return (

    <Routes />

  );
}

export default App;
