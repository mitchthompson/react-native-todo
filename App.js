import React, { Component } from 'react';
import { StyleSheet, Text, } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

const App = createStackNavigator({
  TaskList: {
    screen: TaskList,
  },
  TaskForm: {
    screen: TaskForm,
  },
});

export default App;
