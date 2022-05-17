import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from "react-redux";

function PrivateRoute({ component: Component, loginStatus, ...rest }) {

    return (
        <Route {...rest} render={props => { 

            if (!loginStatus) {
                // not logged in so redirect to login page with the return url
                return <Redirect to={{ pathname: '/' }} />
            }    

            
            return <Component {...props} />

        }} />
    );
}

function mapStateToProps(state) {
    console.log(state.AuthReducer);
    return {
        loginStatus: state.AuthReducer.loggedIn 
    }
}

export default connect(mapStateToProps, {})(PrivateRoute);