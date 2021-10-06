import { react } from '@babel/types';
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import "./index.css"
import Hello from "./Dynamic_name.js";
import Time from './Time.js';
import CurencyChange from './components/walutconv';
import Harnas from './components/harnasToEUR';

//        <Hello />
  //      <Time />
    //    <Harnas />
   const app = (
       <main>
        <CurencyChange />
       </main>
   )
    ReactDOM.render(app, document.getElementById('Root'));




