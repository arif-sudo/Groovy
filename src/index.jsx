import React from 'react';
import ReactDOM from 'react-dom/client';
import {addBlog, removeBlog, updateBlog  } from '../src/myredux/action/action'
import configureStore from './myredux/store/store';
import App from './router/App';

const mystore = configureStore()

mystore.subscribe(() => console.log(mystore.getState()))

const blog1 = mystore.dispatch(addBlog({title: 'react', desc: 'salam'}))

mystore.dispatch(updateBlog(blog1.blog.id, {title: 'update', desc: "bmu"}))

mystore.dispatch(removeBlog(blog1.blog.id))





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1><App /></h1>
  </React.StrictMode>
);

