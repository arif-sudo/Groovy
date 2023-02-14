import React from 'react'
import  MyNav  from '../components/MyNav/MyNav.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import MySlide from '../components/Slide/MySlide.jsx'

const App = () => {
  return (
    <BrowserRouter>
        <Container>
        <MyNav />
        <MySlide />
        <Routes>
            <Route></Route>
        </Routes>
        </Container>
    </BrowserRouter>
  )
}

export default App