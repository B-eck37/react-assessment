import React, { Component } from 'react'
import { connect } from 'react-redux'

class Task extends Component {
    constructor(props) {
        super(props)
        this.state = {
            taskName: ''
        }
    }
updateTask(e){
    this.setState({
        taskName: event.target.value
    })
}

    render() {
        return (
            <div style={taskPage}>
                <div style={topTask}>
                    <h1 style={title}>TO-DO:</h1>
                    <input style={input} onChange={(e) => {this.updateTask}} />
<button style={addNew}>Add new Task</button>
                </div>
                <div style={taskList}>
                    <div>
                        {this.state.taskname}
                    </div>
                </div>
            </div>
        )
    }
}

const taskPage = {
    width: '90vh',
    margin: '0 auto',

}

const topTask = {
    width: '100%',
    height: '300px',
    margin: '10px 0',
    boxShadow: '2pt 5pt 3pt darkgrey',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // backgroundColor: 'blue',
}

const addNew = {
    width: '150px',
    height: '58px',
    margin: '30px 40px',
    backgroundColor: '#00ADFD',
    color: 'white',
    fontSize: '14pt',
}

const taskList = {
    backgroundColor: '#EFEFEF',
    height: '500px',
}

const input = {
    border: 'transparent',
    borderBottom: 'solid Black 1pt',
    width: '90%',
    margin: '0 auto',
}

const title = {
    marginLeft: '25px',
    width: '150px',
}

export default Task;
