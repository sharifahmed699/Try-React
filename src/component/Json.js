import React, { Component } from 'react';

class Json extends Component {
    render() {
        const myList=[
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

        const dataItemsCity=myList.map((dataCity)=>{
            return <option>{dataCity.city}</option>
        });
        const dataItemsZip=myList.map((dataZip)=>{
            return <option>{dataZip.zip}</option>
        });
        
        return (
            <div>
                 <select>{dataItemsCity}</select>
                 <select>{dataItemsZip}</select>
            </div>
        );
    }
}

export default Json;