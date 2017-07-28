import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PlanActions from '../actions/plans';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const styles = {
  paper: {
    height: '90%',
    width: '90%',
    margin: 20,
    textAlign: 'center',
    display: 'inline-block'
  }
} 

class PlanEditor extends Component {
  render() {
    return (
      <Paper style={styles.paper} zDepth={1} >
        <Toolbar>
          <ToolbarTitle text="新規プラン" />
        </Toolbar>
        <div>
          <TextField
            defaultValue="Default Value"
            floatingLabelText="Floating Label Text"
          /><br />
        </div>
      </Paper>
    );
  }
}

function mapStateToProps(state) {
  return {
    newEntryDisplay: state.plan.newEntryDisplay,
    planListDisplay: state.plan.planListDisplay
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PlanActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanEditor);
