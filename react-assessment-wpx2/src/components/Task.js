import React, { Component } from 'react'

class Task extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div style={taskPage}>
                <div style={topTask}>
                    <h1>TO-DO:</h1>
                    <input style={input} />
<button style={addNew}>Add new Task</button>
                </div>
                <div style={taskList}>
Hello
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
    margin: '0 auto',
    width: '100%',
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
}

const addNew = {
    width: '200px',
    height: '75px',
    color: 'blue',
}

const taskList = {
    backgroundColor: 'lightgrey',
    height: '100%',
}

const input = {
    border: 'transparent',
    borderBottom: 'solid Black 1pt',
    width: '500px'
}


export default Task;
