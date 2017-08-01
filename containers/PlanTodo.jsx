import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import TodoTextInput from '../components/TodoTextInput';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import * as TodoActions from '../actions/todos';

const todoTextInputLabels = {
  location:{
    label: 'ロケーション名',
    placeholder: '例）◯◯タワー'
  },
  move:{
    label: '目的地',
    placeholder: '例）浜松町'
  },
  meal:{
    label: '昼食',
    placeholder: '例）名物◯◯ラーメン'
  },
  stay:{
    label: '宿泊場所',
    placeholder: '例）◯◯ホテル'
  },
  etc:{
    label: 'その他',
    placeholder: '例）待ち合わせ'
  }
}

class PlanTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'location'};
  }

  handleSave(text) {
    if (text.length !== 0) {
      this.props.actions.addTodo(text);
    }
  }

  handleChange = (event, index, value) => this.setState({value});

  getLabel = () => {return todoTextInputLabels[this.state.value].label;}
  getPlaceholder = () => {return todoTextInputLabels[this.state.value].placeholder;}

  render() {
    const { todos, actions } = this.props;
    return (
      <div>
        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={'location'} primaryText="ロケーション" />
          <MenuItem value={'move'} primaryText="移動" />
          <MenuItem value={'meal'} primaryText="食事" />
          <MenuItem value={'stay'} primaryText="宿泊" />
          <MenuItem value={'etc'} primaryText="その他" />
        </DropDownMenu>
        <TodoTextInput newTodo
                         onSave={this.handleSave.bind(this)}
                         placeholder={this.getPlaceholder()}
                         label={this.getLabel()} />
        <TodoList todos={todos} actions={actions}/>
      </div>
    );
  }
}

PlanTodo.propTypes = {
  
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanTodo);
