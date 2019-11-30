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

        if(inputName=="fname"){
            var namePattern=/^([a-zA-Z ]){2,30}$/;
            if(!namePattern.test(inputValue))
            this.setState({fname:"First Name is not Valid!!"});
        }
        if(inputName=="lname"){
            var namePattern=/^([a-zA-Z ]){2,30}$/;
            if(!namePattern.test(inputValue))
            this.setState({lname:"last Name is not Valid!!"});
        }
        if(inputName=="email"){
            var emailPattern=/\S+@\S+\.\S+/;
            if(!emailPattern.test(inputValue))
            this.setState({email:"Email  is not Valid!!"});
        }
        if(inputName=="phone"){
            if(!Number(inputValue))
            this.setState({phone:"phone Number  is not Valid!!"});
        }
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