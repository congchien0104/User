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
  constructor(props){
    super(props);
    this.state = {
      id : '',
      name : '',
      status : true
    };
  }
  componentDidMount(){
    //console.log('componentDidMount');
    if(this.props.task){
      this.setState({
        id : this.props.task.id,
        name : this.props.task.name,
        status : this.props.task.status
      });
      console.log(this.state);
    }
  }
  componentWillReceiveProps(nextProps){
    //console.log(nextProps);
    if(nextProps && nextProps.task){
      this.setState({
        id : nextProps.task.id,
        name : nextProps.task.name,
        status : nextProps.task.status
      });
    }else if(!nextProps.task){
      //console.log('Edit --> Add');
      this.state = {
        id : '',
        name : '',
        status : true
      };
    }
  }
  onCloseForm = () =>{
    this.props.onCloseForm();
  }
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if(name === 'status'){
      value = target.value === 'true' ? true : false;
    }
    this.setState({
      [name] : value
    });
  }
  onSubmit = (event) =>{
    event.preventDefault();
    //console.log(this.state);
    this.props.onSubmit(this.state);
    // Cancel & Close Form
    this.onClear();
    this.onCloseForm();

  }
  onClear = () =>{
    this.setState({
      name : '',
      status : false
    });
  }
  render() {
    var { id } = this.state;
    return (
        <div>
            <div className="panel panel-warning">
              <div className="panel-heading">
              <h3 className="panel-title">
                { id !== '' ? "Update Task" : "Add Task"}
                
                <Button variant="primary" onClick={this.onCloseForm}>Close</Button>{' '}

              </h3>

              </div>
            </div>
            <Form onSubmit={this.onSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Tên:</Form.Label>
                <Form.Control type="text" name="name" value={this.state.name} 
                  onChange={this.onChange} />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Trạng Thái</Form.Label>
                <Form.Control as="select" name="status" value={this.state.status} 
                  onChange={this.onChange}>
                  <option value={true}>Kích hoạt</option>
                  <option value={false}>Ẩn</option>
                </Form.Control>
              </Form.Group>

              
              <Button variant="primary" type="submit">
                Save
              </Button>
              <Button variant="danger" type="button" 
                onClick={this.onClear}
              >Delete</Button>
            </Form>

          </div>
    );
  }
}

export default TaskForm;
