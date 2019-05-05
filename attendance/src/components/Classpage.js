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
import '../App.css';
import Roster from '../components/Roster';
import DateList from '../components/DateList';
import Checklist from '../components/Checklist';
import StudentInfo from '../components/StudentInfo';
import ClassOverview from '../components/ClassOverview';


const styles = theme => ({
  root: {
    width: '70%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    
  },
});




class Classpage extends React.Component {

  state = {
    checked: [0],

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
        Reason:"Choked"
      },
      {
      add: true,
        key: "3",
        Name: "Tim Wakefield",
        Reason:""
      },
      ],

    serial: 3,
    added: "" , 
    ClassPageComp1: <ClassOverview />
  };

  constructor(props) {
    super(props)

    this.handler = this.handler.bind(this)
    this.handler2 = this.handler2.bind(this)
  }

  handler() 
  {
    this.setState({
      ClassPageComp1: <Checklist/>
    })
  }

  handler2() 
  {
    this.setState({
      ClassPageComp1: <StudentInfo/>
    })
  }


  changeRoster = event => 
  {
    this.setState(
    {
      ClassPageComp1: <Roster handler2 = {this.handler2} />,
    });
  };
  
  changeOverview = event => 
  {
    this.setState(
    {
      ClassPageComp1: <ClassOverview />,
    });
  };

  changeDates = event => 
  {
    this.setState(
    {
      ClassPageComp1: <DateList handler = {this.handler}  />,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className = "App-header" >
        <div className = "App-Homepage">
        <div className = "Space-between">
        <Button variant="contained" 
                color="secondary" 
                size="medium" 
                onClick={this.changeOverview} >
        Class Overview
      </Button>
        <Button variant="contained" 
                color="secondary" 
                size="medium" 
                onClick={this.changeRoster} >
        Class Roster
      </Button>

            <Button variant="contained" 
                color="secondary" 
                size="medium" 
                onClick={this.changeDates}
                >
        Attendance Sheets
      </Button>
      </div>

         <h1>Class Homepage</h1>
          {this.state.ClassPageComp1}
          </div>
      </div>
    );
  }
}


export default withStyles(styles)(Classpage);