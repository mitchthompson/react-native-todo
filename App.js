import React, { Component } from 'react';
import { StyleSheet, Text, } from 'react-native';
import TaskList from './TaskList';

export default class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          task: 'Learn React Native',
          id: '1',
        },
        {
          task: 'Learn Redux',
          id: '2',
        },
      ]
    };
  }

  onAddStarted() {
    console.log('on add started');
  }

  render() {
    return (
        <TaskList
          onAddStarted={this.onAddStarted.bind(this)}
          todos={this.state.todos}
        />
    );
  }
}
