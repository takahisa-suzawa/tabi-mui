import React, { PropTypes, Component } from 'react';
import { TextField } from 'material-ui';
import PlanCard from './PlanCard';
import { PLANS } from '../constants/Plans';

const styles = {
  list:{
    margin: '10px auto',
    width: '100%'
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '90%',
    minWidth: '500px'
　},
  search: {
    width: '350px'
  }
};

class PlanList extends Component {
  render() {
    let plans = PLANS;
    return (
      <div style={styles.list}>
        <TextField
          style={styles.search}
          hintText="例）鉄道 撮影、京都、デート"
          floatingLabelText="キーワード検索"
        />
        <div style={styles.flexContainer}>
          {plans.map((plan) => {
            return <PlanCard key={plan.id} plan={plan}/>;
          })}
        </div>
      </div>
    );
  }
}

export default PlanList;
