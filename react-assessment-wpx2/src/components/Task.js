import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getTasks, newTask, deleteTask, toggleComplete } from "../actions/task_actions";
import MdClose from "react-icons/lib/md/close";
import { Link } from "react-router-dom";

class Task extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      tasks: []
    };
    this.addTask = this.addTask.bind(this);
    this.deleted = this.deleted.bind(this);
    this.toggled = this.toggled.bind(this);
  }

  componentDidMount() {
    this.props.getTasks();
    setTimeout(() => {
      this.setState({
        tasks: this.props.fullList[0]
      });
      console.log(this.props, 'HEY')
    }, 500);
  }

  addTask(){
    this.props.newTask(this.state.title)
    this.setState({
        title: ''
    })
    setTimeout(() => {
        this.props.getTasks()
        return this.setState({
            tasks: this.props.fullList[0],
        })
    }, 500)
  }

  updateTask(value){
      this.setState({
          title: {title: value}
      })
      console.log(this.state.title)
  }

  deleted(id){
      this.props.deleteTask(id)
      this.setState({
          tasks: []
      })
      setTimeout(() => {
        this.props.getTasks()
        this.setState({
            tasks: this.props.fullList[0],
        })
    }, 1000)
  }

  toggled(id){
      console.log('hello')
      this.props.toggleComplete(id)
      setTimeout(() => {
          this.props.getTasks()
          this.setState({
              tasks: this.props.fullList[0]
          })
      }, 200)
  }


  render() {
    return (
      <div style={taskPage}>
        <div style={topTask}>
          <h1 style={title}>TO-DO:</h1>
          <input
            style={input}
            onChange={e => this.updateTask(e.target.value)}
            placeholder="Enter Task Name"
          />
          <button style={addNew} onClick={this.addTask}>
            Add new Task
          </button>
        </div>
        <div style={taskList}>
          <div>
            {this.state.tasks
              ? this.state.tasks.map(task => {
                  
                  return (
                    //   {task.completed ? <div style={tasksComplete}> </div> : }
                    <div style={tasks} key={task.id} onClick={this.seeDetails}>
                      {task.title}
                      <Link to={`/details/${task.id}`} style={link}>
                        Details
                      </Link>
                      {task.completed ? 
                      <button style={btn}>Completed</button> :
                      <button onClick={() => this.toggled(task.id)} style={btn}>Incomplete</button> }
                      <button style={x} onClick={() => this.deleted(task.id)}><MdClose /></button>
                    </div>
                  );
                })
              : this.props.fullList.map(task => {
                return (
                    <div style={tasks} key={task.id} onClick={this.seeDetails}>
                      {task.title}
                      <Link to={`/details/${task.id}`} style={link}>
                        Details
                      </Link>
                      {task.completed ? 
                      <button style={btn}>Completed</button> :
                      <button onClick={() => this.toggled(task.id)} style={btn}>Incomplete</button> }
                      <button style={x} onClick={() => this.deleted(task.id)}><MdClose /></button>
                    </div>
                  );
              })}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ fullList }) {
  return {
    fullList,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getTasks, newTask, deleteTask, toggleComplete }, dispatch);
}

const taskPage = {
  width: "90vh",
  margin: "0 auto"
};

const topTask = {
  width: "100%",
  height: "300px",
  margin: "10px 0",
  boxShadow: "2pt 5pt 3pt darkgrey",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
};

const addNew = {
  width: "150px",
  height: "58px",
  margin: "30px 40px",
  backgroundColor: "#00ADFD",
  color: "white",
  fontSize: "14pt"
};

const taskList = {
  backgroundColor: "#EFEFEF",
  height: "500px"
};

const input = {
  border: "transparent",
  borderBottom: "solid Black 1pt",
  width: "90%",
  margin: "0 auto"
};

const title = {
  marginLeft: "25px",
  width: "150px"
};

const tasks = {
  width: "80%",
  height: "30px",
  margin: "10px auto",
  backgroundColor: "white",
  border: "solid grey 2pt",
  boxShadow: "4pt 2pt darkgrey",
  fontSize: "16pt",
  textAlign: "left"
};
const x = {
  float: "right"
};
const link = {
  margin: "2.5px 15px",
  textDecoration: "none",
  height: "25px",
  width: "10%",
  color: "white",
  backgroundColor: "grey"
};

const btn = {
    margin: '2.5px 25px',
    height: '25px',
    width: '100px',
}
export default connect(mapStateToProps, mapDispatchToProps)(Task);
