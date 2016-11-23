import Exponent from 'exponent';
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Navigator,
  Text,
} from 'react-native';

import TaskList from './taskList';

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
  }
})

class PsToDo extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      todos: [
        {
          task: "Learn React Native"
        },
        {
          task: "Get a Job"
        },
        {
          task: "Go do laundry"
        },
      ],
    };
  }

  onAddStarted() {
    this.nav.push({
      name: 'taskform',
    })
  }

  renderScene(route, nav) {
    switch(route.name) {
      case 'taskform':
        return <Text>Add form comes here</Text>
      default:
        return (
          <TaskList
            todos={this.state.todos}
            onAddStarted={this.onAddStarted.bind(this)}
          />
        );
      }
  }

  configureScene() {
    return Navigator.SceneConfigs.FloatFromBottom;
  }

  render() {
    return (
      <Navigator
        configureScene={this.configureScene}
        initialRoute={{name: 'tasklist', index: 0}}
        renderScene={this.renderScene.bind(this)}
        ref={(nav) => {
          this.nav = nav
        }}
      />
    );
  }
}

Exponent.registerRootComponent(PsToDo);
