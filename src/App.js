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
import Control from './components/Control';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h1>Task Management</h1>
        </div>
        <div className="row">
          <div className="col-xs-4 col-sx-4 col-md-4 col-lg-4">
            <TaskForm />
          </div>

          <div className="col-xs-8 col-sx-8 col-md-8 col-lg-8">
            <Button variant="primary">Thêm Công Việc</Button>{' '}
            <Control />

            <TaskList />
          
          </div>

        </div>
        
      </div>
    );
  }
}

export default App;
