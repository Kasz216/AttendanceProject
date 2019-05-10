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
import NewsCard from "../components/NewsCard";
import NewsCard1 from "../components/NewsCard1";
import Login2 from "../components/Login";
import EntryScreen from "../components/OldLogin";


const styles = theme => ({
  root: {
    width: '70%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    
  },
});




class Homepage extends React.Component {
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
  };




  render() {
    const { classes } = this.props;

    return (
      <div className = "App-header" >
        <div className = "App-Homepage">
          <EntryScreen />
      
          </div>
      </div>
    );
  }
}



export default withStyles(styles)(Homepage);