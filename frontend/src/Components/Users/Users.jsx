import { Component } from 'react';
import axios from 'axios';
import TableUsers from '../../UI/Table';

class Users extends Component{
    
    /* State for users */
    state = { data: null, error: null};

    /* New User Added */
   onFormClickHandler = ( name, email, web, location ) => {
    console.log(`In Users Compnent, Name: ${name}, Email: ${email}, Web: ${web}, Location: ${location}`);
    const userAdded = {name: name, email: email, web: web, location: location};
    const newUsers = [...this.state.data, userAdded];
    this.setState({ data: newUsers});

   }

    /* Call API */
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then( response => {
            const users = response.data;
            const modUsers = users.map((user) => {
                return { name: user.name, email: user.email, web: user.website, location: user.address.city}
            });
            this.setState({ data: modUsers, error: null });
        })
        .catch( error => {
            this.setState({ data: null, error: error});
        })

    }

    render(){
        return(
            <div>
                <TableUsers data={this.state}></TableUsers>
            </div>
        );
    }
}

export default Users;