import React, { Component, PropTypes } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const styles = {

  action: {
    float: 'right'
  },
  flexItems: {
    maxWidth: '350px',
    flex: 'auto',
    minWidth: '110px',
    margin: '3px'
　}
};

class PlanCard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      editing: false
    };
  }
  render() {
    const { plan } = this.props;
    return (
      <Card style={styles.flexItems}>
        <CardHeader
          title={plan.avatarName}
          subtitle={plan.avatarFrom}
          avatar={plan.avatarImage}
        />
        <CardMedia
          //overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        >
          <img src={plan.imageSrc} />
        </CardMedia>
        <CardTitle title={plan.title} subtitle={plan.subTitle} />
        <CardText>
          {plan.text}
        </CardText>
        <CardActions style={styles.action}>
          <FlatButton hoverColor="#E1F5FE" label="詳細" />
        </CardActions>
      </Card>
    );
  }
}
export default PlanCard;