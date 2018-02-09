import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {taskEdited} from '../actions/task_actions'
import { bindActionCreators } from '../../../../../../Library/Caches/typescript/2.6/node_modules/redux';


class Description extends Component {
    constructor(props) {
        super(props)
        this.state = {
            string: '< Back to Tasks',
            title: '',
            description: '',
            completed: '',
        }
        this.updateDescription = this.updateDescription.bind(this)
        this.updateTitle = this.updateTitle.bind(this)
        this.completed = this.completed.bind(this)
        this.updateList = this.updateList.bind(this)
    }

    componentDidMount() {
        console.log(this.props)
        this.props.fullList.fullList.map(elem => {
            console.log(elem.id, parseInt(this.props.match.params.id), 'Hello')
            if(elem.id === parseInt(this.props.match.params.id)){
                console.log(elem, 'inside')
                return this.setState({
                        title: elem.title,
                        description: elem.description,
                        completed: elem.completed
                    })
      }})
    }

    updateTitle(value){
        this.setState({
            title: value
        })
        console.log(this.state)
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
                        <button>Cancel</button>
                        <button>Delete</button>
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
    return bindActionCreators({taskEdited}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Description);
