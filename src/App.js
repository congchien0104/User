import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Table from 'react-bootstrap/Table';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      tasks : [], // id : unique, name, status
      isDisplayForm : true
    }
  }
  componentDidMount(){
    if(localStorage && localStorage.getItem('tasks')){
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks : tasks
      });
    }
  }
  
  s4(){
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
  }

  generateID(){
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4()
          + '-' + this.s4() + this.s4() + this.s4();
  }

  onToggleForm = () => {
    this.setState({
      isDisplayForm : !this.state.isDisplayForm
    });
  }
  onCloseForm = () =>{
    console.log('onCloseForm');
    this.setState({
      isDisplayForm : false
    });
  }
  onSubmit = (data) =>{
    //console.log(data);
    var { tasks } = this.state;
    data.id = this.generateID();
    console.log(data);
    tasks.push(data);
    this.setState({
      tasks : tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    //console.log(status);

  }
  render() {
    var { tasks, isDisplayForm } = this.state;
    var elmTaskForm = isDisplayForm ? <TaskForm onCloseForm={this.onToggleForm}
       onSubmit={this.onSubmit}
    
    /> : '';
    return (
      <div className="container">
        <div className="text-center">
          <h1>Task Management</h1>
        </div>
        <div className="row">
          <div className={isDisplayForm ? "col-xs-4 col-sx-4 col-md-4 col-lg-4" : ''}>
            { elmTaskForm }
          </div>

          <div className={ isDisplayForm ? "col-xs-8 col-sx-8 col-md-8 col-lg-8" : "col-xs-12 col-sx-12 col-md-12 col-lg-12"}>
            <Button variant="primary" onClick={this.onToggleForm}>Thêm Công Việc</Button>{' '}
            <TaskList tasks={tasks}/>
          
          </div>

        </div>
        
      </div>
    );
  }
}

export default App;
