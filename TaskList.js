import React, { Component } from 'react';
import {
  View,
  FlatList,
  TouchableHighlight,
  Text,
  Alert,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import TaskRow from './TaskRow';

class TaskList extends Component {
  static navigationOptions = {
    title: 'Your Tasks',
  };
  constructor(props){
    super(props);
    this.state = {
      todos: [
        {
          task: 'Learn React Native',
        },
        {
          task: 'Learn Redux',
        },
      ],
    };
  }

  onDone(todo) {
    console.log('task was completed: ', todo.task);
    const filterTodos =
      this.state.todos.filter((filterTodo) => {
        return filterTodo !== todo;
      });
      this.setState({ todos:filterTodos });
  }

  _onAdd(task){
    console.log('New task added: ', task);
    this.state.todos.push({
      task: task,
    });
    this.setState({ todos: this.state.todos });
    this.props.navigation.navigate('TaskList');
  }

  _onCancel(){
    //console.log("onCancel started...");
    this.props.navigation.navigate('TaskList');
  }

  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <FlatList
          data={this.state.todos}
          extraData={this.state}
          keyExtractor={item => item.id}
          renderItem={({item}) =>
          <TaskRow
            todo={item}
            onDone={this.onDone.bind(this)}
            />}
        />

      <TouchableHighlight
        onPress={() => {
            navigate('TaskForm', {
              onAdd: this._onAdd.bind(this),
              onCancel: this._onCancel.bind(this),
            });
          }
        }
        style={styles.button}
      >
        <Text
          style={styles.buttonText}
        >
          Add One
        </Text>
      </TouchableHighlight>
      </View>
    );
  }
}

export default TaskList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F7F7F7',
    paddingTop: 50,
  },
  button: {
    height: 60,
    borderColor: '#05A5D1',
    borderWidth: 2,
    backgroundColor: '#333',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FAFAFA',
    fontSize: 20,
    fontWeight: '600',
  },
});
