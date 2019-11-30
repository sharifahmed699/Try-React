import React, { Component } from 'react';

class Select extends Component {

    constructor(){
        super()
        this.state={
            city1:"Dhaka",
            city2:"Barisal",
            city3:"Comilla",
            city4:"Bhairab"
        }
    }
    render() {
        return (
            <div>
                <select >
                    <option>{this.state.city1}</option>
                    <option>{this.state.city2}</option>
                    <option>{this.state.city3}</option>
                    <option>{this.state.city4}</option>
                    <option>{this.state.city1}</option>
                </select>
            </div>
        );
    }
}

export default Select;