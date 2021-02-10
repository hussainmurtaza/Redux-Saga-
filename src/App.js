import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import Table from './Components/Table'

import React, { Component } from 'react'
import UserAction from './Redux/Users/UserActions';

class App extends Component {

    componentDidMount(){
        this.props.dispatch(UserAction.fetchData())
    }
    render() {
        const users = this.props.users
        return (

            <div>
                <Table user={users}/>
                <button className="btn btn-primary">Fetch</button>
                <div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        users : state.userList.user
    }
}

export default connect(mapStateToProps)(App);
