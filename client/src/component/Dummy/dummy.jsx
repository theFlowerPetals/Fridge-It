import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as dummyActions from '../../actions/dummyActions.js';

class Dummy extends Component {
  render() {
    return (
      <div>
        <button onClick={(e) => {
          this.props.dummyActions.changeName()
        }}>CHANGE NAME</button>
      </div>
    );
  }
}

const dummyState = (store) => {
  return {
    changename: store.dummy.name
  }
};

const dummyDispatch = (dispatch) => {
  return {
    dummyActions: bindActionCreators(dummyActions, dispatch)
  }
};

export default connect(dummyState, dummyDispatch)(Dummy); 