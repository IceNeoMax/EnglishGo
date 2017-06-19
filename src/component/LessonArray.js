/**
 * Created by vjtc0n on 6/15/17.
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
  ScrollView
} from 'react-native';
import Tts from 'react-native-tts'
import { StackNavigator,NavigationActions } from 'react-navigation';
import HomeScreen from '../App';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';

import LessonDetail from './LessonDetail'

const { width, height } = Dimensions.get("window");

import { images } from './images'

export default class LessonArray extends Component {
  static navigationOptions = {
    header:null,
    gesturesEnabled: false
  };
  constructor(props) {
    super(props)
    this.state = {
      lesson2: '',
      lesson3: '',
      lesson1: '',
      arrayLesson: []
    }
  }
  
  covertLesson(lesson) {
    let lessonTitle = null
    switch (lesson) {
      case '1':
        lessonTitle = 'air plane'
        break
      case '2':
        lessonTitle = 'boat'
        break
      case '3':
        lessonTitle = 'bicycle'
        break
      case '4':
        lessonTitle = 'bear'
        break
      case '5':
        lessonTitle = 'bird'
        break
      case '6':
        lessonTitle = 'dog'
        break
      case '7':
        lessonTitle = 'bus'
        break
      case '8':
        lessonTitle = 'car'
        break
      case '9':
        lessonTitle = 'motorcycle'
        break
      case '10':
        lessonTitle = 'cat'
        break
      case '11':
        lessonTitle = 'sheep'
        break
      case '12':
        lessonTitle = 'zebra'
        break
      case '13':
        lessonTitle = 'boat'
        break
      case '14':
        lessonTitle = 'bicycle'
        break
      case '15':
        lessonTitle = 'bus'
        break
      case '16':
        lessonTitle = 'elephant'
        break
      case '17':
        lessonTitle = 'giraffe'
        break
      case '18':
        lessonTitle = 'horse'
        break
      case '19':
        lessonTitle = 'traffic light'
        break
      case '20':
        lessonTitle = 'stop sign'
        break
      case '21':
        lessonTitle = 'parking meter'
        break
      case '22':
        lessonTitle = 'bed'
        break
      case '23':
        lessonTitle = 'sink'
        break
      case '24':
        lessonTitle = 'potted plant'
        break
      case '25':
        lessonTitle = 'chair'
        break
      case '26':
        lessonTitle = 'couch'
        break
      case '27':
        lessonTitle = 'bench'
        break
      case '28':
        lessonTitle = 'apple'
        break
      case '29':
        lessonTitle = 'orange'
        break
      case '30':
        lessonTitle = 'banana'
    }
    
    return lessonTitle
  }
  
  componentWillMount() {
    this.setState({
      lesson2: (Number(this.props.navigation.state.params.lesson) + 1).toString(),
      lesson3: (Number(this.props.navigation.state.params.lesson) + 2).toString(),
      lesson1: (Number(this.props.navigation.state.params.lesson)).toString()
    }, () => {
      let lesson1 = this.covertLesson(this.state.lesson1)
      let lesson2 = this.covertLesson(this.state.lesson2)
      let lesson3 = this.covertLesson(this.state.lesson3)
      let arrayLesson = []
      arrayLesson.push(lesson1)
      arrayLesson.push(lesson2)
      arrayLesson.push(lesson3)
      console.log(arrayLesson)
      this.setState({
        arrayLesson: arrayLesson
      })
    })
  }
  
  renderLesson1() {
    return(
      <LessonDetail
        navigation={this.props.navigation}
        lesson={this.props.navigation.state.params.lesson}/>
    )
  }
  
  renderLesson2() {
    return(
      <LessonDetail
        navigation={this.props.navigation}
        lesson={this.state.lesson2}/>
    )
  }
  
  renderLesson3() {
    return(
      <LessonDetail
        arrayLesson={this.state.arrayLesson}
        navigation={this.props.navigation}
        lesson={this.state.lesson3}/>
    )
  }
  
  render() {
    return(
      <View style={{height: '100%', width: '100%'}}>
        <ScrollableTabView
          style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
          renderTabBar={() => <View/>}>
          {this.renderLesson1()}
          {this.renderLesson2()}
          {this.renderLesson3()}
        </ScrollableTabView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  background: {
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center'
  },
  backgroundImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width - 20
  }
})