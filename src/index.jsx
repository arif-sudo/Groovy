import React from 'react';
import ReactDOM from 'react-dom/client';
import { addBlog, removeBlog, updateBlog } from '../src/myredux/action/action'
import configureStore from './myredux/store/store';
import App from './router/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

// const mystore = configureStore()

// mystore.subscribe(() => console.log(mystore.getState()))

// const blog1 = mystore.dispatch(addBlog({title: 'react', desc: 'salam'}))

// mystore.dispatch(updateBlog(blog1.blog.id, {title: 'update', desc: "bmu"}))

// mystore.dispatch(removeBlog(blog1.blog.id))

export const groovy = configureStore()

groovy.subscribe(() => console.log(groovy.getState()))

groovy.dispatch(addBlog({
  title: "The spectacle before us was indeed sublime",
  img: "https://themes.estudiopatagon.com/wordpress/groovy/wp-content/uploads/2019/08/light-bulb-creative-business-idea-symbol-held-by-hand_53876-127176-1-450x500.jpg",
  date: "11 January, 2019",
  header: "Travel",
  desc: "Welcome, it’s great to have you here. We know that first impressions are important, so we’ve populated your new site with some initial getting started posts that will help you get familiar…",
}))
groovy.dispatch(addBlog({
  title: "The meaning of health has evolved over time",
  img: "https://themes.estudiopatagon.com/wordpress/groovy/wp-content/uploads/2019/07/various-types-pumpkins-arranged-height-food-gravity-concept-autumn-halloween-theme_492182-203-1-450x500.jpg",
  date: "26 July, 2019",
  header: "Health",
  desc: "In keeping with the biomedical perspective, early definitions of health focused on the theme of the body’s ability to function; health was seen as a state of normal function that…",
}))
groovy.dispatch(addBlog({
  title: "Customizing your brand and design settings",
  img: "https://themes.estudiopatagon.com/wordpress/groovy/wp-content/uploads/2019/07/hand-drawing-illustration-successful-concept_53876-36763-450x500.jpg",
  date: "August 15, 2019",
  header: "Lifestyle",
  desc: "The Ghost editor has everything you need to fully optimise your content. This is where you can add tags and authors, feature a post, or turn a post into a…",
}))
groovy.dispatch(addBlog({
  title: "Musical improvisation is the spontaneous music",
  img: "https://themes.estudiopatagon.com/wordpress/groovy/wp-content/uploads/2019/07/radio-concept-with-cassette-yellow-background_23-2148681171-450x500.jpg",
  date: "July 25, 2019",
  header: "Music",
  desc: "It was one of the worst storms to hit London since God knows when. The thunder rolled, lightning flashed and the rain hammered into the roof. There’s something about a…",
}))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

