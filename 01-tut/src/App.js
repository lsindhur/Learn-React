
import { useState } from 'react'
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';


function App() {
  const [items, setItems] = useState([
    {
        id: 1,
        checked: true,
        item: "One half pound bag of Cocoa Covered Almonds Unsalted"
    },
    {
        id: 2,
        checked: false,
        item: "Item 2"
    },
    {
        id: 3,
        checked: false,
        item: "Item 3"
    }
]);

const [newItem, setNewItem] = useState('')

const setAndSaveItems = (newItems) => {
  setItems(newItems);
  localStorage.setItem('shoppinglist', JSON.stringify(newItems));
}


const addItem = (item) => {
  const id = items.length ? items[items.length - 1].id + 1 : 1; //taking id value of last item in list and adding 1 to it
  const myNewItem = {id, checked:false, item};
  const listItems = [...items, myNewItem];
  setAndSaveItems(listItems);
}

const handleClick = (id) => {
  const listItems = items.map((item) => item.id === id? {...item,checked:!item.checked} : item)
  setAndSaveItems(listItems);
}

const handleDelete = (id) => {
  const listItems = items.filter((item) => item.id !== id)
  setAndSaveItems(listItems);
}


const handleSubmit = (e) => {
  e.preventDefault();
  if(!newItem) {
    return;
  }
  addItem(newItem)//call addItem function to add item to list
  setNewItem('') //setting the new item back to empty because we want the state to change once an item is submitted
}

  return (
    <div className="App">
      <Header title="Groceries"/>
      <AddItem
      newItem = {newItem}
      setNewItem = {setNewItem}
      handleSubmit = {handleSubmit}
      />
      <Content 
      items={items}
      handleDelete = {handleDelete}
      handleClick = {handleClick}
      />
      <Footer length= {items.length}/> {/* we need to display the list items of content in footer. Take necessary data from content component, move it to app and then drill it to both content and footer compnents */}
      
    </div>
  );
}

export default App;
