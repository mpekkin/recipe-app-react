import { useState } from 'react'
import { useImmer } from 'use-immer'
import './App.css'
import React from 'react'
import Header from './components/Header'
import RecipeCard from './components/recipe card/RecipeCard'
import Footer from './components/Footer'
import { uid } from 'uid'

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
