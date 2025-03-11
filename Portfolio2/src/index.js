import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: Home(),
  },
  {
    path: "/test",
    element: Test(),
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 
