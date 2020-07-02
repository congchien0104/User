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
  onUpdateStatus = () =>{
    //console.log(this.props.task.id);
    this.props.onUpdateStatus(this.props.task.id);
  }
  onDelete = () =>{
    //console.log(this.props.task.id);
    this.props.onDelete(this.props.task.id);
  }
  onUpdate = () =>{
    //console.log(this.props.task.id);
    this.props.onUpdate(this.props.task.id);
  }
  render() {
    var { task, index } = this.props;
    
    return (
        <tr>
            <td>{ index + 1 }</td>
            <td>{ task.name }</td>
            <td>
              <span className="label label-danger"
                    onClick={this.onUpdateStatus}
                >{ task.status === true ? "Kich hoat" : "An" }</span>
            </td>
            <td><Button variant="warning" type="button"
                onClick={ this.onUpdate}
            >Edit</Button>{' '}
                <Button variant="danger" type="button"
                    onClick={this.onDelete}
                >Delete</Button>
            </td>
        </tr>
    );
  }
}

export default TaskItem;