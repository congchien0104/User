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

class TaskForm extends Component {
  render() {
    return (
        <div>
            <div className="panel panel-warning">
              <div className="panel-heading">
              <h3 className="panel-title">
                Thêm Công Việc
                <span className="fa fa-times-cirle text-right"></span>

              </h3>

              </div>
            </div>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Tên:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Trạng Thái</Form.Label>
                <Form.Control as="select">
                  <option>Kích hoạt</option>
                  <option>Ẩn</option>
                </Form.Control>
              </Form.Group>

              
              <Button variant="primary" type="button">
                Submit
              </Button>
              <Button variant="danger">Danger</Button>
            </Form>

          </div>
    );
  }
}

export default TaskForm;
