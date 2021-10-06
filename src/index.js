import { react } from '@babel/types';
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import "./index.css"
import Hello from "./Dynamic_name.js";
import Time from './Time.js';

   const app = (
       <>
       <Hello />
       <Time />
       </>
   )
    ReactDOM.render(app, document.getElementById('Root'));




