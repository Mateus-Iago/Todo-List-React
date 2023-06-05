import { useEffect, useState } from 'react'
import './App.css'
import Item from './components/item'
import List from './components/List'
import TodoForm from './components/Form'


function App() {

  const [items, setItems] = useState([])

  useEffect(() => {
    let sItems = JSON.parse(localStorage.getItem('savedItems'))
    if(sItems){
      setItems(sItems)  
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('savedItems', JSON.stringify(items))
  }, [items])

  function onAddItem(text){

    let it = new Item(text)

    setItems([...items, it])
  }
  
  function onItemDeleted(item){
    
    let filteredItems = items.filter(it=>it.id != item.id)

    setItems(filteredItems)

  }

  function onDone(item){
    let updatedItems = items.map(it=>{
      if(it.id === item.id){
        it.done = !it.done
      }
      return it
    })

    setItems(updatedItems)
  }
  
  return (
    <>
      <div className="container">
        <h1>ToDo</h1>
        <TodoForm onAddItem={onAddItem}></TodoForm>
        <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
        <img src="./assets/trash.png" alt="" />

      </div>
    </>
  )
}

export default App
