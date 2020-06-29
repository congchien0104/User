import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Table from 'react-bootstrap/Table';

class TaskItem extends Component {
  render() {
    var { task, index } = this.props;
    
    // onUpdatStatus = () =>{
    //   console.log(this.props.task.id);
    // }
    return (
        <tr>
            <td>{ index + 1 }</td>
            <td>{ task.name }</td>
            <td>
              <span className="label label-danger"
                    onClick={this.onUpdatStatus}
              
                >{ task.status === true ? "Kich hoat" : "An" }</span>
            </td>
            <td><Button variant="warning">Update</Button>{' '}
                <Button variant="danger">Delete</Button>
            </td>
        </tr>
    );
  }
}

export default TaskItem;