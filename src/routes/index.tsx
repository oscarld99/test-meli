import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  Detail,
  Home,
  NotFound,
  Search
} from 'pages'

const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          Component={Home}
          index
          path='/' />
        <Route Component={Search} path='/items' />
        <Route Component={Detail} path='/items/*' />
        <Route path='*' Component={NotFound} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router