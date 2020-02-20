import React, { Component } from 'react'





export class Counter extends Component {




    
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }





    render() {
        return (
            <div>
              count-{this.state.count}  
              <button onClick={ () => this.increment()  }>on</button> 
            </div>
        )
    }
}



export default Counter
