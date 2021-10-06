import React, { Component } from 'react'
import ReactDOM from 'react-dom'


class Harnas extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Harnas: 0,
            Eur: 0,
        };
    }

    changeCurency(value,scale){
        switch(scale){
            case "Eur":
                this.setState({Harnas: value / 0.54 , Eur: value});
                return;
            case "Harnaś":
                this.setState({Eur: value * 0.54, Harnas: value});
                return;
        }
    }

    render(){
        return<>
        <div id="piwo">
        <p>Harnaś (polish beer)</p>
        <input type="text" value={this.state.Harnas} onChange={(event) => this.changeCurency(event.target.value, "Harnaś") }/>
        <p>Eur</p>
        <input type="text" value={this.state.Eur} onChange={(event) => this.changeCurency(event.target.value, "Eur") }/>
        </div>
        </>
    }
}
export default Harnas;