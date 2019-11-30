import React, { Component } from 'react';

class List extends Component {
    myDataChild=(data)=>{
    return <option>{data}</option>
    }
    render() {
        const country=['Bangladesh','indian','China'];
        const dataItem=country.map(this.myDataChild)
        return (
            <div>
              <select>{dataItem}</select>
            </div>
        );
    }
}

export default List;