import React from 'react'
import  MyNav  from '../components/MyNav/MyNav.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import MySlide from '../components/Slide/MySlide.jsx'
import Grids from '../pages/Grids.jsx'
import Login from '../pages/Login.jsx'
import Home from '../pages/Home.jsx'
import { Provider } from 'react-redux'
import { groovy } from '../index.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={groovy}>
        <Container>
        <MyNav />
        <MySlide />
        <Grids />
          <Routes>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/salam' element={<Home />}></Route>
          </Routes>
        </Container>
        </Provider>
    </BrowserRouter>
  )
}

export default App