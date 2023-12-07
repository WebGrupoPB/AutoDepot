import React from 'react'
import Home from './routes/Home.jsx'
import Inicio from './routes/Inicio.jsx';
import Nosotros from './routes/Nosotros.jsx';
import Marcas from './routes/Marcas.jsx';
import Ubicaciones from './routes/Ubicaciones.jsx';


import './index.css'

import * as ReactDOM from "react-dom/client";
import {
   createBrowserRouter,
   RouterProvider,
 } from "react-router-dom";


 
 const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Error Page :c</h1>,
   },
   {
    path: "/inicio",
    element: <Inicio />,
   },
   {
    path: "/nosotros",
    element: <Nosotros />,
   },
   {
    path: "/marcas",
    element: <Marcas />,
   },
   {
    path: "/ubicaciones",
    element: <Ubicaciones />,
   },


 ]); 

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
   <React.StrictMode>
     <RouterProvider router={router} />
   </React.StrictMode>
 );
