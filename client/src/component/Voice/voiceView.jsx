import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as voiceActions from '../../actions/voiceActions.js';

class VoiceView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [],
      show: false
    }

  this.showItems = this.showItems.bind(this);
  this.showByType = this.showByType.bind(this);
  };

  componentDidMount() {
    this.props.voiceActions.getAllItems(this.props.fridgeId)
  }
  showItems() {
    if(this.state.show) {
      this.setState({
        show: false
      })

    } else {
      this.setState({
        show: true
      })
    }
  }

  showByType(type) {
    this.props.voiceActions.getItemByType(this.props.fridgeId, tag)
    if(this.state.show) {
      this.setState({
        show: false
      })

    } else {
      this.setState({
        show: true
      })
    }
  }

  render() {
    console.log('this is props:, ', this.props)
    const showItems = this.showItems;
    const showByType = this.showByType;
  
    if (annyang) {
    // Let's define a command.
    const commands = {
      'show fridge': function () {showItems()},
      'thanks': function() {showItems()},
      'show me :type': function() {showByType(type)}
    };

    // Add our commands to annyang
    annyang.addCommands(commands);

    // Start listening.
    annyang.start();
  }
    
    if (this.state.show) {
      return (
        <div>
        {this.props.items.map(item => (
        <ul>
          <li>
            <div>
              <span>Iteam: {item.name}</span>
              <p>Quantity: {item.quantity}</p>
            </div>
          </li>
        </ul>
        ))}
      </div>
      )
    } else {
      return (
        <div>
        </div>
      )
    }
  }
};

const voiceState = (store) => {
  console.log('THIS IS STORE: ', store)
  
  return {
    uri: store.voice.uri,
    nutrients: store.voice.nutrients,
    items: store.voice.items,
    fridgeId: store.fridge.fridge.id
  }
};

const voiceDispatch = (dispatch) => {
  return {
    voiceActions: bindActionCreators(voiceActions, dispatch),
  }
};

export default connect(voiceState, voiceDispatch)(VoiceView);