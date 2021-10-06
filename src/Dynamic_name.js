import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Hello extends React.Component
{
    constructor(props){
        super(props);
        this.state = {sayHello: "World"}

    }
    handleEvent(event){
        const name = event.target.value;
        this.setState({sayHello: name});
    }
    render(){
        return<>
            <h1>Hello... {this.state.sayHello}</h1>
            <input type="text" onChange={(event) => this.handleEvent(event)}/>
            </>
    }

}
export default Hello;
