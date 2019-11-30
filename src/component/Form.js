import React, { Component } from 'react';

class Form extends Component {
    constructor(){
        super()
        this.state={
            username:" "
        }
    }
    onChangHandler=(event)=>{
        var myname=event.target.name;
        var myvalue=event.target.value;
        this.setState({[myname]:myvalue})

    }
    onSubmitHandler=()=>{
        alert(this.state.username)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <p>First form</p>
                     <p>{this.state.username}</p>
                    <input name="username" onChange={this.onChangHandler} type="text" placeholder="first name"></input>
                   <br/>
                    <input type="submit"></input>
                </form>
            </div>
        );
    }
}
export default Form;