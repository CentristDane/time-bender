import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
} from 'react-vr';
import items1 from "./items1.json";
import io from 'socket.io-client';


// CHANGE URL FOR PRODUCTION !!!!!!
const socket = io('http://localhost:3001/');


export default class view_react_vr extends React.Component {
  state = {
    //room: null, // starts null
    //deviceConnected: false, // bool, starts false

    level: 1, // number (number is perfered so that it's incrementable)
    status: 'stopped', // string, can be 'stopped' or 'started'
    GazeButtClicked: false, // boolean, this means vr game is in 'resting' state

    currentItem: 1,
    items: items1 // array from items1.json
  }

  handleClick = () => {
    let nextState = {
      level: this.state.level,
      status: this.state.status,
      GazeButtClicked: this.state.GazeButtClicked,
      currentItem: this.state.currentItem,
      items: this.state.items
    };
    socket.emit('updateState', nextState);
    console.log(`emitted: ${nextState}`);
  };

  render() {
    console.log(this.state.items);
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <VrButton onClick={ this.handleClick } >
          <Text
            style={{
              backgroundColor: '#777879',
              fontSize: 0.8,
              fontWeight: '400',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{translate: [0, 0, -3]}],
            }} >
            hello
          </Text>
        </VrButton>
      </View>
    )
  }

  componentDidMount() {
    // socket.emit('newRoom', this.state.room);
    socket.on('updateState', nextState => {
      this.setState({nextState});
      console.log(nextState);
    });
  }

};

AppRegistry.registerComponent('view_react_vr', () => view_react_vr);
