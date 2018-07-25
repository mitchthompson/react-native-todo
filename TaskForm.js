import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight
} from 'react-native';
import PropTypes from 'prop-types';

class TaskForm extends Component {
  static navigationOptions = {
    title: 'Add Task',
  };
  constructor(props){
    super(props);
  }

  onChange(text) {
    this.task = text;
  }

  onAddPressed() {
    this.props.navigation.state.params.onAdd(this.task);
  }

  render() {
    const { params } = this.props.navigation.state;
    return(
      <View style={styles.container}>
        <TextInput
          onChangeText={this.onChange.bind(this)}
          style={styles.input}
        />
        <TouchableHighlight
          onPress={this.onAddPressed.bind(this)}
          style={styles.button}
        >
          <Text
            style={styles.buttonText}
          >
            Add
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            params.onCancel();
          }}
          style={[styles.button, styles.cancelButton]}
        >
          <Text
            style={styles.buttonText}
          >
            Cancel
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default TaskForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 150,
    backgroundColor: '#F7F7F7',
  },
  input: {
    borderWidth: 1,
    borderColor: '#D7D7D7',
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    padding: 15,
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '300',
    color: '#FAFAFA',
  },
  button: {
    height: 45,
    alignSelf: 'stretch',
    backgroundColor: '#05A5D1',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButton: {
    backgroundColor: '#666',
  },
});
