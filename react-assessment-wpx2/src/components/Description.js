import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {taskEdited, getTasks, deleteTask} from '../actions/task_actions'
import { bindActionCreators } from '../../../../../../Library/Caches/typescript/2.6/node_modules/redux';


class Description extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: [],
            string: '< Back to Tasks',
            title: '',
            description: '',
            completed: '',
        }
        this.updateDescription = this.updateDescription.bind(this)
        this.updateTitle = this.updateTitle.bind(this)
        this.completed = this.completed.bind(this)
        this.updateList = this.updateList.bind(this)
        this.backHome = this.backHome.bind(this)
    }

    componentDidMount() {
        console.log(this.props)
        this.props.getTasks();
        setTimeout(() => {
            this.setState({
              tasks: this.props.fullList[0]
            });
            console.log(this.props, this.state.tasks,'HEY')
            this.state.tasks.map(elem =>{
                if(elem.id === parseInt(this.props.match.params.id)){
                    return this.setState({
                        title: elem.title,
                        description: elem.description,
                        completed: elem.completed,
                    })
                }})
            }, 500)
}

    updateTitle(value){
        this.setState({
            title: value
        })
        console.log(this.state)
    }

    backHome(){
        this.props.history.push('/');
    }


    updateDescription(value){
        this.setState({  
                description: value,
        })
        console.log(this.state)
    }

    completed(){
    if(this.state.completed === false){
        this.setState({
            completed: true
        })
    } else {
        this.setState({
            completed: false
        })
    }
    setTimeout(()=>{
    console.log(this.state)}, 1000)
    }

    updateList(){
        console.log(this.props)
        this.props.taskEdited(this.props.match.params.id, {
            title: this.state.title,
            description: this.state.description,
            completed: this.state.completed,
        });
        this.props.history.push('/')
    }

    deleted(id){
        this.props.deleteTask(id)
        setTimeout(() => {
          this.props.getTasks()
          this.setState({
              tasks: this.props.fullList[0],
          })
      }, 1000)
      this.props.history.push('/')
    }

    render() {
        return (
            <div style={description}>
                    <Link to='/' style={link}>{this.state.string}</Link>
                {this.state.title ?
                <div style={detailsPage}>
                    <div style={newTitle}>
                    <input onChange={e => this.updateTitle(e.target.value)} defaultValue={this.state.title}></input>
                    {this.state.completed ? 
                      <button onClick={this.completed} style={btn}>Completed</button> :
                      <button onClick={this.completed} style={btn}>Incomplete</button> }
                    </div>
                    <div>
                        <textarea onChange={e => this.updateDescription(e.target.value)} style={details} defaultValue={this.state.description}>
                        </textarea>
                    </div>
                    <div style={buttons}>
                        <button onClick={this.updateList}>Save</button>
                        <button onClick={this.backHome}>Cancel</button>
                        <button onClick={() => this.deleted(this.props.match.params.id)}>Delete</button>
                    </div>
                </div> : null}
            </div>
        )
    }
}

const description = {
    backgroundColor: 'darkgrey',
}

const detailsPage = {
    margin: '0 auto',
    width: '80%',
    backgroundColor: 'red',
}

const link = {
    marginLeft: '100px',
    textDecoration: 'none',
    color: 'black',
    float: 'left',
}

const newTitle = {
    paddingTop: '30px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
}

const buttons = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
}

const details = {
    marginTop: '20px',
}

const btn = {
    margin: '2.5px 25px',
    height: '25px',
    width: '100px',
}

function mapStateToProps({ fullList }){
    return {
        fullList
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({taskEdited, getTasks, deleteTask}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Description);
