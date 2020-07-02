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
      isDisplayForm : false,
      taskEditing : null,
      filter : {
        name : '',
        status : -1
      }
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
    if(this.state.isDisplayForm && this.state.taskEditing !== null){
      this.setState({
        isDisplayForm : true,
        taskEditing : null
      });

    }else{
      this.setState({
        isDisplayForm : !this.state.isDisplayForm,
        taskEditing : null
      });
    }
    
  }
  onCloseForm = () =>{
    //console.log('onCloseForm');
    this.setState({
      isDisplayForm : false
    });
  }
  onShowForm = () =>{
    this.setState({
      isDisplayForm : true
    });
  }
  onSubmit = (data) =>{
    //console.log(data);
    var { tasks } = this.state;
    if(data.id === ''){
      data.id = this.generateID();
      tasks.push(data);
    }else{
      // Editing
      var index = this.findIndex(data.id);
      tasks[index] = data;

    }
    this.setState({
      tasks : tasks,
      taskEditing : null
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    //console.log(status);

  }

  onUpdateStatus = (id) => {
    //console.log(id);
    var {tasks} = this.state;
    var index = this.findIndex(id);
    console.log(index);
    if(index !== -1){
      tasks[index].status = !tasks[index].status ;
      this.setState({
        tasks : tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }

  }
  findIndex = (id) =>{
    var {tasks} = this.state;
    var result = -1;
    tasks.forEach((task,index) =>{
      if(task.id === id){
        result = index;
      }
    });
    return result;
  }
  onDelete = (id) =>{
    //console.log(id);
    var {tasks} = this.state;
    var index = this.findIndex(id);
    console.log(index);
    if(index !== -1){
      tasks.splice(index, 1);
      this.setState({
        tasks : tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    this.onCloseForm();

  }
  onUpdate = (id) =>{
    //console.log(id);
    var {tasks} = this.state;
    var index = this.findIndex(id);
    var taskEditing = tasks[index];
    //console.log(taskEditing);
    this.setState({
      taskEditing : taskEditing
    });
    this.onShowForm();

  }

  onFilter = (filterName, filterStatus) =>{
    //console.log(filterName + '-' + filterStatus);
    filterStatus = parseInt(filterStatus, 10);
    //console.log(typeof filterStatus);
    this.setState({
      filter : {
        name : filterName.toLowerCase(),
        status : filterStatus
      }
    });

  }
  render() {
    var { tasks, isDisplayForm, taskEditing, filter } = this.state;
    if(filter){
      if(filter.name){
        tasks = tasks.filter((task) =>{
          return task.name.toLowerCase().indexOf(filter.name) !== -1;
        });
      }
      tasks = tasks.filter((task) =>{
        if(filter.status === -1){
          return task;
        }else{
          return task.status === (filter.status === 1 ? true : false);
        }
      });
    }
    //console.log(filter);
    var elmTaskForm = isDisplayForm ? <TaskForm onCloseForm={this.onToggleForm}
       onSubmit={this.onSubmit}
       onCloseForm={this.onCloseForm}
       task={taskEditing}
    
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
            
            <TaskList 
              tasks={tasks} 
              onUpdateStatus={this.onUpdateStatus}
              onDelete={this.onDelete}
              onUpdate={this.onUpdate}
              onFilter={this.onFilter}/>
              
          
          </div>

        </div>
        
      </div>
    );
  }
}

export default App;
