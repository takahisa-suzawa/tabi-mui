import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PlanActions from '../actions/plans';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import PlanTodo from './PlanTodo'

import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';

const styles = {
  editor: {
    margin: '20px'
  },
  paper: {
    height: '100%',
    width: '100%'
  },
  margin: {
    marginLeft: '20px'
  },
  inputText: {
    width: '90vw'
  },
  radioButton: {
    marginTop: '20px'
  }
} 

class PlanEditor extends Component {
  ListExampleSimple = () => (
    <MobileTearSheet>
      <List>
        <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
        <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
        <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
        <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
        <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
      </List>
    </MobileTearSheet>
  );

  render() {
    return (
      <div style={styles.editor}>
        <Paper style={styles.paper} zDepth={1} >
          <Toolbar>
            <ToolbarTitle text="新規プラン" />
          </Toolbar>
          <div style={styles.margin}>
            <RadioButtonGroup name="planPublish" defaultSelected="myself">
              <RadioButton
                value="myself"
                label="未公開"
                checkedIcon={<VisibilityOff style={{color: '#F44336'}} />}
                uncheckedIcon={<VisibilityOff />}
                style={styles.radioButton}
              />
              <RadioButton
                value="limitedMember"
                label="限定公開（URLを知っている人だけがアクセスできます）"
                checkedIcon={<Visibility style={{color: '#F44336'}} />}
                uncheckedIcon={<Visibility />}
                style={styles.radioButton}
              />
              <RadioButton
                value="public"
                label="公開（サイト利用者全員に公開します）"
                checkedIcon={<Visibility style={{color: '#F44336'}} />}
                uncheckedIcon={<Visibility />}
                style={styles.radioButton}
              />
            </RadioButtonGroup>
            <TextField
              style={styles.inputText}
              hintText="例）◯◯プラン、◯◯食べ歩きMAP、etc..."
              floatingLabelText="プラン名（※必須）"
            />
            <TextField
              style={styles.inputText}
              hintText="例）◯◯の周辺の観光スポットを歩いて回るプランです"
              floatingLabelText="サブタイトル"
            />
            <div >
              <p>計画</p>
              <PlanTodo/>
            </div>
          </div>
        </Paper>
      </div>
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
