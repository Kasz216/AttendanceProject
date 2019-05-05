import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { IoIosText } from "react-icons/io";
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../App.css';
import Typography from '@material-ui/core/Typography';




const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});




class CheckboxList extends React.Component {
  state = {
    checked: [0],
    added: "",
    students: [ {
    
      key: "0",
      Name: "CC. Sabathia",
      Reason:""
    },
    {
      key: "1",
      Name: "Chan Ho Park",
      Reason:""
    },
    {
    key: "2",
      Name: "Mike Mussina",
      Reason:""
    },
    {
    add: true,
      key: "3",
      Name: "Tim Wakefield",
      Reason:""
    },
    ],
  };

  handleChange = added => event => {
    this.setState({
      [added]: event.target.value,
    });
  };

  addName = event => {
    var newArray = this.state.students.slice();    
    newArray.push(this.state.added);   
    this.setState({students:newArray})
  };


  reason = value => event => {
  var newArray = this.state.students.slice();    
  var theReason =  window.prompt("Reason for absense?", "");
  for(var i = 0; i < newArray.length; i++) 
    {
    if(newArray[i].key === value.key) 
      {
        newArray[i].Reason = theReason.toString();
      }
      this.setState({students:newArray})

    }
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
      
      <List className={"Reason-List4"}>
        {this.state.students.map(value => (
          <ListItem key={value.key} role={undefined}  button onClick={this.handleToggle(value)}>
  
            <Checkbox
              checked={this.state.checked.indexOf(value) !== -1}
              tabIndex={-1}
              disableRipple
            />
            <ListItemText primary={`${value.Name}`} 
                          secondary={`${value.Reason}`} />
            <ListItemSecondaryAction>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Comment"  onClick={this.reason(value)}>
            <IoIosText/>            
            </IconButton>
            </ListItemSecondaryAction>


          </ListItem>
          
        ))}
      </List>
      </div>
    );
  }
}

CheckboxList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxList);