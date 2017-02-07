/**
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  Image,
  Switch,
  Text,
  View,
} from 'react-native';

import MapView from 'react-native-maps';

const imageSrc = require('CustomMarkerIssueDemo/assets/custommarker.png');
const coordinate = {
  latitude: 1.321595,
  longitude: 103.863119,
};

type State = {
  markerType: number,
};

export default class CustomMarkerIssueDemo extends Component <void, void, State> {
  state: State = {
    markerType: 2,
  }

  _markerTypeString(type: number) {
    switch (type) {
      case 0: return "custom marker with child image";
      case 1: return "custom marker with image property";
      case 2: return "normal marker";
      default: return "something wrong";
    }
  }

  _marker(type: number) {
    switch (type) {
      case 0:
        return (
          <MapView.Marker
            key="1"
            coordinate={coordinate}
            anchor={{x: 0.5, y: 0.5}}
            >
            <Image
              source={imageSrc}
            />
          </MapView.Marker>
        );
      case 1:
        return (
          <MapView.Marker
            key="2"
            coordinate={coordinate}
            anchor={{x: 0.5, y: 0.5}}
            image={imageSrc}
          />
        );
      case 2:
        return (
          <MapView.Marker
            key="3"
            coordinate={coordinate}
          />
        );
      default: return null;
    }
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <MapView
          style={{width: 300, height: 300}}
          provider={'google'}
          initialRegion={{
            latitude: 1.321595,
            longitude: 103.863119,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }}
          showsUserLocation={true}
          >
          {this._marker(this.state.markerType)}
        </MapView>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <Text>Marker: {this._markerTypeString(this.state.markerType)}</Text>
        </View>
        <Button title="Change" onPress={() => {
          let newtype: number = (this.state.markerType + 1) % 3;
          this.setState({markerType: newtype});
        }} />
      </View>
    );
  }
}

AppRegistry.registerComponent('CustomMarkerIssueDemo', () => CustomMarkerIssueDemo);
