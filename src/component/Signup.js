import React, { Component } from 'react';

class Signup extends Component {

    constructor(){
        super()
        this.state={
            fname : " ",
            lname : " ",
            email : " ",
            phone : " "

        }
    }
    onChangeHandler=(event)=>{
        var inputName=event.target.name;
        var inputValue=event.target.value;
        this.setState({[inputName]:inputValue})
    }
    render() {
        
        return (
            <div>
                 <p>First Name : {this.state.fname}</p>
                 <p>First Name : {this.state.lname}</p>
                 <p>First Name : {this.state.email}</p>
                 <p>First Name : {this.state.phone}</p>
                <form>
                    <input onChange={this.onChangeHandler} type="text" name="fname" placeholder="First Name"></input><br></br>
                    <input onChange={this.onChangeHandler} type="text" name="lname" placeholder="Last Name"></input><br></br>
                    <input onChange={this.onChangeHandler} type="text" name="email" placeholder="Email"></input><br></br>
                    <input onChange={this.onChangeHandler} type="text" name="phone" placeholder="Contact Number"></input><br></br>
                    <input type="submit" value="Save Now"></input>
                </form>
            </div>
        );
    }
}

export default Signup;