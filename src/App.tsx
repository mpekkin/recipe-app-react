import { useState } from 'react'
import './App.css'
import React from 'react'
import Header from './components/Header'
import RecipeCard from './components/RecipeCard'
import Footer from './components/Footer'

export interface IngredientsItem {
  id: number,
  text: string
}

export interface PreparationItem {
  id: number,
  text: string
}

export interface RecipeItem {
  id: number,
  name: string,
  ingredients: IngredientsItem[],
  preparation: PreparationItem[]
}




function App() {

const [recipe, setRecipe] = useState({
  id: 123,
  name: "Marjarahka",
  ingredients: [
    {
      id: 1,
      text: "1 prk vaahtoutuvaa vaniljakastike"
    },
    {
      id: 2,
      text: "1 prk maitorahkaa"
    },
    {
      id: 3,
      text: "5 dl marjoja"
    },
    {
      id: 4,
      text: "1 rkl sokeria"
    }
  ],
  preparation: [
    {
      id: 1,
      text: "Vaahdota vaniljakastike paksuksi vaahdoksi. Lisää rahka ja sekoita tasaiseksi."
    },
    {
      id: 2,
      text: "Sekoita joukkoon kohmeiset marjat ja makeuta sokerilla."
    }
  ]
})
  return (
    <>
      <Header/> 
      <RecipeCard
      recipe={recipe}
      />
      <Footer/>
    </>
  )
}

export default App
