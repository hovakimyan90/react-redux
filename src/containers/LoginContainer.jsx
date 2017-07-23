import React from 'react'
import { connect } from 'react-redux'
import Login from './../components/Login';

let Logins = (props) => {
    return (
        <Login {...props}/>
    )
};

const mapStateToProps = (state, ownProps) => {
    return state.Logins.toJS();
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onKeyUp: (key) => {
            dispatch({
                type: 'TEST',
                data: key
            });
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Logins);