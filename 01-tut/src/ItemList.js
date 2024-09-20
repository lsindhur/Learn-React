import React from 'react'
import LineItem from './LineItem'

const ItemList = ({items, handleClick, handleDelete}) => {
  return (
    <ul>
          {items.map(item => (
            <LineItem 
            key={item.id}
            item={item}
            handleDelete = {handleDelete}
            handleClick = {handleClick}
          /> 
          ))}
        </ul>
  )
}

export default ItemList