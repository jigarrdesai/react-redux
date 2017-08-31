import React,{Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addReminder, deleteReminder,clearReminders } from '../actions';
import moment from 'moment';


import '../App.css';

class App extends Component {
  //eslint-disable-next-line
  constructor(props) {
    super(props);
    this.state = {
      text:'',
      dueDate:''
    }

  }

  addReminder() {
    console.log('this',this);
    this.props.addReminder(this.state.text,this.state.dueDate);

  }

  deleteReminder(id) {
    console.log('delete in application',id);
    console.log('props',this.props);
    this.props.deleteReminder(id);

  }

  renderReminders(){
    const { reminders } = this.props;
    console.log('reminders',reminders);
    return(
      <ul className="list-group col-sm-4">
        {
          reminders.map(reminder => {
            return(
              <li key={reminder.id} className="list-group-item">
                <div className="list-item">
                  <div>{reminder.text}</div>
                    <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>

                </div>

                <div className="list-item delete-button"
                     onClick={()=>this.deleteReminder(reminder.id)}
                  >
                  &#x2715;
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  render(){
    console.log('this.props',this.props);
    return(
      <div className="App">
        <div className="title">
          Reminder Pro
        </div>
        <div className="form-inline">
          <div className="form-group">
            <input className="form-control"
              placeholder="I have to..."
              onChange={event => this.setState({text: event.target.value})}
               />
             <input className="form-control"
               type="datetime-local"
               onChange={event => this.setState({dueDate: event.target.value})}
               />
          </div>
        </div>

        <button type="button"
          className="btn btn-succes"
          onClick={()=>this.addReminder()}>
          Add Reminder
        </button>
        {this.renderReminders()}
        <div
         className="btn btn-danger"
         onClick={() => this.props.clearReminders()}
         >
         Clear Reminders
       </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addReminder},dispatch);
}

function mapStateToProps(state) {
  console.log('state',state);
  return{
    reminders: state
  }

}

//export default connect(mapStateToProps, mapDispatchToProps)(App);
export default connect(mapStateToProps,  { addReminder, deleteReminder,clearReminders })(App);
