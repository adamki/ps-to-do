import Exponent from 'exponent';
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Navigator,
  Text,
} from 'react-native';

import TaskList from './taskList';
import TaskForm from './taskForm';

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
  }
})

class Main extends Component {
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

  onAdd(task) {
    this.state.todos.push({ task })
    this.setState({ todos: this.state.todos })
    this.nav.pop();
  }

  onCancel() {
    this.nav.pop();
  }

  onDone(task) {
    const filteredTodos = this.state.todos.filter((filterTodo) => {
      return filterTodo !== task;
    })

    this.setState({ todos: filteredTodos });
  }

  onEdit(task) {
    console.log(task)
  }

  renderScene(route, nav) {
    switch(route.name) {
      case 'taskform':
        return (
          <TaskForm
            onAdd={this.onAdd.bind(this)}
            onCancel={this.onCancel.bind(this)}
          />
        )
      default:
        return (
          <TaskList
            todos={this.state.todos}
            onAddStarted={this.onAddStarted.bind(this)}
            onDone={this.onDone.bind(this)}
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
        ref={(nav) => { this.nav = nav }}
        configureScene={this.configureScene}
        initialRoute={{name: 'tasklist', index: 0}}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }
}

Exponent.registerRootComponent(Main);
