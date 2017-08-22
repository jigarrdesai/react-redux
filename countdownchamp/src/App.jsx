import React, { Component } from 'react';
import logo from './logo.svg';
import Clock from './Clock';
import './App.css';
import {Form,FormControl,Button} from 'react-bootstrap'

class App extends Component {
  constructor(props){
   super(props);
   this.state = {
    deadline:'December 25,2017',
    newDeadLine: '',
    count: 0
   }
  }

  changeDeadline(){
    this.setState({deadline:'November 27,2017'})
    console.log('STATE ',this.state);
    this.setState({deadline: this.state.newDeadLine});
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>CountDown App</h2>
        </div>
        <div className="App-intro">
           <div> Countdown to {this.state.deadline} </div>
          <Clock deadline={this.state.deadline}/>
           <Form inline>
                <FormControl placeholder='new date'
                onChange={event => this.setState({newDeadLine : event.target.value})}/>
              <Button onClick={() => this.changeDeadline()}>Submit</Button>
           </Form>
        </div>
      </div>
    );
  }
}

export default App;
