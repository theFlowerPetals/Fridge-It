import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as mukbangActions from '../../actions/mukbangActions.js';

class Mukbang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: ''
    }
  }

  componentDidMount() {
    this.video = document.getElementsByTagName('video');
  }

  render() {
    let { userId, peer } = this.props;
    let secondaryId = '';
    const handleClick = () => {
      this.props.mukbangActions.makePeer(secondaryId);
    }
    
    const handleStartStream = () => {
      console.log('STREAM STARTEEDDDD');
      let getUserMedia = navigator.getUserMedia.bind(navigator) || navigator.webkitGetUserMedia.bind(navigator) || navigator.mozGetUserMedia.bind(navigator);
      getUserMedia({video: true, audio: true}, (stream) => {
        var call = peer.call(secondaryId, stream);
        call.on('stream', (remoteStream) => {
          console.log('CALLL ONNNN');
          console.log('VVVVVVVVVV:', this.video);
          this.video[0].src = URL.createObjectURL(remoteStream);
          this.video[0].play();
        });
      }, function(err) {
        console.log('Failed to get local stream' ,err);
      });
    }
    
    peer.on('connection', function (conn) {
      conn.on('data', function(data) {
        console.log('Data received:', data);
      })
    })

    peer.on('call', (call) => {
      navigator.getUserMedia({video: true, audio: true}, (stream) => {
        call.answer(stream);
        call.on('stream', (remotestream) => {
          this.video[0].src = URL.createObjectURL(remotestream);
          this.video[0].play();
        })
      }, function(err) {
        console.log('Failed to get stream', err);
      })
    })

    return (
      <div>
        <video src=''></video>
        <h4>{userId}</h4>
        <input onChange={(e) => {
          secondaryId = e.target.value
          {console.log('secondaryId:', secondaryId)}
        }} />
        <button onClick={() => {
          handleClick()
        }}>ConnECTIONrRio</button>
        <button onClick={() => {
          handleStartStream()
        }}>STARt StramErino</button>
      </div>
    );
  }
}

const mukbangState = (store) => {
  return {
    userId: store.mukbang.peer.id,
    peer: store.mukbang.peer
  }
};

const mukbangDispatch = (dispatch) => {
  return {
    mukbangActions: bindActionCreators(mukbangActions, dispatch)
  }
};

export default connect(mukbangState, mukbangDispatch)(Mukbang); 