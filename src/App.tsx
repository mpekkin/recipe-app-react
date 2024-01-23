import { useState } from 'react'
import './App.css'
import React from 'react'
import Header from './components/Header'
import RecipeCard from './components/RecipeCard'
import Footer from './components/Footer'
import { uid } from 'uid'

export interface IngredientsItem {
  id: string,
  text: string
}

export interface PreparationItem {
  id: string,
  text: string
}

export interface RecipeItem {
  id: string,
  name: string,
  ingredients: IngredientsItem[],
  preparation: PreparationItem[]
}




function App() {

const [recipe, setRecipe] = useState({
  id: uid(),
  name: "Marjarahka",
  ingredients: [
    {
      id: uid(),
      text: "1 prk vaahtoutuvaa vaniljakastike"
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
  return (
    <>
      <Header/> 
      <RecipeCard
      recipe={recipe}
      setRecipe={setRecipe}
      />
      <Footer/>
    </>
  )
}

export default App
