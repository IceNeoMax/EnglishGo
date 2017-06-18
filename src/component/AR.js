/**
 * Created by vjtc0n on 6/16/17.
 */
import React, { Component } from 'react';

import {
  Text,
  View,
  Button,
  AppRegistry,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  requireNativeComponent
} from 'react-native';
import Tts from 'react-native-tts'
import { StackNavigator,NavigationActions } from 'react-navigation';
import HomeScreen from '../App';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
var CustomRNView = requireNativeComponent('CustomRNView',null)

import LessonDetail from './LessonDetail'

const { width, height } = Dimensions.get("window");

import { images } from './images'

export default class AR extends Component {
  static navigationOptions = {
    header:null,
    //gesturesEnabled: false
  };
  
  render() {
    return(
      <View>
        <View style={{height: 600, width: width, backgroundColor: 'blue'}}>
          <CustomRNView vocabs={["apple", "book"]}/>
          <TouchableOpacity
            style={{height: 40, width: 40, position: 'absolute', zIndex: 100, right: 16, top: 20}}
            onPress={() => this.props.navigation.navigate('Home')}>
            <Image
              style={{}}
              source={require('../images/button-x.png')}/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}