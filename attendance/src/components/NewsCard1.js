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
import {IoIosThumbsUp} from "react-icons/io";
import {IoMdShareAlt} from "react-icons/io";
import {IoIosCafe} from "react-icons/io";
import Ipsum from './images.jpg'; 





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
  
  class NewsCard1 extends React.Component {
    state = { expanded: false };
  
    handleExpandClick = () => {
      this.setState(state => ({ expanded: !state.expanded }));
    };
  
    render() {
      const { classes } = this.props;
  
      return (
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                A
              </Avatar>
            }
            action={
              <IconButton>
                <IoIosCafe />
              </IconButton>
            }
            title="This Latin Phrase is EVERYWEHRE"
            subheader="March 09, 2019"
          />
          <CardMedia
            className={classes.media}
            image={Ipsum}
            title="Paella dish"
          />
          <CardContent>
            <Typography component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <IoIosThumbsUp/>
            </IconButton>
            <IconButton aria-label="Share">
              <IoMdShareAlt/>
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
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae orci sit amet nisl fermentum mattis. 
              Aliquam in velit id leo iaculis tincidunt at quis arcu. In dapibus tristique risus congue accumsan. 
              Phasellus semper ultricies sem vel dictum. Cras pharetra purus tellus, eget luctus nisi sollicitudin non. 
              Etiam molestie dapibus lacus, vel mollis erat lacinia et. Ut eget leo in metus aliquam interdum. Nulla facilisi. 
              Sed blandit neque ut pretium aliquet. Nulla lacinia risus tortor, quis volutpat est placerat nec.
              </Typography>
              
            </CardContent>
          </Collapse>
        </Card>
      );
    }
  }
  
  NewsCard1.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(NewsCard1);