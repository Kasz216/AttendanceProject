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
import LoginPage from "../components/Login";
import RegisterPage from "../components/Signup";







const styles = theme => ({

  });

    

class EntryScreen extends React.Component {
  
    
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  


  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    let passinput
    let emailinput
    let swapinput
    
    if (isLoggedIn) {
      emailinput =<input type="text" placeholder="Email"/>
      passinput =<input type="password" placeholder="Password"/>;
      button = <button > Signup</button>;
      swapinput = <p class ="message"> Already have an account? <a href="#" onClick={this.handleLogoutClick} >Login </a> </p>;

    } else {
      emailinput =<input type="text" placeholder="Email"/>
      passinput = <input type="password" placeholder="Password"/>;
      button = <button>Login</button> ;
      swapinput =     <p class ="message" > Create an account? <a href="#"  onClick={this.handleLoginClick} >Create</a></p>;
  }




    
      return (
        <div>
      
        {emailinput}
        {passinput}
        {button}
        {swapinput}
      
      </div>
      );
    }
  }




export default withStyles(styles)(EntryScreen);