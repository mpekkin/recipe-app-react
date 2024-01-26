import { useState } from 'react'
import './App.css'
import React from 'react'
import Header from './components/Header'
import RecipeCard from './components/recipe form/RecipeCard'
import Footer from './components/Footer'
import { uid } from 'uid'
import { HomePage } from './components/HomePage'
import { RouterProvider } from 'react-router'
import router from "./components/routes"
import { createBrowserRouter } from 'react-router-dom'
import Root from './components/Root'
import { ErrorPage } from './components/ErrorPage'
import { RecipeDisplay } from './components/RecipeDisplay'


export interface contentItem {
  id: string,
  text: string
}

export interface IngredientsItem {
  subtitle: string | undefined,
  id: string,
  content: contentItem[]
}

export interface PreparationItem {
  id: string,
  text: string
}

export interface RecipeItem {
  id: string,
  name: string,
  tags: Array<string>
  ingredients: IngredientsItem[],
  preparation: PreparationItem[]
}


function App() {

const [recipe, setRecipe] = useState<RecipeItem>({
  id: uid(),
  name: "Marjarahka",
  tags: [],
  ingredients: [
    {
      subtitle: undefined,
      id: uid(),
      content:[
        {
          id: uid(),
          text: "1 prk vaahtoutuvaa vaniljakastiketta"
        },
        {
          id: uid(),
          text: "1 prk maitorahkaa"
        },
        {
          id: uid(),
          text: "5 dl marjoja"
        },
        {
          id: uid(),
          text: "1 rkl sokeria"
        }
      ]
    },
    {
      subtitle: "Koristeluun",
      id: uid(),
      content: [
        {
          id: uid(),
          text: "Mintunlehtiä"
        }
      ]
    }
  ],

  preparation: [
    {
      id: uid(),
      text: "Vaahdota vaniljakastike paksuksi vaahdoksi. Lisää rahka ja sekoita tasaiseksi."
    },
    {
      id: uid(),
      text: "Sekoita joukkoon kohmeiset marjat ja makeuta sokerilla."
    }
  ]
})

/* const router = createBrowserRouter([
  {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage/>,
      children: [
          {
              path: "home",
              element: <HomePage recipe={recipe} setRecipe={setRecipe}/>
          },
          {
              path: "recipes/new",
              element: <RecipeCard recipe={recipe} setRecipe={setRecipe}/>
              
          }
      ],
  },
]) */

  return (
    <div className='page-container'>
    <Header/>
    <RecipeDisplay
    recipe={recipe}
    />
    <Footer/>
    </div>
  )
  }

export default App

/* <RouterProvider router={router}/> */


/*     <div className='page-container'>
       <Header/> 
       <RecipeCard
        recipe={recipe}
        setRecipe={setRecipe}
      />
      <HomePage
      recipe={recipe}
      setRecipe={setRecipe}
      />
      <Footer/>

    </div> */