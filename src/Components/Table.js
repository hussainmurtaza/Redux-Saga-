import React,{Component} from 'react';
import {Table} from "react-bootstrap"


class TableComponent extends Component {
    user = () => {
        const user = this.props.user || []
        return user.map((user) => {
            return (
                <tr>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>
                    <td><img src={user.avatar}></img></td>

                </tr>
            )
        })
    }
    render() {
        return(
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {this.user()}
                    
                </tbody>
            </Table>
        );
    }
}


export default TableComponent;