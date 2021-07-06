import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const styles = theme => ({
  root: {
    '& > *': {
      margin: 2,
      width: '25ch',
      padding: '10px',
    },
  },
});

class Form extends React.Component{

  state = {}


  onChangeData = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  sendData = (event) => {
    event.preventDefault();
    console.log('Send Data', this.state);
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      web: this.state.web,
      countrie: this.state.countrie
    }

    if(this.props.match.params.id){
      axios.put('http://localhost:4000/api/users/' + this.props.match.params.id, newUser)
      console.log("User Updated");
    }else{
      /* POST to users API */
      axios.post('http://localhost:4000/api/users', newUser)
      console.log("User Added");
    }

  
    // Return Home
    window.location.href = '/';
  }

  componentDidMount(){
    if(this.props.match.params.id){
      axios.get('http://localhost:4000/api/users/' + this.props.match.params.id)
            .then(request => {
                const user = request.data;
                this.setState({ name: user.name, email: user.email, web: user.web, countrie: user.countrie });
            })
            .catch(error => {
                this.setState({ data: null, error: error });
            })
      
    }
  }

  render(){
    const { classes } = this.props;
  
    return(
      <form className={classes.root} noValidate autoComplete="off">
          <TextField id="outlined-basic" name="name" placeholder="Name" onChange={this.onChangeData}/>
          <TextField id="outlined-basic" name="email" placeholder="Email" onChange={this.onChangeData}/>
          <TextField id="outlined-basic" name="web" placeholder="Web" onChange={this.onChangeData}/>
          <TextField id="outlined-basic" name="countrie" placeholder="Location" onChange={this.onChangeData}/>
          <Button onClick={this.sendData}>Send</Button>
        </form>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form);
