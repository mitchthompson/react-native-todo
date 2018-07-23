import React, { Component } from 'react';
import {
  View,
  FlatList,
  TouchableHighlight,
  Text,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import TaskRow from './TaskRow';

class TaskList extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <View style={styles.container}>
        <FlatList
          data={this.props.todos}
          keyExtractor={item => item.id}
          renderItem={({item}) => <TaskRow todo={item} />}
        />

      <TouchableHighlight
        onPress={this.props.onAddStarted}
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

TaskList.propTypes = {
  onAddStarted: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

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
