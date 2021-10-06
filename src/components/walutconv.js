import React, { Component } from 'react'
import ReactDOM from 'react-dom'


class CurencyChange extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Pln: 0,
            Eur: 0,
        };
    }

    changeCurency(value,scale){
        switch(scale){
            case "Eur":
                this.setState({Pln: value * 4.6009, Eur: value});
                return;
            case "Pln":
                this.setState({Eur: value * 0.21735, Pln: value});
                return;
        }
    }

    render(){
        return<>
        <p>Pln</p>
        <input type="text" value={this.state.Pln} onChange={(event) => this.changeCurency(event.target.value, "Pln") }/>
        <p>Eur</p>
        <input type="text" value={this.state.Eur} onChange={(event) => this.changeCurency(event.target.value, "Eur") }/>
        </>
    }
}
export default CurencyChange;