import { react } from '@babel/types';
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
class Time extends React.Component {

    constructor(props){
        super(props);
        this.state = {date: new Date()}
    }

    componentDidMount(){
        setInterval(() => this.tick(), 1000);
        }
    tick() {
            this.setState({
              date: new Date()
            });
    }
    render() {
        return (
     <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
     </div>
        );
    }
}

   // const app = <><Hello /><p>Ciao!!</p>{first}</>;
   const app = (
       <>
       <Hello />
       <Time />
       </>
   )
    ReactDOM.render(app, document.getElementById('Root'));




