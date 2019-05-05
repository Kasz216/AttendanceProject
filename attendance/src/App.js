import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Appbar from './components/Appbar';
import CheckboxList from './components/Checklist';
import Roster from './components/Roster';
import Button from '@material-ui/core/Button';
import ClassesList from './components/ClassesList';
import { Typography } from '@material-ui/core';
import { IoIosMenu } from 'react-icons/io';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Homepage from './components/Homepage';
import Classpage from './components/Classpage';



class App extends Component 
{
  state = {
    component1: <Homepage/>,
    anchorEl: null,
  };

  constructor(props) {
    super(props)

    this.handler = this.handler.bind(this)
  }

  handler() 
  {
    this.setState({
      component1: <Classpage/>
    })
  }


  handleClick = event => 
  {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => 
  {
    this.setState({ anchorEl: null });
  };



  changeRoster = event => 
  {
    this.setState(
    {
      component1: <Roster />,
      anchorEl: null


    });
  };

  
  changeClassesList = event => 
  {
    this.setState(
    {
      component1: <ClassesList handler = {this.handler}  />,
      anchorEl: null


    });
  };



  render() {

    const { anchorEl } = this.state;


    return (
      <div className="App">
        <header className="App-header">
          <div className= "App-bar">
          <IconButton color="inherit" aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}>
          <IoIosMenu />
          </IconButton>
          <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          >
          <MenuItem onClick={this.handleClose}>My Profile</MenuItem>
          <MenuItem onClick={this.handleClose}>My Classes</MenuItem>
        </Menu>
          <h3 className= "App-comp" >Attendence</h3>

          <h5 className= "App-comp" >Login</h5>

          </div>
          </header>

      <div className ="App-row">
        <ClassesList   handler = {this.handler} />
        {this.state.component1}
        </div>        
      
        
        </div>
    );
  
  };
}



export default App;
