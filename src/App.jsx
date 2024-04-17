
import { useState } from "react";
import Form from "./Form.jsx";
import { nanoid } from "nanoid";
import Items from "./items.jsx";
import { ToastContainer, toast } from 'react-toastify';



let getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) {
    list = JSON.parse(localStorage.getItem('list'))
  } else {
    list = [];
  }

  return list;

}

let setLocalStorage = (newItem) => {
  let list = localStorage.setItem('list', JSON.stringify(newItem));
}

function App() {

  let [items, setItems] = useState(getLocalStorage());

  let addItem = (itemName) => {
    let newItem = {
      name: itemName,
      completed: false,
      id: nanoid()

    }


    let newItems = [...items, newItem]

    setItems(newItems)
    setLocalStorage(newItems)
    toast.success('Item Added to the List')
  }

  let removeItem = (itemId) => {
    let newItem = items.filter((item) => {
      return item.id !== itemId;
    })
    setItems(newItem)
    setLocalStorage(newItem)
    toast.success('Item Deleted')
  }


  let editItem = (itemId) => {

    let newItem = items.map((item) => {

      if (itemId === item.id) {

        let newItem = { ...item, completed: !item.completed };

        return newItem;

      }
      return item;

    })

    setItems(newItem)
    setLocalStorage(newItem)
  }

  return (
    <>
      <div className="min-h-[100vh] container bg-white mx-auto flex justify-center items-center">
        <div className="todo-container xl:w-[40%] md:w[50%] w-[80%] min-h-[300px] max-h-[auto]: bg-slate-100 shadow-md hover:shadow-lg">
          <h3 className="my-6 text-3xl text-center">Grocery Bug</h3>
          <ToastContainer />
          <Form addItem={addItem} />
          <Items items={items} removeItem={removeItem} editItem={editItem} />

        </div>
      </div>
    </>
  )
}

export default App;
