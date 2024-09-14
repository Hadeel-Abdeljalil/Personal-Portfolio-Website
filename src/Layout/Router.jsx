import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../Components/Home/Home'
import About from '../Components/About/About'
import Header from '../Components/Header/Header'
import Skills from '../Components/Skills/Skills'

export const router =createBrowserRouter(
  [
    {
      path:"/",
      element:<Home/>,
      children:[
        
        {
          index:true,
          element:<Header/>
        },
        {
          path:"about",
          element:<About/>
        },
        {
          path:"skills",
          element:<Skills/>
        },

      ]
    }
  ]
)