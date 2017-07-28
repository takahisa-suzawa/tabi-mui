import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PlanActions from '../actions/plans';


import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {grey50} from 'material-ui/styles/colors';

const defaultStyle = {
  marginLeft: 20
};

class HeaderBar extends Component {
  handleNew() {
    this.props.actions.showPlanNewEntry();
  }
  handleSeach() {
    this.props.actions.showAllPlans();
  }

  mainMenu = () => (
    <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon color={grey50}/></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      <MenuItem primaryText="新規作成" onTouchTap={this.handleNew.bind(this)} />
      <MenuItem primaryText="検索"  onTouchTap={this.handleSeach.bind(this)} />
      <MenuItem primaryText="Settings" />
      <MenuItem primaryText="Help" />
      <MenuItem primaryText="Sign out" />
    </IconMenu>
  );

  render() {
    return (
      <header className="header">
          <AppBar title="Pals" iconElementLeft={this.mainMenu()}/>
      </header>
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
)(HeaderBar);