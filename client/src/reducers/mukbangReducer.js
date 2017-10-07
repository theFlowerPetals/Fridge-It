import Peer from 'peerjs';

const initialState = {
  peer: new Peer({key: 'lwjd5qra8257b9'}),
  connection: {},
}

const mukbangReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'MAKE_CONNECTION': {
      state.connection = state.peer.connect(action.payload);
      state.connection.on('open', () => {
        state.connection.send('Connected to:' + state.peer.id);
      })
    }
    default: {
      return state;
    }
  }
}

export default mukbangReducer;