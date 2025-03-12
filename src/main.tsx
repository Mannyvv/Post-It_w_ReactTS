import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-social/bootstrap-social.css';
import 'font-awesome/css/font-awesome.css';
import "./App.css";
import "@fontsource/source-code-pro"; 
import "@fontsource/caveat"; 
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';
import "./App.css"

Amplify.configure(outputs);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter> 
  </React.StrictMode>
);


