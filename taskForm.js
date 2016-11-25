import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 150,
    backgroundColor: '#f7f7f7',
  },
  input: {
    borderWidth: 1,
    borderColor: '#d7d7d7',
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    padding: 15,
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
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
  }
})

class TaskForm extends Component {
  constructor(props, context) {
    super(props, context);
  };

  onChange(text) {
    this.task = text;
  }

  onAddPressed() {
    this.props.onAdd(this.task);
  }

  render() {
    return(
      <View style={styles.container}>
        <TextInput
          onChangeText={this.onChange.bind(this)}
          style={styles.input}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.onAddPressed.bind(this)}
        >
          <Text style={styles.buttonText}>
            Add new Task
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.button, styles.cancelButton]}
          onPress={this.props.onCancel}
        >
          <Text style={styles.buttonText}>
            Cancel
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

TaskForm.propTypes = {
  onCancel: React.PropTypes.func.isRequired,
  onAdd: React.PropTypes.func.isRequired,
};

export default TaskForm;
