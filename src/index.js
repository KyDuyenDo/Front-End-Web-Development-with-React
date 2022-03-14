import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'font-awesome/css/font-awesome.min.css';
 import 'bootstrap-social/bootstrap-social.css';
//fake comment
// function emitComment(id){
//   setInterval(() => {
//     window.dispatchEvent(
//       new CustomEvent(`dish-${id}`,{
//         detail: `Comment of ${id}`
//       })
//     )
//   },2000)
// }
// emitComment(0)
// emitComment(1)
// emitComment(2)
// emitComment(3)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
