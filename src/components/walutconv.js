import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CurancyBox from "./changeBox"


class CurencyChange extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Pln: 0,
            Eur: 0,
        };
        this.changeCurency = this.changeCurency.bind(this);

    }

    changeCurency(value,scale){
        switch(scale){
         
            case "Pln":
                this.setState({Pln: value * 0.21735, Eur: value});
                return;
            case "Eur":
                this.setState({Eur: value * 4.6009, Pln: value});
                return;
        }
    }

    render(){
        return(
 <main>
        <CurancyBox
         CurancyName="Eur"
         CurancyValue={this.state.Pln}
         changeCurency={this.changeCurency}
        />

        <CurancyBox
         CurancyName="Pln"
         CurancyValue={this.state.Eur}
         changeCurency={this.changeCurency}
        />
      </main>
        )}
}
export default CurencyChange;