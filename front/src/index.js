import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Chat from './components/chat'
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Inicio from './components/Inicio';
import Botia from './components/Botia';

const router = createBrowserRouter([{
  path: '/',
  element: <App/>
},
{
  path: '/chatbot',
  element: <Chat/>
},
{
  path: '/inicio',
  element: <Inicio/>
},
{
  path: '/botia',
  element: <Botia/>
}
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
