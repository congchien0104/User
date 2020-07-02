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
import TaskItem from './TaskItem';

class TaskList extends Component {
  
  constructor(props){
      super(props);
      this.state = {
          filterName: '',
          filterStatus : -1 // all: -1 Kich Hoat: 0 An: 1
      };
  }
  onChange = (event) =>{
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.props.onFilter(
        name === 'filterName' ? value : this.state.filterName,
        name === 'filterStatus' ? value : this.state.filterStatus,
      )
    this.setState({
        [name] : value
    });
 }
  render() {
    var { tasks} = this.props;  // var tasks = this.props.tasks;
    var { filterName, filterStatus } = this.state;

    var elmTasks = tasks.map((task,index) =>{
        return <TaskItem key={task.id} index={index} task={task}
                   onUpdateStatus={this.props.onUpdateStatus}
                   onDelete={this.props.onDelete}
                   onUpdate={this.props.onUpdate}
                
                />
    });
    
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Trạng Thái</th>
                    <th>Hành Động</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td><FormControl type="text" placeholder="Search" className="mr-sm-2" 
                                     name="filterName"
                                     value={filterName}
                                     onChange={ this.onChange }

                    /></td>
                    <td>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Control as="select"
                                     name="filterStatus"
                                     value={filterStatus}
                                     onChange={ this.onChange }
                           
                        >
                        <option value={-1}>All</option>
                        <option value={0}>Kích hoạt</option>
                        <option value={1}>Ẩn</option>
                        </Form.Control>
                    </Form.Group>
                    </td>
                    <td></td>
                </tr>
                { elmTasks }
            </tbody>
        </Table>
        
    );
  }
}

export default TaskList;