import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FaTimes } from "react-icons/fa";
import IconButton from '@material-ui/core/IconButton';



const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    
  },
});



class Roster extends React.Component {
  state = {
    checked: [0],

    students: [ {
    
      key: "0",
      Name: "CC. Sabathia",
    },
    {
      key: "1",
      Name: "Chan Ho Park",
    },
    {
    key: "2",
      Name: "Mike Mussina",
    },
    {
    add: true,
      key: "3",
      Name: "Tim Wakefield",
    },
    ],
    serial: 3,
    added: "" , 
  };




  handleChange = added => event => {
    this.setState({
      [added]: event.target.value,
    });
  };

  addName = event => {
    var newArray = this.state.students.slice(); 
    var student  =  {
    
                      key:this.state.serial + 1,
                      Name: this.state.added,
                      };

    newArray.push(student);   
    this.setState({students:newArray, serial: student.key})
  };

  deleteName = value => event => {
    var confirmation = window.confirm("Drop Student?");
    if (confirmation == false){
      return
    }
    var newArray = this.state.students.slice();    
    var deleteIndex = 0;
    for(var i = 0; i < newArray.length; i++) {
      if(newArray[i].key === value.key) {
          deleteIndex = i;
      }
  }

    
    newArray.splice(deleteIndex, 1);   
    this.setState({students:newArray})
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
      <div className={"Reason-List4"}>


      <h4>Class Roster</h4>
      <TextField
          id="Add Student"
          label="Student Name"
          className={"Reason-List3"}
          value={this.state.added}
          onChange={this.handleChange('added')}
          margin="normal"
          variant="outlined"
          fullWidth="false"
          width="30%"

        />
        
        <Button variant="contained" 
                color="primary" 
                size="small" 
                onClick={this.addName} >
        Submit
      </Button>

      <List className={"Reason-List4"}>
      <div className={"List-border"}>
        {this.state.students.map(value => (
          <ListItem key={value.key} role={undefined}  button onClick={this.props.handler2}>
  
            <ListItemText primary={`${value.Name}`} />
        
            <ListItemSecondaryAction>
            <IconButton 
              className={classes.menuButton} 
              color="inherit" 
              aria-label="Comment"
              onClick={this.deleteName(value)} >

            <FaTimes />            
            </IconButton>
            </ListItemSecondaryAction>
          </ListItem>

        ))}
        </div>
      </List>
      </div>
    );
  }
}

Roster.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Roster);