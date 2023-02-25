import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import  MyNav  from '../components/MyNav/MyNav.jsx'
import Login from '../pages/Login/Login.jsx'
import { Provider } from 'react-redux'
import { groovy } from '../index.jsx'
import Home from '../pages/Home.jsx'
import Dashboard from '../pages/Dashboard.jsx'
import Footer from '../components/Footer/Footer.jsx'


const App = () => {
  return (
    <BrowserRouter>
      <Provider store={groovy}>
        <Container>
        <MyNav />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
          </Routes>
        </Container>
        <Footer />
        </Provider>
    </BrowserRouter>
  )
}

export default App