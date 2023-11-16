import React from 'react'
import './App.scss'
import AppLayout from './components/layout/AppLayout/AppLayout'
import Missions from './components/pages/Missions/Missions'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from 'components/pages/About/About'

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Missions />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
