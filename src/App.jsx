// src/App.jsx

import React from 'react';

import { RouterProvider } from "react-router-dom";
import { router } from './Layout/Router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './App.css'; // Custom styles

const App = () => {


    return (
        <>

            <RouterProvider router={router} />
        </>
    );
};

export default App;
