import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}> {/* we don't need pass the event, submit automatically passes it */}
        <label htmlFor='addItem'>Add Item</label>
        <input
        id='addItem'
        autoFocus
        type='text'
        placeholder='Add item..'
        required
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
        />
        <button type='submiit'><FaPlus /> </button>
    </form>
  )
}

export default AddItem