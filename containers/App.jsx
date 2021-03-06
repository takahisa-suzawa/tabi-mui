import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as PlanActions from '../actions/plans';

import HeaderBar from './HeaderBar';
import PlanList from '../components/PlanList';
import PlanEditor from './PlanEditor';

// For Customization Options, edit  or use
// './src/material_ui_raw_theme_file.jsx' as a template.
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../src/material_ui_raw_theme_file'

class App extends Component {
  render() {
    const { todos, actions } = this.props;
    return (
      <div>
        <MuiThemeProvider muiTheme={theme}>
          <div>
            <HeaderBar/>
            <section className="main">
              {(() => {
                return this.props.newEntryDisplay === true ? <PlanEditor/> : null;
              })()}
              {(() => {
                return this.props.planListDisplay === true ? <PlanList/> : null;
              })()}
            </section>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
/*
App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
*/
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
)(App);

