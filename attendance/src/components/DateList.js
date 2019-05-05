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
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";




const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    
  },
});



class DateList extends React.Component {
  state = {
    checked: [0],

    startDate: '',

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


  handleDateChange = date => {
    this.setState({
      startDate: date
    });
  }



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


      <h4>Attendance Sheets</h4>
      
    
<DatePicker
    selected={this.state.startDate}
    onChange={this.handleDateChange}
    showTimeSelect
    timeFormat="HH:mm"
    timeIntervals={15}
    dateFormat="MMMM d, yyyy h:mm aa"
    timeCaption="time"
/>
        
        <Button variant="contained" 
                color="primary" 
                size="small" 
                onClick={this.addName} >
        Add Class
      </Button>

      <List className={"Reason-List4"}>
      <div className={"List-border"}>
        {this.state.students.map(value => (
          <ListItem key={value.key} role={undefined}  button onClick = {this.props.handler} >
  
            <ListItemText primary={`${value.Name}`} />
        
            <ListItemSecondaryAction>
            <IconButton 
              className={classes.menuButton} 
              color="inherit" 
              aria-label="Comment"
              onClick={this.deleteName(value)} >            
            <IoIosRemoveCircle />            
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

DateList.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(DateList);