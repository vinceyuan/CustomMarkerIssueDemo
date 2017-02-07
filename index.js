/**
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';

export default class CustomMarkerIssueDemo extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Custom marker</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  webView: {
    flex: 1,
  },
});

AppRegistry.registerComponent('CustomMarkerIssueDemo', () => CustomMarkerIssueDemo);
