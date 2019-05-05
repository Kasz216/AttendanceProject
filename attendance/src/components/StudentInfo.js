import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import {IoIosArrowDown} from "react-icons/io";
import {IoIosPaperPlane} from "react-icons/io";
import {IoMdShareAlt} from "react-icons/io";
import {IoIosBasket} from "react-icons/io";
import Chan from './120221.jpg'; 





const styles = theme => ({
    card: {
      maxWidth: 400,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    actions: {
      display: 'flex',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  });
  
  class RecipeReviewCard extends React.Component {
    state = { expanded: false };
  
    handleExpandClick = () => {
      this.setState(state => ({ expanded: !state.expanded }));
    };
  
    render() {
      const { classes } = this.props;
  
      return (
        <Card className={classes.card}>
          <CardHeader
            
            
            title="Chan Ho Park"
            subheadIpad
          />
          <CardMedia
            className={classes.media}
            image={Chan}
            title="Chan Ho Park"
          />
          <CardContent>
            <Typography component="p">
            Chan Ho Park has been to 3 of your 5 classes.
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <IoIosPaperPlane/>
            </IconButton>
        
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <IoIosArrowDown />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
              3-17-2019 
              Sprained Knee

              </Typography>
              <Typography paragraph>
             
              3-21-2019
              No Excuse Given
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      );
    }
  }
  
  RecipeReviewCard.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(RecipeReviewCard);