import React from 'react'

//  function Greet() {
//      return (
//          <div>
//              <h1>hello</h1>
//          </div>function Greet() {
//      return (
//          <div>
//              <h1>hello</h1>
//          </div>
//      )
//  }
//      )
//  }

export const Greet = props => 
{
    console.log(props)
    return<h1> hello {props.name} </h1>
}

 export default Greet;


