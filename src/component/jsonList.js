import React, { Component } from 'react';

class jsonList extends Component {
    render() {
        const mylist=[
            {
                city:"Dhaka",
                zip:"1212"
            },
            {
                city:"Barisal",
                zip:"5350"
            },
            {
                city:"Rangpure",
                zip:"2000"
            }
        ]

        const dataItems=mylist.map((data)=>{
            return <option>{data.city}</option>
        });

        return (
            <div>
                <select>{dataItems}</select>
            </div>
        );
    }
}

export default jsonList;