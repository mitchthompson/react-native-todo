import React, { Component } from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import PropTypes from 'prop-types';

class TaskRow extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.label}>{this.props.todo.task}</Text>
      </View>
    );
  }
}

export default TaskRow;

TaskRow.propTypes = {
  todo: PropTypes.shape({
    task: PropTypes.string.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 20,
    justifyContent: 'space-between',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    padding:20,
  },
  label: {
    fontSize: 20,
    fontWeight: '300',
  }
});
