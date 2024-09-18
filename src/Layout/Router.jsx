import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../Components/Home/Home'
import About from '../Components/About/About'
import Header from '../Components/Header/Header'
import Skills from '../Components/Skills/Skills'
import Education from '../Components/Education/Education'
import Projects from '../Components/Projects/Projects'
import Contact from '../Components/Contact/Contact'

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
        {
          path:"education",
          element:<Education/>
        },
        {
          path:"Project",
          element:<Projects/>
        },
        {
          path:"contact",
          element:<Contact/>
        }

      ]
    }
  ]
)