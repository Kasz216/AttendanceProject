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
import { IoIosRemoveCircle } from "react-icons/io";
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';




const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    
  },
});



class ClassOverview extends React.Component {
  state = {
    checked: [0],

    students: [ {
    
      key: "0",
      Name: "3-15-2019",
    },
    {
      key: "1",
      Name: "3-17-2019",
    },
    {
    key: "2",
      Name: "3-18-2019",
    },
    {
    key: "3",
    Name: "3-21-2019",
    
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
    var confirmation = window.confirm("DeleteClass?");
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


      <h4>Class Overview</h4>

      <h4></h4>
      <Typography paragraph>
      C.C. Sabathia has been to 4 out of 4 classes   
      </Typography>
      <Typography paragraph>
      Chan Ho Park has been to 2 out of 4 classes
      </Typography>
      <Typography paragraph>
      Mike Mussina has been to 1 out of 4 classes
      </Typography>
      <Typography paragraph>
      Tim Wakefield has been to 4 out of 4 classes
      </Typography>

   

      </div>
    );
  }
}

ClassOverview.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClassOverview);