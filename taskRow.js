import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E7E7E7',
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: '300',
  },
  doneButton: {
    borderRadius: 5,
    backgroundColor: '#EAEAEA',
    padding: 5,
  },
});

class TaskRow extends Component {
  onDonePressed() {
    this.props.onDone(this.props.todo);
  }

  onEditPressed() {
    console.log('wowowow')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.label}
          onLongPress={this.onEditPressed.bind(this)}
        >
          {this.props.todo.task}
        </Text>
        <TouchableHighlight
          style={styles.doneButton}
          onPress={this.onDonePressed.bind(this)}
        >
          <Text>
            Done
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

TaskRow.propTypes = {
  onDone: React.PropTypes.func.isRequired,
  onEdit: React.PropTypes.func.isRequired,
  todo: React.PropTypes.shape({
    task: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default TaskRow;

//add THL button 'done'
//add onDone func
