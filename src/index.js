import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css"
import "./Components/Navbar/Navbar.css"
import "./Components/BookDetails/BookDetails.css"


import { BrowserRouter } from 'react-router-dom';
import App from './app';

 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    
        <BrowserRouter> <App/> </BrowserRouter>
    </>
);
