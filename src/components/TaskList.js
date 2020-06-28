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
  render() {
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
                    <td><FormControl type="text" placeholder="Search" className="mr-sm-2" /></td>
                    <td>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Control as="select">
                        <option>Kích hoạt</option>
                        <option>Ẩn</option>
                        </Form.Control>
                    </Form.Group>
                    </td>
                    <td></td>
                </tr>
                <TaskItem />
                <TaskItem />
                <TaskItem />
            </tbody>
        </Table>
        
    );
  }
}

export default TaskList;