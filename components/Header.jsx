import React, { PropTypes, Component } from 'react';
import TodoTextInput from './TodoTextInput';

const defaultStyle = {
  marginLeft: 20
};

class TodoInput extends Component {
  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render() {
    return (
      <div className="header">
          <TodoTextInput newTodo
                         onSave={this.handleSave.bind(this)}
                         placeholder="What needs to be done?" />
      </div>
    );
  }
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default TodoInput;
